import { renderDevice } from "./renderDevice";
import { renderCode } from "./renderCode";
import { renderMD } from "./renderMD";
import config from '../../../config.json';

export const renderCodeBlock = function (map, componentName) {
  const mds = Object.keys(map);
  const fragment = document.createDocumentFragment();
  mds.map(md => {
    const div = document.createElement('div');
    div.className = 'doc-content__code-block';
    const code = renderCode(md);
    const html = map[md];
    const device = renderDevice(html);
    div.appendChild(code);
    div.appendChild(device);
    fragment.appendChild(div);
  })
  const readmePath = config.componentsPath + '/' + componentName + '/README.md';
  const md = renderMD(readmePath);
  fragment.appendChild(md);

  const content = document.querySelector('.doc-content');
  content.appendChild(fragment);
}