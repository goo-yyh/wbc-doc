import config from '/doc/config.json';
import { renderComponent } from "../render/renderComponent";
import { MenuType } from "../constant";

const itemMap = {};
const componentMap = {};
let activeItem = null;

// 一级菜单
const renderTitle = function(name) {
  const div = document.createElement('div');
  div.className = 'doc-menu__group-title';
  div.innerText = name;
  return div;
}

// 二级菜单
const renderItem = function (name, type, href) {
  let h;
  if (type === MenuType.COMPONENT) {
    h = '#/component/' + href;
    componentMap[h] = {
      type: MenuType.COMPONENT,
      name: href
    };
  } else {
    h = '#/' + href;
    componentMap[h] = {
      type: MenuType.GUIDE,
      name: href
    };
  }
  const a = document.createElement('a');
  a.href = h;
  a.innerText = name;
  a.className = 'doc-menu__group-item';
  itemMap[h] = a;
  const div = document.createElement('div');
  div.appendChild(a);
  return div;
}

// 开发指南menu
const renderGuideGroup = function (guide) {
  const div = document.createElement('div');
  div.className = 'doc-menu__group';

  const title = renderTitle('开发指南');
  div.appendChild(title);
  guide.map(({ name, href }) => {
    div.appendChild(renderItem(name, MenuType.GUIDE, href));
  })

  return div;
}

// 组件menu
const renderComponentGroup = function (componentsGroup) {
  const frag = document.createDocumentFragment();

  for (let c of componentsGroup) {
    const div = document.createElement('div');
    div.className = 'doc-menu__group';
    const { name, components } = c;
    const title = renderTitle(name);
    div.appendChild(title);
    for (let com of components) {
      const { name, label } = com;
      const title = name + ' ' + label;
      div.appendChild(renderItem(title, MenuType.COMPONENT, com.name));
    }

    frag.appendChild(div);
  }
  return frag;
}

// 路由change触发
const menuChange = function () {
  const hash = location.hash.split('?')[0];
  if (!hash) {
    return location.href = '#/guide';
  }
  const hashArr = Object.keys(itemMap);
  if (hashArr.includes(hash)) {
    const a = itemMap[hash];
    activeItem && activeItem.classList.remove('active');
    a.classList.add('active');
    activeItem = a;

    // 路由改变时修改渲染的内容
    renderComponent(componentMap[hash]);
  } else {
    location.href = '#/guide';
  }
}

// 绑定路由事件
const bindMenuRouterChange = function () {
  window.removeEventListener('hashchange', menuChange);
  window.removeEventListener('load', menuChange);
  window.addEventListener('hashchange', menuChange);
  window.addEventListener('load', menuChange);
}

// 渲染menu
export const renderMenu = function () {
  const { guide, components } = config;
  const div = document.createElement('div');
  div.className = 'doc-menu-content';

  const menu = document.createElement('div');
  menu.className = 'doc-menu';
  menu.appendChild(renderGuideGroup(guide));
  menu.appendChild(renderComponentGroup(components));

  const content = document.createElement('div');
  const wrapper = document.createElement('div');
  wrapper.className = 'doc-content-wrapper';
  content.className = 'doc-content';
  wrapper.appendChild(content);

  div.appendChild(menu);
  div.appendChild(wrapper);

  const main = document.getElementById('main');
  main.appendChild(div);

  bindMenuRouterChange();
};