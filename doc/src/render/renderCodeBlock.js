import { renderDevice } from "./renderDevice";
import { renderCode } from "./renderCode";
import { renderMD } from "./renderMD";

export const renderCodeBlock = function () {
  const div = document.createElement('div');
  div.className = 'doc-content__code-block';

  const device = renderDevice();
  const code = renderCode();
  const md = renderMD();
  div.appendChild(code);
  div.appendChild(device);

  const content = document.querySelector('.doc-content');
  content.appendChild(div);
  content.appendChild(md);
}