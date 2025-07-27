# Switch 开关

Paginations Switch：

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
                <div class="tables-col">switch</div>
                <div class="tables-col">开关</div>
                <div class="tables-col tables-width-xl">document.querySelector(`[fxtag="switch"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
        </div>
    </div>
</div>

Paginations Switch-data：

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
                <div class="tables-col">switchType</div>
                <div class="tables-col">开启 / 关闭(default)</div>
                <div class="tables-col">on：开启</div>
                <div class="tables-col tables-col-last">类名</div>
            </div>
        </div>
    </div>
</div>

> Switch组件的结构在fx-pages组件库中，调用方法示例：

```typeScript
import template from 'template';
import { switch } from 'fx-pages/module/switch';
// 数据
const data = {
    "switchType": "on"
}
// 默认类型
template.render(switch.data,"app")

```


### 默认类型（ switch.default ）

表示两种相互对立的状态间的切换。

<section class='row justify-center pcol-10 prow-20 border-radius-md box-shadow-all mb-16'>
  <div class="col-6 pcol-10">

    <div class="vg-switch {{switchType}}" fxtag="switch"><div class="vg-switch-core"></div></div>
    <div class="vg-switch on" fxtag="switch"><div class="vg-switch-core"></div></div>

  </div>
  
  <div class="col-6 row align-center pcol-10">
    <div class="vg-switch {{switchType}} mr-10" fxtag="switch"><div class="vg-switch-core"></div></div>
    <div class="vg-switch on" fxtag="switch"><div class="vg-switch-core"></div></div>
  </div>

</section>
