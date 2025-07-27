# Tabs 选项卡

Paginations Tabs：

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
                <div class="tables-col">tabs</div>
                <div class="tables-col">选项卡</div>
                <div class="tables-col tables-width-xl">document.querySelector(`[fxtag="tab"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">default</div>
                <div class="tables-col">渲染项(default)</div>
                <div class="tables-col tables-width-xl">Element.querySelectorAll(`[fxtag="default"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
        </div>
    </div>
</div>

Paginations Tabs-data：

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
                <div class="tables-col">tabsItemType</div>
                <div class="tables-col">是否选中</div>
                <div class="tables-col">select(选中)</div>
                <div class="tables-col tables-col-last">类名</div>
            </div>
        </div>
    </div>
</div>

> Tabs组件的结构在fx-pages组件库中，调用方法示例：

```typeScript
import template from 'template';
import { tabs } from 'fx-pages/module/tabs';
import muchList from "template/much/index";

let stardom = muchList.much(tabs.default, "default");  // 传入需要拆分的多级列项（参1:string, 参2:fxtag="default"）
let oApp = document.querySelector("#app") as HTMLElement;
let arr = ["list1","list2","list3"]

if (stardom && stardom.child) { 
    let oEl = stardom.el;        //需要的父容器
    let oChild = stardom.child   //需要的循环项
    
    for (const item of arr) {
        oChild.textContent = item //在child中插入值（可选）
        oEl.appendChild(oChild.cloneNode(true))  //在el中克隆所有child项
    }

    oApp.appendChild(oEl);        //在app中插入el父容器
}

```

### 默认类型（ tab.default ）

表示两种相互对立的状态间的切换。

<section class='row justify-center pcol-10 prow-20 border-radius-md box-shadow-all mb-16'>
  <div class="col-6 pcol-10">

    <ul class="vg-tabs mb-8 mcol-32" fxtag="tabs">
        <li class="vg-tabs-li {{tabsItemType}}" fxtag="default"></li>
    </ul>
    
  </div>
  
  <div class="col-6 row align-center pcol-10">
    <ul class="vg-tabs mb-8 mcol-32" fxtag="tabs">
        <li class="vg-tabs-li select" fxtag="default">列表一</li>
        <li class="vg-tabs-li " fxtag="default">列表二</li>
        <li class="vg-tabs-li " fxtag="default">列表三</li>
    </ul>
  </div>

</section>