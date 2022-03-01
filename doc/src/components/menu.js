import config from '/config.json';
import { renderCodeBlock } from "../render/renderCodeBlock";

const itemMap = {};
let activeItem = null;

const renderTitle = function(name) {
  const div = document.createElement('div');
  div.className = 'doc-menu__group-title';
  div.innerText = name;
  return div;
}

const renderItem = function (name, type, href) {
  let h;
  if (type === 'component') {
    h = '#/component/' + href;
  } else {
    h = '#/' + href;
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

const renderGuideGroup = function (guide) {
  const div = document.createElement('div');
  div.className = 'doc-menu__group';

  const title = renderTitle('开发指南');
  div.appendChild(title);
  guide.map(({ name, href }) => {
    div.appendChild(renderItem(name, 'guide', href));
  })

  return div;
}

const renderComponentGroup = function (componentsGroup) {
  const frag = document.createDocumentFragment();

  for (let c of componentsGroup) {
    const div = document.createElement('div');
    div.className = 'doc-menu__group';
    const { name, components } = c;
    const title = renderTitle(name);
    div.appendChild(title);
    for (let com of components) {
      div.appendChild(renderItem(com, 'component', com));
    }

    frag.appendChild(div);
  }
  return frag;
}

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

    renderCodeBlock();
  } else {
    location.href = '#/guide';
  }
}

const bindMenuRouterChange = function () {
  window.removeEventListener('hashchange', menuChange);
  window.removeEventListener('load', menuChange);
  window.addEventListener('hashchange', menuChange);
  window.addEventListener('load', menuChange);
}

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