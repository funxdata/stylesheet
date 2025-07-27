# 安装 Piksel UI

安装 Piksel UI 组件库和 template 模板渲染引擎
#### 一、默认安装

运行以下命令将 <span class="color-brand">template</span> 渲染引擎库和 <span class="color-brand">Piksel UI</span> 添加到您的项目中:

```npm
npm install git@gitee.com:funxd/template.git -D
npm install git@gitee.com:funxd/fx-pages.git -D
```

#### 二、link 标签中引入对应的 css 文件

```typeScript
https://static.funxdata.com/release/css/base18181.css         // Piksel UI CSS：
https://static.funxdata.com/release/font20230818/icons.css    // Piksel Icons CSS

```

#### 三、template 渲染引擎

> template 渲染引擎使用方法示例：

```typeScript
// 导入template
import template from 'template';
import { card } from 'fx-pages/module/card';
// 插入数据
const data = {
    "body": "StringNode",
    "name": "Zhang", 
    "age": 10
}
// 循环插入数据
const forData: [
    {"name": "Zhang", "age": 10 },
    {"name": "Wang", "age": 20 }
]
// template常用方法
template.nodeAfterbeginRender(card.default,data,Node)         // 根据node节点，插入元素内部的第一个子节点之前
template.nodeAfterbeginRenderFor(card.default,forData,Node)   // 根据node节点，循环插入元素内部的第一个子节点之前
template.nodeBeforeendRender(card.default,data,Node)          // 根据node节点，插入元素内部的最后一个子节点之后
template.nodeBeforeendRenderFor(card.default,forData,Node)    // 根据node节点，循环插入元素内部的最后一个子节点之后
template.nodeRender(card.default,data,Node)                   // 根据node节点页面渲染
template.nodeRenderFor(card.default,forData,Node)             // 根据node节点循环渲染
template.render(card.default,data,StringNode)                 // 根据自定义节点页面渲染
template.renderFor(card.default,forData,StringNode)           // 根据自定义节点循环渲染
template.tplhtml(card.default,data)                           // 页面渲染

```