export const renderNav = function () {
  const html = `
    <div class="doc-nav-bar__name">
      <img src="/logo.png" height="40" alt="">
    </div>
    <div class="doc-nav-bar__action">
      actions 
    </div>
  `;
  const div = document.createElement('div');
  div.className = 'doc-nav-bar';
  div.innerHTML = html;
  const frag = document.createDocumentFragment();
  frag.appendChild(div);
  const main = document.getElementById('main');
  main.appendChild(frag);
}