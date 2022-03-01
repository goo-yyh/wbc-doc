const fs = require('fs');
const path = require('path');
const config = require('../config.json');

class WebpackDemoPlugin {
  apply(compiler) {
    compiler.hooks.environment.tap(
      'WebpackDemoPlugin',
      () => {
        console.log('插件运行', config);
      }
    )

    compiler.hooks.watchRun.tap(
      'WebpackDemoPlugin',
      () => {
        console.log('插件运行 watch', config);
      }
    )
  }
}

module.exports = WebpackDemoPlugin;