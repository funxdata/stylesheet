export const container = `
    <div class="containers row" id="container"></div>
`

export const aside =`
<aside class="vg-asides-doc overflow-y">
    <ul class="vg-menus-doc mb-12">
        <li class="vg-menus-doc-li">
            <a href="/ui/intro">
            <span class="icons mr-8">
                <i class="vg-icon ic-receipt"></i>
            </span>
            <p class="text">简介</p>
            </a>
        </li>
        <li class="vg-menus-doc-li">
            <a href="/ui/use">
                <span class="icons mr-8">
                    <i class="vg-icon ic-project"></i>
                </span>
                <p class="text">使用</p>
            </a>
        </li>
        <li class="vg-menus-doc-li">
            <a href="/ui/layout">
            <span class="icons mr-8">
                <i class="vg-icon ic-hand"></i>
            </span>
            <p class="text">布局 &amp; 排版</p>
            </a>
        </li>
    </ul>
    <div class="menu-components-container">
        <p class="title font-size-14 color-gray-500 prow-6 pl-8 pr-16 mt-12">Form</p>
        <ul class="vg-menus-doc">
            <li class="vg-menus-doc-li">
                <a href="/ui/switch">
                    <p class="text">Switch 开关</p>
                </a>
            </li>
        </ul>
        <p class="title font-size-14 color-gray-500 prow-6 pl-8 pr-16 mt-12">Data</p>
        <ul class="vg-menus-doc">
            <li class="vg-menus-doc-li" data-url="../md/asideDoc">
                <a href="/ui/asidedoc">
                    <p class="text">AsideDoc 侧边栏</p>
                </a>
            </li>
            <li class="vg-menus-doc-li" data-url="../md/asideManage">
              <a href="/ui/aside">
                <p class="text">AsideManage 侧边栏</p>
              </a>
            </li>
            <li class="vg-menus-doc-li">
               <a href="/ui/avatar">
                <p class="text">Avatar 头像</p>
               </a>
            </li>
            <li class="vg-menus-doc-li" data-url="../md/headerDoc">
                <a href="/ui/headerDoc">
                    <p class="text">HeaderDoc 页头</p>
                </a>
            </li>
            <li class="vg-menus-doc-li" data-url="../md/paginations">
                <a href="/ui/headerDoc">
                    <p class="text">Paginations 分页器</p>
                </a>
            </li>
        </ul>
        <p class="title font-size-14 color-gray-500 prow-6 pl-8 pr-16 mt-12">Frame</p>
        <ul class="vg-menus-doc">
            <li class="vg-menus-doc-li" data-url="../md/doc">
                <a href="/ui/headerDoc">
                    <p class="text">Doc 文档框架</p>
                </a>
            </li>
        </ul>
        <p class="title font-size-14 color-gray-500 prow-6 pl-8 pr-16 mt-12">Feedback</p>
        <ul class="vg-menus-doc">
            <li class="vg-menus-doc-li {{select}}" data-url="../md/message">
                <a href="/ui/headerDoc">
                    <p class="text">Message 消息提示</p>
                </a>
            </li>
        </ul>
        <p class="title font-size-14 color-gray-500 prow-6 pl-8 pr-16 mt-12">Nav</p>
        <ul class="vg-menus-doc">
            <li class="vg-menus-doc-li" data-url="../md/breadcrumbs">
                <a href="/ui/headerDoc">
                    <p class="text">Breadcrumbs 面包屑导航</p>
                </a>
            </li>
            <li class="vg-menus-doc-li" data-url="../md/tabs">
                <a href="/ui/headerDoc">
                    <p class="text">Tabs 选项卡</p>
                </a>
            </li>
        </ul>
    </div>
</aside>
`