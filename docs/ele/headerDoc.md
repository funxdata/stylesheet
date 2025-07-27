# HeaderDoc 页头（doc）

Paginations HeaderDoc：

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
                <div class="tables-col">header</div>
                <div class="tables-col">页头（doc）</div>
                <div class="tables-col tables-width-xl">document.querySelector(`[fxtag="header"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">logo</div>
                <div class="tables-col">LOGO</div>
                <div class="tables-col tables-width-xl">Element.querySelector(`[fxtag="logo"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">logoNav</div>
                <div class="tables-col">header的导航容器</div>
                <div class="tables-col tables-width-xl">Element.querySelector(`[fxtag="logoNav"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">switch</div>
                <div class="tables-col">开关</div>
                <div class="tables-col tables-width-xl">Element.querySelector(`[fxtag="switch"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">navItem</div>
                <div class="tables-col">导航项</div>
                <div class="tables-col tables-width-xl">Element.querySelectorAll(`[fxtag="navItem"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
        </div>
    </div>
</div>

Paginations HeaderDoc-data：

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
                <div class="tables-col">logoUrl</div>
                <div class="tables-col">logo图片地址</div>
                <div class="tables-col">-</div>
                <div class="tables-col tables-col-last">string</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">logoTile</div>
                <div class="tables-col">logo类型</div>
                <div class="tables-col">-</div>
                <div class="tables-col tables-col-last">string</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">switchType</div>
                <div class="tables-col">开关是否打开</div>
                <div class="tables-col">on：打开</div>
                <div class="tables-col tables-col-last">类名</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">navItemType</div>
                <div class="tables-col">导航项是否选中</div>
                <div class="tables-col">select：选中</div>
                <div class="tables-col tables-col-last">类名</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">title</div>
                <div class="tables-col">导航项名称</div>
                <div class="tables-col">-</div>
                <div class="tables-col tables-col-last">string</div>
            </div>
        </div>
    </div>
</div>

> HeaderDoc组件的结构在fx-pages组件库中，调用方法示例：

```typeScript
import template from 'template';
import theme from "theme";
import { headerDoc } from 'fx-pages/module/headerDoc';

export const pages = (method:string, data:any, node:any) => { 
    // 渲染header容器
    template[method](headerDoc.default, data, node);

    const oHeader = document.querySelector("[fxtag='header']") as HTMLElement;
    const oLogoNav = oHeader.querySelector("[fxtag='logoNav']") as HTMLElement;
    const oSwitch = oHeader.querySelector("[fxtag='switch']") as HTMLElement

    // 渲染headerNav导航项
    template.nodeRenderFor(headerDoc.child, data.dataNav, oLogoNav);
    // 设置切换主题
    theme.color(oSwitch)
}

const data = {
    logoUrl: "https://book.funxdata.com/public/img/webmanage/logo.png",
    logoTile: "GUI",
    dataNav: [
        { title: "UI" },
        { title: "ICONS" },
    ]
}
```

### 默认类型（ headerDoc.default ）

表示两种相互对立的状态间的切换。

<section class='row justify-center pcol-10 prow-20 border-radius-md box-shadow-all mb-16'>
  <div class="col-6 pcol-10">

    <header class="vg-headers-doc row align-center" fxtag="header">
        <div class="containers">
            <div class="row align-center">
                <a class="logo" href="#" fxtag="logo">
                    <img src="{{logoUrl}}" />
                    <p class="name">{{logoTile}}</p>
                </a>
                <div class="flex-auto row align-center justify-end">
                    <div class="nav justify-content-end" fxtag="logoNav">
                        <a class="nav-li {{navItemType}}" href="#" fxtag="navItem">{{title}}</a>
                    </div>
                    <div class="vg-switch ml-16 {{switchType}}" fxtag="switch">
                        <div class="vg-switch-core"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
  </div>
  
  <div class="col-6 row align-center pcol-10">
    <header class="vg-headers-doc row align-center" fxtag="header">
        <div class="containers">
            <div class="row align-center">
                <a class="logo" href="#" fxtag="logo">
                    <img src="https://book.funxdata.com/public/img/webmanage/logo.png" />
                    <p class="name">UED</p>
                </a>
                <div class="flex-auto row align-center justify-end">
                    <div class="nav justify-content-end" fxtag="logoNav">
                        <a class="nav-li" fxtag="navItem">UI</a>
                        <a class="nav-li" fxtag="navItem">ICONS</a>
                    </div>
                    <div class="vg-switch ml-16" fxtag="switch">
                        <div class="vg-switch-core"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  </div>

</section>