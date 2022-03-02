const renderMap = {
  guide: renderGuideIndex,
  plan: renderGuidePlan,
  question: renderGuideQuestion,
  default: renderDefaultPage
};

export const renderGuide = function (name) {
  const fun = renderMap[name] || renderMap.default;
  const div = document.querySelector('.doc-content');
  fun(div);
}

function renderGuideIndex (main) {
  main.innerHTML = `
    <h1>这里是开发指南</h1>
  `
}

function renderGuidePlan (main) {
  main.innerHTML = `
    <h1>这里是迭代计划</h1>
  `
}

function renderGuideQuestion (main) {
  main.innerHTML = `
    <h1>常见问题</h1>
  `
}

function renderDefaultPage (main) {
  main.innerHTML = `
    <h1>没有设置该页面内容~</h1>
  `
}