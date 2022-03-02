const getDemoMap = require('./utils/getDemoMap');

class WebpackDemoProdPlugin {
  apply(compiler) {
    compiler.hooks.environment.tap(
      'WebpackDemoPlugin',
      () => {
        console.log('插件运行');
        getDemoMap();
      }
    )
  }
}

module.exports = WebpackDemoProdPlugin;