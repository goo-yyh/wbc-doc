import './style.css';
import { renderMenu } from "./components/menu";
import { renderNav } from "./components/nav-bar";

const init = function () {
  renderNav();
  renderMenu();
}

init();