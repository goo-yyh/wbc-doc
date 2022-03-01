import { mdRender } from "./mdRender";

export const renderCode = function () {
  const div = document.createElement('div');
  div.className = 'doc-content__code';
  fetch('/src/component/button/demos/demo.md')
    .then(res => {
      return res.text();
    })
    .then(res => {
      console.log('res', mdRender.render(res));
      div.innerHTML = mdRender.render(res);
    });
  return div;
}