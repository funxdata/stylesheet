# Paginations 分页器

Paginations Paginations：

<div class="vg-tables tables-wrap tables-aoto-scroller rowcolumn mb-16">
    <div class="vg-tables-header bg-gray-200 border-radius-xl">
        <div class="tables-col">「fxtag」属性名</div>
        <div class="tables-col">说明</div>
        <div class="tables-col tables-width-xl">调用方法</div>
        <div class="tables-col tables-col-last">类型</div>
    </div>
    <div class="vg-tables-body">
        <div class="tables-body-scroller">
            <div class="tables-row">
                <div class="tables-col">paginations</div>
                <div class="tables-col">分页器</div>
                <div class="tables-col tables-width-xl">document.querySelector(`[fxtag="paginations"]`)</div>
                <div class="tables-col tables-col-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">paginationsTotal</div>
                <div class="tables-col">总计（有多少个/条）</div>
                <div class="tables-col tables-width-xl">Element.querySelector(`[fxtag="paginationsTotal"]`)</div>
                <div class="tables-col tables-col-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">paginationsBeforebtn</div>
                <div class="tables-col">向前按钮</div>
                <div class="tables-col tables-width-xl">Element.querySelector(`[fxtag="paginationsFrontbtn"]`)</div>
                <div class="tables-col tables-col-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">paginationsInput</div>
                <div class="tables-col">页码输入框</div>
                <div class="tables-col tables-width-xl">Element.querySelector(`[fxtag="paginationsInput"]`)</div>
                <div class="tables-col tables-col-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">paginationsAfterbtn</div>
                <div class="tables-col">向后按钮</div>
                <div class="tables-col tables-width-xl">Element.querySelector(`[fxtag="paginationsBehindbtn"]`)</div>
                <div class="tables-col tables-col-last">object</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">paginationsAmount</div>
                <div class="tables-col">总页数（有多少页）</div>
                <div class="tables-col tables-width-xl">Element.querySelector(`[fxtag="paginationsAmount"]`)</div>
                <div class="tables-col tables-col-last">object</div>
            </div>
        </div>
    </div>
</div>
 

> Paginations组件的结构在fx-pages组件库中，调用方法如下：

```typeScript
import { paginations } from 'fx-pages/module/paginations';
// 默认类型
template.render(paginations.default,data,"app")

```


### 一、默认类型（ paginations.default ）

左边为 paginations 代码结构，右边显示 paginations 渲染效果。

<section class='row justify-center pcol-10 prow-20 border-radius-md box-shadow-all mb-16'>
  <div class="col-6 pcol-10">

    <div class="vg-paginations" fxtag="paginations">
        <p class="number">共<span class="m-2" fxtag="paginationsTotal"></span>个</p>
        <div class="vg-paginations-pages pcol-8">
            <button class="vg-paginations-btn" fxtag="paginationsBeforebtn"><i class="vg-icon ic-left"></i></button>
            <input type="number" fxtag="paginationsInput">
            <button class="vg-paginations-btn" fxtag="paginationsAfterbtn"><i class="vg-icon ic-right"></i></button>
        </div>
        <p class="number">合计<span class="m-2" fxtag="paginationsAmount"></span>页</p>
    </div>

  </div>
  
  <div class="col-6 row flex-wrap content-center align-center pcol-10">
    <div class="vg-paginations" fxtag="paginations">
        <p class="number">共<span class="m-2" fxtag="paginationsTotal">2</span>个</p>
        <div class="vg-paginations-pages pcol-8">
            <button class="vg-paginations-btn" fxtag="paginationsBeforebtn"><i class="vg-icon ic-left"></i></button>
            <input type="number" fxtag="paginationsInput" value="1">
            <button class="vg-paginations-btn" fxtag="paginationsAfterbtn"><i class="vg-icon ic-right"></i></button>
        </div>
        <p class="number">合计<span class="m-2" fxtag="paginationsAmount">1</span>页</p>
    </div>
  </div>

</section>