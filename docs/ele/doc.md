# Doc 文档框架

Paginations Doc：

<div class="vg-tables tables-wrap tables-aoto-scroller rowcolumn mb-16">
    <div class="vg-tables-header bg-gray-200 border-radius-xl">
        <div class="tables-col">「fxtag」属性名</div>
        <div class="tables-col">说明</div>
        <div class="tables-col tables-width-xl">调用方法</div>
        <div class="tables-col tables-width-last">类型</div>
    </div>
    <div class="vg-tables-body">
        <div class="tables-body-scroller">
            <div class="tables-row">
                <div class="tables-col">document</div>
                <div class="tables-col">文档框架</div>
                <div class="tables-col tables-width-xl">document.querySelector(`[fxtag="document"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">main</div>
                <div class="tables-col">内容容器</div>
                <div class="tables-col tables-width-xl">document.querySelector(`[fxtag="main"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
        </div>
    </div>
</div>

> doc组件的结构在fx-pages组件库中，调用方法示例：

```typeScript
import template from 'template';
import { doc } from "module/doc";
import * as header from "../components/header";
import * as aside from "../components/aside";

// 渲染doc框架
const oApp = document.querySelector("#app") as HTMLElement;
template.nodeRender(doc.default, {}, oApp);


// 在doc框架中插入对应的header
let headerData = {
    logoUrl: "https://book.funxdata.com/public/img/webmanage/logo.png",
    logoTile: "GUI",
    dataNav: [
        { title: "UI" },
        { title: "ICONS" },
    ]
}
header.pages("nodeAfterbeginRender", headerData, oApp);

// 在doc框架中插入对应的aside
const oFrameDoc = oApp.querySelector("[fxtag='content']") as HTMLElement;
let asideData = {
    asideIntroduce: [
        { iconName: "receipt", text: "简介", href: "overview" },
        { iconName: "project", text: "使用", href: "usage" },
        // { iconName: "sun", text: "主题", href: "theme" },
        { iconName: "hand", text: "布局 & 排版", href: "layout" },
    ],
    asideUsage: [
        {
            title: "Form",
            fxtag: "componentsForm",
            Title: [
                { text: "Checkbox 复选框", href: "checkbox" },
                { text: "Input 输入框", href: "input" },
            ],
        },
        // {...}
    ]
}
aside.pages("nodeAfterbeginRender", asideData, oFrameDoc);
```

### 默认类型（ doc.default ）

用来代表用户或事物，支持图片、图标或字符展示

<section class='row justify-center pcol-10 prow-20 border-radius-md box-shadow-all mb-16'>
  <div class="col-6 pcol-10">

    <!-- <header></header>-->
    <div class="containers row" fxtag="document">
        <!-- <aside></aside> -->
        <main class="vg-main-doc flex1 overflow-y markdown-body" fxtag="main"></main>
    </div>

  </div>
  
  <div class="col-6 row align-center justify-center pcol-10">
    <div id="app" class="text-center" style="width:400px">
        <header class="vg-headers-doc row align-center bg-gray-400 justify-center" style="position:relative">Header</header>
        <div class="containers row">
            <aside class="vg-asides-doc overflow-y bg-gray-200" style="width:100px;height:auto">Aside</aside>
            <main class="vg-main-doc flex1 overflow-y bg-gray-400" style="height:auto">Main</main>
            <!-- <footer id="footer"></footer> -->
        </div>
    </div>
  </div>

</section>
