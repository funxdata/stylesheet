# Breadcrumbs 面包屑导航

Paginations Breadcrumbs：

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
                <div class="tables-col">breadcrumbs</div>
                <div class="tables-col">面包屑导航</div>
                <div class="tables-col tables-width-xl">document.querySelector(`[fxtag="breadcrumbs"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">default</div>
                <div class="tables-col">导航项（default）</div>
                <div class="tables-col tables-width-xl">Element.querySelectorAll(`[fxtag="default"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">title</div>
                <div class="tables-col">名称</div>
                <div class="tables-col tables-width-xl">Element.querySelectorAll(`[fxtag="title"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
        </div>
    </div>
</div>

Paginations breadcrumbs-data：

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
                <div class="tables-col">breadcrumbsName</div>
                <div class="tables-col">名称</div>
                <div class="tables-col">-</div>
                <div class="tables-col tables-col-last">string</div>
            </div>
        </div>
    </div>
</div>

> breadcrumbs组件的结构在fx-pages组件库中，调用方法示例：

```typeScript
import template from 'template';
import muchList from "template/much/index";
import { breadcrumbs } from 'fx-pages/module/breadcrumbs';

let stardom = muchList.much(breadcrumbs.default, "default");  // 传入需要拆分的多级列项（参1:string, 参2:fxtag="default"）
let oApp = document.querySelector("#app") as HTMLElement;
let arr = ["list1","list2","list3"]

if (stardom && stardom.child) { 
    let el = stardom.el;        //需要的父容器
    let child = stardom.child   //需要的循环项
    
    for (const item of arr) {
        let oTitle = child.querySelector("[fxtag='title']") as HTMLElement  //获取title节点
        oTitle.textContent = item //title节点中插入值
        el.appendChild(child.cloneNode(true))  //在el中克隆所有child项
    }

    oApp.appendChild(el);        //在app中插入el父容器
}

```

### 默认状态（ breadcrumbs.default ）

<section class='row justify-center pcol-10 prow-20 border-radius-md box-shadow-all mb-16'>
  <div class="col-6 pcol-10">

    <ul class="vg-breadcrumbs" fxtag="breadcrumbs">
        <li class="vg-breadcrumbs-li" fxtag="default">
            <span class="text" fxtag="title"></span>
            <i class="vg-icon ic-right"></i>
        </li>
    </ul>   

  </div>
  
  <div class="col-6 row flex-wrap content-center align-center pcol-10">
    <ul class="vg-breadcrumbs" fxtag="breadcrumbs">
        <li class="vg-breadcrumbs-li" fxtag="breadcrumbsItems">
            <span class="text" fxtag="title">全部文件</span>
            <i class="vg-icon ic-right"></i>
        </li>
        <li class="vg-breadcrumbs-li" fxtag="breadcrumbsItems">
            <span class="text" fxtag="title">目录A</span>
            <i class="vg-icon ic-right"></i>
        </li>
        <li class="vg-breadcrumbs-li" fxtag="breadcrumbsItems">
            <span class="text" fxtag="title">目录B</span>
            <i class="vg-icon ic-right"></i>
        </li>
    </ul>
  </div>

</section>