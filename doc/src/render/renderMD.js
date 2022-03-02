import { mdRender } from "./mdRender";

export const renderMD = function (url) {
  const div = document.createElement('div');
  div.className = 'doc-content__readme';
  fetch(url)
    .then(res => {
      return res.text();
    })
    .then(res => {
      div.innerHTML = mdRender.render(res);
    });
  return div;
}