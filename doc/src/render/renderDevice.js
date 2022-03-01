export const renderDevice = function () {
  const url = '../../src/component/button/dev/demo.html'
  const div = document.createElement('div');
  div.className = 'doc-content__device';
  const ifr = document.createElement('iframe');
  ifr.src = url;
  div.appendChild(ifr);
  return div;
}