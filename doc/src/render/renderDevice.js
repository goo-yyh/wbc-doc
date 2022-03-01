export const renderDevice = function (url) {
  const div = document.createElement('div');
  div.className = 'doc-content__device';
  const ifr = document.createElement('iframe');
  ifr.src = url;
  div.appendChild(ifr);
  return div;
}