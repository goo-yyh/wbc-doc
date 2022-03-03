# wbc-doc
用于 web-component 的移动端 doc 生成

<img src="http://img.gbyyh.com/img.png">

## doc中 config.json 配置说明

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

http://localhost:9000/

## 自定义

支持Vue的组件定义。

暂时只做了最基本的实现，后续还有问题可以提issue。

demo和dev的名字还是需要一一对应做映射，可以参考例子。

特别注意：

因为动态import配置的的原因，文件目录中的src文件夹千万不要修改。

组件内容都写在src文件夹中，如果修改，需要将对应有关src的代码都做一下修改。
