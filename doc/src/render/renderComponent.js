import { renderGuide } from "./renderGuide";
import { renderCodeBlock } from "./renderCodeBlock";
import { MenuType } from "../constant";

export const renderComponent = function (hash) {
  const { name, type } = hash;
  const div = document.querySelector('.doc-content');
  div.innerHTML = '';
  if (type === MenuType.COMPONENT) {
    fetch('/doc/demo-config.json')
      .then(res => res.json())
      .then(res => {
        const config = res[name];
        renderCodeBlock(config, name);
        console.log('this is component render', name, config);
      });
    return;
  }
  renderGuide(name);
};