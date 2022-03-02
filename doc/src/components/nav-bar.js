import { renderActions } from "../actions/renderActions";

export const renderNav = function () {
  const html = `
    <div class="doc-nav-bar__name">
      <img src="/public/logo.png" height="40" alt="">
    </div>
    <div class="doc-nav-bar__action"></div>
  `;
  const div = document.createElement('div');
  div.className = 'doc-nav-bar';
  div.innerHTML = html;

  renderActions(div);

  const frag = document.createDocumentFragment();
  frag.appendChild(div);
  const main = document.getElementById('main');
  main.appendChild(frag);
}