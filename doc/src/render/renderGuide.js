const renderMap = {
  guide: renderGuideIndex,
  plan: renderGuidePlan,
  question: renderGuideQuestion
};

export const renderGuide = function (name) {
  const fun = renderMap[name];
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