# 布局和排版

通过基础的 12 分栏，迅速简便地创建布局。

>Flex 布局，支持纵向布局（纵向时，"row" 改为 "row column" ）
>
>请注意父容器避免使用 inline 相关样式，会导致组件宽度不能撑满。

### 默认布局

使用列创建基础网格布局。

通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。
<section class='p-20 text-center border-radius-md box-shadow-all'>
    <div class="row mb-10">
        <div class="col-12 bg-gray-400">col-12</div>
    </div>
    <div class="row mb-10">
        <div class="col-6 bg-gray-200">col-6</div>
        <div class="col-6 bg-gray-400">col-6</div>
    </div>
    <div class="row mb-10">
        <div class="col-4 bg-gray-200">col-4</div>
        <div class="col-4 bg-gray-400">col-4</div>
        <div class="col-4 bg-gray-200">col-4</div>
    </div>
    <div class="row mb-10">
        <div class="col-3 bg-gray-200">col-3</div>
        <div class="col-3 bg-gray-400">col-3</div>
        <div class="col-3 bg-gray-200">col-3</div>
        <div class="col-3 bg-gray-400">col-3</div>
    </div>
    <div class="row">
        <div class="col-2 bg-gray-200">col-2</div>
        <div class="col-2 bg-gray-400">col-2</div>
        <div class="col-2 bg-gray-200">col-2</div>
        <div class="col-2 bg-gray-400">col-2</div>
        <div class="col-2 bg-gray-200">col-2</div>
        <div class="col-2 bg-gray-400">col-2</div>
    </div>
</section>

### 分栏间隔

支持列间距。

行提供 pcol-10 属性来指定列之间的间距，其默认值为0。

<section class='prow-20 pcol-10 text-center border-radius-md box-shadow-all'>
    <div class="row">
        <div class="col-3 pcol-10 ">
            <div class="bg-gray-400">col-3</div>
        </div>
        <div class="col-3 pcol-10 ">
            <div class="bg-gray-400">col-3</div>
        </div>
        <div class="col-3 pcol-10 ">
            <div class="bg-gray-400">col-3</div>
        </div>
        <div class="col-3 pcol-10 ">
            <div class="bg-gray-400">col-3</div>
        </div>
    </div>
</section>

### 混合布局

通过基础的 1/12 分栏任意扩展组合形成较为复杂的混合布局。

<section class='prow-20 pcol-10 text-center border-radius-md box-shadow-all'>
    <div class="row mb-10">
        <div class="col-8 pcol-10 ">
            <div class="bg-gray-400">col-8</div>
        </div>
        <div class="col-4 pcol-10 ">
            <div class="bg-gray-400">col-4</div>
        </div>
    </div>
    <div class="row mb-10">
        <div class="col-4 pcol-10 ">
            <div class="bg-gray-400">col-4</div>
        </div>
        <div class="col-4 pcol-10 ">
            <div class="bg-gray-400">col-4</div>
        </div>
        <div class="col-2 pcol-10 ">
            <div class="bg-gray-400">col-2</div>
        </div>
        <div class="col-2 pcol-10 ">
            <div class="bg-gray-400">col-2</div>
        </div>
    </div>
    <div class="row">
        <div class="col-2 pcol-10 ">
            <div class="bg-gray-400">col-2</div>
        </div>
        <div class="col-8 pcol-10 ">
            <div class="bg-gray-400">col-8</div>
        </div>
        <div class="col-2 pcol-10 ">
            <div class="bg-gray-400">col-2</div>
        </div>
    </div>
</section>

### 列偏移

您可以指定列偏移量。

通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。

<section class='prow-20 pcol-10 text-center border-radius-md box-shadow-all'>
    <div class="row mb-10">
        <div class="col-3 pcol-10 ">
            <div class="bg-gray-400">col-3</div>
        </div>
        <div class="col-3 pcol-10 col-offset-3">
            <div class="bg-gray-400">col-3</div>
        </div>
    </div>
    <div class="row mb-10">
        <div class="col-3 pcol-10 col-offset-3">
            <div class="bg-gray-400">col-3</div>
        </div>
        <div class="col-3 pcol-10 col-offset-3">
            <div class="bg-gray-400">col-3</div>
        </div>
    </div>
    <div class="row">
        <div class="col-6 pcol-10 col-offset-3">
            <div class="bg-gray-400">col-6</div>
        </div>
    </div>
</section>

### 对齐方式

默认使用 flex 布局来对分栏进行灵活的对齐。

您可以通过justify 属性来定义子元素的排版方式，其取值为justify-center、justify-end、justify-space-between、justify-space-around或justify-space-evenly。

<section class='prow-20 pcol-10 text-center border-radius-md box-shadow'>
    <div class="row mb-10">
        <div class="col-3 bg-gray-400">col-4</div>
        <div class="col-3 bg-gray-200">col-4</div>
        <div class="col-3 bg-gray-400">col-4</div>
    </div>
    <div class="row justify-center mb-10">
        <div class="col-3 bg-gray-400">col-4</div>
        <div class="col-3 bg-gray-200">col-4</div>
        <div class="col-3 bg-gray-400">col-4</div>
    </div>
    <div class="row justify-end mb-10">
        <div class="col-3 bg-gray-400">col-4</div>
        <div class="col-3 bg-gray-200">col-4</div>
        <div class="col-3 bg-gray-400">col-4</div>
    </div>
    <div class="row justify-space-between mb-10">
        <div class="col-3 bg-gray-400">col-4</div>
        <div class="col-3 bg-gray-200">col-4</div>
        <div class="col-3 bg-gray-400">col-4</div>
    </div>
    <div class="row justify-space-around mb-10">
        <div class="col-3 bg-gray-400">col-4</div>
        <div class="col-3 bg-gray-200">col-4</div>
        <div class="col-3 bg-gray-400">col-4</div>
    </div>
    <div class="row justify-space-evenly mb-10">
        <div class="col-3 bg-gray-400">col-4</div>
        <div class="col-3 bg-gray-200">col-4</div>
        <div class="col-3 bg-gray-400">col-4</div>
    </div>

</section>

### 自适应

设置flex1 实现容器自适应容器空间

<section class='prow-20 pcol-10 text-center border-radius-md box-shadow-all'>
    <div class="row mb-10">
        <div class="flex1 bg-gray-400">flex1</div>
        <div class="bg-gray-200 pcol-10"> text </div>
    </div>
</section>
