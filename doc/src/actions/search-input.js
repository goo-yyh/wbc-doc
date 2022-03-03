import config from '/doc/config.json';

const componentList = config.components.reduce((list, next) => {
  const coms = next.components || [];
  list = list.concat(coms);
  return list;
}, []);

const renderColorText = function (txt, key) {
  const index = txt.toLowerCase().indexOf(key.toLowerCase());
  const l = key.length;
  return `
    <span>
      ${txt.slice(0, index)}<span class="select-txt"">${txt.slice(index, index + l)}</span>${txt.slice(index + l)}
    </span>
  `;
}

export const renderSearchInput = function () {
  const div = document.createElement('div');
  div.className = 'search-input';

  const menu = renderMenu();
  const ipt = renderInput(menu);

  div.appendChild(ipt);
  div.appendChild(menu);

  return div;
};

const renderInput = function (menu) {
  const input = document.createElement('input');
  input.className = 'search-input__input';

  input.addEventListener('input', function (e) {
    const key = e.target.value;

    if (!key.trim()) {
      menu.style.display = 'none';
      return;
    }

    const components = componentList.filter(c => {
      const { name, label } = c;
      return name.toLowerCase().indexOf(key.toLowerCase()) > -1 || label.indexOf(key) > -1;
    })

    if (!components.length) {
      menu.innerHTML = '<li><p>没有查询结果</p></li>';
    } else {
      menu.innerHTML = components.reduce((html, next) => {
        return html + `
          <li>
            <a href="#/component/${next.name}">${renderColorText(next.label + ' ' + next.name, key)}</a>
          </li>
        `;
      }, '')
    }
    menu.style.display = 'block';
  })

  input.addEventListener('blur', function (e) {
    e.target.value = '';
    menu.style.display = 'none';
  });

  return input;
}

const renderMenu = function () {
  const ul = document.createElement('ul');
  ul.className = 'search-input__menu';

  return ul;
}