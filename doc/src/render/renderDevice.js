import React from 'react';
import ReactDOM from 'react-dom';

export const renderDevice = function (url) {
  const div = document.createElement('div');
  div.className = 'doc-content__device';

  import(`/src/${url}.jsx`).then(Component => {
    ReactDOM.render(<Component.default />, div);
  });

  return div;
}