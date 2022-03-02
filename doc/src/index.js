import './style.scss';
import { renderMenu } from "./components/menu";
import { renderNav } from "./components/nav-bar";

// 为了监听src改变
function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('../../src/', true, /\.justforwatch$/));
importAll(require.context('../../src/', true, /\.justforwatch$/));

const init = function () {
  renderNav();
  renderMenu();
}

init();