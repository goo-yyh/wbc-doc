import { mdRender } from "./mdRender";

export const renderMD = function () {
  const div = document.createElement('div');
  div.className = 'doc-content__readme';
  fetch('/src/component/button/README.md')
    .then(res => {
      return res.text();
    })
    .then(res => {
      console.log('res', mdRender.render(res));
      div.innerHTML = mdRender.render(res);
    });
  return div;
}