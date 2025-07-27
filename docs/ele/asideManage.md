# AsideManage 菜单（manage）

Paginations AsideManage：

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
                <div class="tables-col">菜单（manage）</div>
                <div class="tables-col tables-width-xl">document.querySelector(`[fxtag="aside"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">logo</div>
                <div class="tables-col">品牌LOGO</div>
                <div class="tables-col tables-width-xl">Element.querySelector(`[fxtag="logo"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">aside_tab</div>
                <div class="tables-col">侧边栏导航容器</div>
                <div class="tables-col tables-width-xl">Element.querySelector(`[fxtag="aside_tab"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">aside_tab_project</div>
                <div class="tables-col">导航项</div>
                <div class="tables-col tables-width-xl">Element.querySelector(`[fxtag="aside_tab_project"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">asideAvatar</div>
                <div class="tables-col">侧边栏头像</div>
                <div class="tables-col tables-width-xl">Element.querySelector(`[fxtag="avatar"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">avatarContent</div>
                <div class="tables-col">侧边栏头像下拉容器</div>
                <div class="tables-col tables-width-xl">Element.querySelector(`[fxtag="avatarContent"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
        </div>
    </div>
</div>

Paginations AsideManage-data：

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
                <div class="tables-col">LOGO地址</div>
                <div class="tables-col">-</div>
                <div class="tables-col tables-col-last">string</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">select</div>
                <div class="tables-col">导航项是否选中</div>
                <div class="tables-col">select：选中</div>
                <div class="tables-col tables-col-last">类名</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">iconName</div>
                <div class="tables-col">导航项图标</div>
                <div class="tables-col">home、project、art、task...</div>
                <div class="tables-col tables-col-last">string</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">text</div>
                <div class="tables-col">导航项名称</div>
                <div class="tables-col">-</div>
                <div class="tables-col tables-col-last">string</div>
            </div>
        </div>
    </div>
</div>

> AsideManage组件的结构在fx-pages组件库中，调用方法示例：

```typeScript
import template from 'template';
import { asideManage } from 'fx-pages/module/asideManage';
const data = {
    logoUrl: 'https://book.funxdata.com/public/img/webmanage/logo-sm.png',
    menuItems: [
        { iconName: "home", text: "首页" },
        { iconName: "project", text: "项目" },
        { iconName: "art", text: "展品" },
        { iconName: "task", text: "任务" },
    ]
}  
// 渲染aside容器
template.render(asideManage.default, data, "app");

let oAsideContainer = document.querySelector("[fxtag='aside']") as HTMLElement;
let oAsideMenus = oAsideContainer.querySelector("[fxtag='aside_tab']") as HTMLElement;
let oAsideAvatar = oAsideContainer.querySelector("[fxtag='asideAvatar']") as HTMLElement;

// 渲染aside一级列表
oAsideAvatar.style.backgroundImage = "url('https://book.funxdata.com/public/img/webmanage/AI.png')"
template.nodeRenderFor(asideManage.child, data.menuItems, oAsideMenus);
```

### 默认类型（ asideDoc.default ）

表示两种相互对立的状态间的切换。

<section class='row justify-center pcol-10 prow-20 border-radius-md box-shadow-all mb-16'>
  <div class="col-6 pcol-10">

    <aside class="vg-asides rowcolumn" fxtag="aside">
        <div class="vg-asides-logo cursor-pointer" fxtag="logo">
            <img src="{{logoUrl}}" alt="piksel"/>
        </div>
        <div class="vg-menus flex1" fxtag="aside_tab">
            <li class="vg-menus-li {{select}}" fxtag="aside_tab_project">
                <div class="menus-bars">
                    <button><i class="vg-icon ic-{{iconName}}"></i></button>
                    <p class="font-size-11 color-gray-500 align-center">{{text}}</p>
                </div>
            </li>
        </div>
        <div class="vg-dropdowns row justify-center mrow-24">
            <div class="vg-avatar-bg avatar-size-lg border-radius-max cursor-pointer vg-dropdowns-title" fxtag="asideAvatar"></div>
            <div class="content" fxtag="avatarContent"></div>
        </div>
    </aside>
    
  </div>
  
  <div class="col-6 row align-center pcol-10">
    <aside class="vg-asides rowcolumn" fxtag="aside" style="height:100%">
        <a class="vg-asides-logo cursor-pointer" fxtag="logo">
            <img src="https://book.funxdata.com/public/img/webmanage/logo-sm.png">
        </a>
        <ul class="vg-menus flex1" fxtag="aside_tab">
            <li class="vg-menus-li select" fxtag="aside_tab_project">
                <div class="menus-bars">
                    <button><i class="vg-icon ic-folder-off"></i></button>
                    <p class="font-size-11 color-gray-500 align-center">项目</p>
                </div>
            </li>
            <li class="vg-menus-li" fxtag="aside_tab_project">
                <div class="menus-bars">
                    <button><i class="vg-icon ic-art"></i></button>
                    <p class="font-size-11 color-gray-500 align-center">展品</p>
                </div>
            </li>
        </ul>
        <div class="vg-dropdowns row justify-center mb-24">
            <div style="background-image:url('https://book.funxdata.com/public/img/webmanage/AI.png')" class="vg-avatar-bg avatar-size-lg border-radius-max cursor-pointer vg-dropdowns-title" fxtag="asideAvatar"></div>
            <div class="vg-dropdowns-content" fxtag="avatarMenu"></div>
        </div>
    </aside>
  </div>

</section>