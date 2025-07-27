# AsideDoc 菜单（doc）

Paginations AsideDoc：

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
                <div class="tables-col">aside</div>
                <div class="tables-col">菜单（doc）</div>
                <div class="tables-col tables-width-xl">document.querySelector(`[fxtag="aside"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">asideIntroduce</div>
                <div class="tables-col">一级菜单</div>
                <div class="tables-col tables-width-xl">Element.querySelector(`[fxtag="asideIntroduce"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">asideUsage</div>
                <div class="tables-col">多级菜单</div>
                <div class="tables-col tables-width-xl">Element.querySelector(`[fxtag="asideUsage"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">menusItem</div>
                <div class="tables-col">列表项</div>
                <div class="tables-col tables-width-xl">Element.querySelector(`[fxtag="menusItem"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
        </div>
    </div>
</div>

Paginations AsideDoc-data：

<div class="vg-tables tables-wrap tables-aoto-scroller rowcolumn mb-16">
    <div class="vg-tables-header bg-gray-200 border-radius-xl">
        <div class="tables-col">{{data}}插入的值</div>
        <div class="tables-col">说明</div>
        <div class="tables-col">可选值</div>
        <div class="tables-col tables-col-last">类型</div>
    </div>
    <div class="vg-tables-body">
        <div class="tables-body-scroller">
            <div class="tables-row">
                <div class="tables-col">select</div>
                <div class="tables-col">列表项是否选中</div>
                <div class="tables-col">select(选中)</div>
                <div class="tables-col tables-col-last">类名</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">iconName</div>
                <div class="tables-col">一级菜单图标名称</div>
                <div class="tables-col">参考ui.https://ui.funxdata.com/</div>
                <div class="tables-col tables-col-last">string</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">text</div>
                <div class="tables-col">菜单标题</div>
                <div class="tables-col">-</div>
                <div class="tables-col tables-col-last">string</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">title</div>
                <div class="tables-col">二级菜单容器名称</div>
                <div class="tables-col">-</div>
                <div class="tables-col tables-col-last">string</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">fxtag</div>
                <div class="tables-col">二级菜单容器属性名</div>
                <div class="tables-col">-</div>
                <div class="tables-col tables-col-last">string</div>
            </div>
        </div>
    </div>
</div>

> AsideDoc组件的结构在fx-pages组件库中，调用方法示例：

```typeScript
import template from 'template';
import { asideDoc } from 'fx-pages/module/asideDoc';
const data = {
    asideIntroduce: [
        { iconName: "receipt", text: "简介", href: "overview" },
        // {...}
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
// 渲染aside容器
template.render(asideDoc.default, data, "app");

// 渲染aside一级列表
let oAsideContainer = document.querySelector("[fxtag='aside']") as HTMLElement;
let oAsideFirstChild = oAsideContainer.querySelector("[fxtag='asideIntroduce']") as HTMLElement;
let oAsideLastChild = oAsideContainer.querySelector("[fxtag='asideUsage']") as HTMLElement;

template.nodeRenderFor(asideDoc.introduce, data.asideIntroduce, oAsideFirstChild);
template.nodeRenderFor(asideDoc.usage, data.asideUsage, oAsideLastChild);

// 渲染aside多级列表
for (const item of data.asideUsage) {
    let oAasideLastChild_child = oAsideLastChild.querySelector(`[fxtag='${item.fxtag}']`) as HTMLElement;
    template.nodeRenderFor(asideDoc.usageChild, item.Title, oAasideLastChild_child);

    let aMenusItem = oAsideContainer.querySelectorAll("[fxtag='menusItem']")
    console.log(aMenusItem);
}
```

### 默认类型（ asideDoc.default ）

表示两种相互对立的状态间的切换。

<section class='row justify-center pcol-10 prow-20 border-radius-md box-shadow-all mb-16'>
  <div class="col-6 pcol-10">

    <aside class="vg-asides-doc overflow-y" fxtag="aside">
        <ul class="vg-menus-doc mb-12" fxtag="asideIntroduce">
            <li class="vg-menus-doc-li {{select}}" fxtag="menusItem">
                <span class="icons mr-8"><i class="vg-icon ic-{{iconName}}"></i></span>
                <p class="text">{{text}}</p>
            </li>
        </ul>
        <div class="menu-components-container" fxtag="asideUsage">
            <p class="title font-size-14 color-gray-500 prow-6 pl-8 pr-16 mt-12">{{title}}</p>
            <ul class="vg-menus-doc" fxtag="{{fxtag}}">
                <li class="vg-menus-doc-li {{select}}" fxtag="menusItem"> 
                    <p class="text">{{text}}</p>
                </li>
            </ul>
        </div>
    </aside>
    
  </div>
  
  <div class="col-6 row align-center pcol-10">
    <aside class="vg-asides-doc overflow-y" fxtag="aside" style="height: auto;">
        <ul class="vg-menus-doc mb-12">
            <li class="vg-menus-doc-li">
                <p class="icons mr-8"><i class="vg-icon ic-receipt"></i></p>
                <p class="text">简介</p>
            </li>
            <li class="vg-menus-doc-li">
                <p class="icons mr-8"><i class="vg-icon ic-project"></i></p>
                <p class="text">使用</p>
            </li>
        </ul>
        <div class="menu-components-container">
            <p class="title font-size-14 color-gray-500 pt-6 pb-6 pl-8 pr-16 mt-12">Element</p>
            <ul class="vg-menus-doc mb-12">
                <li class="vg-menus-doc-li">
                    <p class="text">Button 按钮</p>
                </li>
                <li class="vg-menus-doc-li">
                    <p class="text">Table 表格</p>
                </li>
            </ul>
        </div>
    </aside>
  </div>

</section>