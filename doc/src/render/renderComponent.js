import { renderGuide } from "./renderGuide";
import { MenuType } from "../constant";

export const renderComponent = function (hash) {
  const { name, type } = hash;
  const div = document.querySelector('.doc-content');
  div.innerHTML = '';
  if (type === MenuType.COMPONENT) {
    return console.log('this is component11', name);
  }
  renderGuide(name);
};