import { renderSearchInput } from "./search-input";

export const renderActions = function (div) {
  const searchInput = renderSearchInput();

  div.appendChild(searchInput);
}