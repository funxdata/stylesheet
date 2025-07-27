# Message 信息提示

Paginations Message：

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
                <div class="tables-col">message</div>
                <div class="tables-col">信息提示</div>
                <div class="tables-col tables-width-xl">document.querySelector(`[fxtag="message"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
        </div>
    </div>
</div>

> Message组件的结构在fx-pages组件库中，调用方法示例：

```typeScript
import template from 'template';
import { message } from 'fx-pages/module/message';
// 默认类型
const oPopout = document.querySelector("#popout") as HTMLElement;
template.nodeRender(message.default, {}, oPopout)

```

### 默认类型（ message.default ）

表示两种相互对立的状态间的切换。

<section class='row justify-center pcol-10 prow-20 border-radius-md box-shadow-all mb-16'>
  <div class="col-6 pcol-10">

    <div class="vg-message" fxtag="message"></div>

  </div>
  
  <div class="col-6 row align-center pcol-10">
    <div class="vg-message" fxtag="message" style="position:absolute;top:50%;transform:translateY(-50%)">12 unread messages. Tap to see.</div>
  </div>

</section>