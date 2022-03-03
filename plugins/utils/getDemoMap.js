const fs = require('fs');
const config = require('../../doc/config.json');
const path = require('path');

const url = config.componentsPath;
const demoPath = config.demoDir || 'demos';
const devPath = config.devDir || 'dev';
const demoConfigPath = './doc/demo-config.json';

const getDemoMap = function () {
  const demoMap = {};
  const components = fs.readdirSync(url);
  components.forEach(function(component){
    const demoFilePath = path.join(url, component, demoPath);
    const devFilePath = path.join(url, component, devPath);
    const demoToDev = {};
    try {
      fs.readdirSync(demoFilePath).forEach(md => {
        const mdPath = path.join(demoFilePath, md);
        const html = md.split('.md')[0] + '.html';
        const htmlPath = path.join(devFilePath, html);

        demoToDev[mdPath] = htmlPath;
        demoMap[component] = demoToDev;
      })
    } catch (err) {

    }
  })

  fs.writeFileSync(demoConfigPath, JSON.stringify(demoMap));
};

module.exports = getDemoMap;
