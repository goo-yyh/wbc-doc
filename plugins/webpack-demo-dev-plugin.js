const getDemoMap = require('./utils/getDemoMap');

class WebpackDemoDevPlugin {
  apply(compiler) {
    compiler.hooks.watchRun.tap(
      'WebpackDemoPlugin',
      () => {
        console.log('插件运行 watching');
        getDemoMap();
      }
    )
  }
}

module.exports = WebpackDemoDevPlugin;