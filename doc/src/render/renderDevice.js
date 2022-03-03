import { createApp } from 'vue';

export const renderDevice = function (url) {
  const div = document.createElement('div');
  div.className = 'doc-content__device';

  import(`/src/${url}.vue`).then(Component => {
    createApp(Component.default)
      .mount(div);
  });

  return div;
}