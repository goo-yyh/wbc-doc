# wbc-doc
用于 web-component 的移动端 doc 生成

<img src="http://img.gbyyh.com/img.png">

## config.json 配置说明

| 名字           | 描述         |
| -------------- | ------------------- |
| name           | 没啥用      |
| guide          | 开发指南下面的menu, 需要去doc/render/renderGuide中配置渲染方法      |
| componentsPath | 组件文件夹的位置,需要用来读取文件夹下组件目录 |
| demoDir | 每个组件内demos的位置，需要读取demo,并生成和dev html的对应关系 |
| devDir | 每个组件内dev html的位置，html文件名称，要和对应的demo名称一致 |
| components | 文档内包含的所有组件。 根据类型type分类会显示在左侧的menu中，格式不能错，不然读不到组件名称  |

## 使用

npm install
npm run dev

## 自定义

方法都写在 doc/src 中，因为功能不多，而且是自用，所以代码比较简单，修改起来应该也很方便。

讲道理应该是没有框架限制的，只要经过合适的编译，通过js引入html中，所有框架都是可以实现的。

如果不想要用iframe的形式通过引入html形式展示组件，而是用框架代码，思路很简单，因为device的className是确定的，肯定能找到它，
用每个框架自己的渲染方法render进去就好了，感觉麻烦的是在编译这一步。

因为现在自己没有这个需求，如果有的话，后续再想想办法，加上不同框架的适配。
