# Avatar 头像

Paginations Avatar：

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
                <div class="tables-col">avatar</div>
                <div class="tables-col">头像</div>
                <div class="tables-col tables-width-xl">document.querySelector(`[fxtag="avatar"]`)</div>
                <div class="tables-col tables-width-last">object</div>
            </div>
        </div>
    </div>
</div>

Paginations Avatar-data：

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
                <div class="tables-col">avatarUrl</div>
                <div class="tables-col">地址</div>
                <div class="tables-col">-</div>
                <div class="tables-col tables-col-last">地址</div>
            </div>
            <div class="tables-row">
                <div class="tables-col">avatarType</div>
                <div class="tables-col">类型</div>
                <div class="tables-col">
                    avatar-size-(xxxs、xxs、xs、sm、lg、xxxl) <br>
                    border-radius-max
                </div>
                <div class="tables-col tables-col-last">类名</div>
            </div>
        </div>
    </div>
</div>

> avatar组件的结构在fx-pages组件库中，调用方法示例：

```typeScript
import template from 'template';
import { avatar } from 'fx-pages/module/avatar';
// 数据
const data = {
    "avatarUrl": "https://book.funxdata.com/public/img/webmanage/AI.png",
    "avatarType": "avatar-size-xxxs"
}
// 默认类型
template.render(avatar.default,data,"app")

```

### 默认类型（ avatar.default ）

用来代表用户或事物，支持图片、图标或字符展示

<section class='row justify-center pcol-10 prow-20 border-radius-md box-shadow-all mb-16'>
  <div class="col-6 pcol-10">

    <div class="vg-avatar {{avatarType}}" fxtag="avatar"><img src="{{avatarUrl}}" /></div>

  </div>
  
  <div class="col-6 row align-center justify-center pcol-10">
    <div class="vg-avatar {{avatarType}}" fxtag="avatar">
        <img src="https://book.funxdata.com/public/img/webmanage/AI.png" />
    </div>
  </div>

</section>

### 头像大小

当给 vg-avatar 添加 avatar-size-(xxxs、xxs、xs、sm、lg、xxxl) 就能设置头像的大小

<section class='row justify-center pcol-10 prow-20 border-radius-md box-shadow-all mb-16'>
  <div class="col-6 pcol-10">

    <div class="vg-avatar avatar-size-xxxs" fxtag="avatar">
        <img src="{{avatarUrl}}" />
    </div>
    <div class="vg-avatar avatar-size-xxs" fxtag="avatar">
        <img src="{{avatarUrl}}" />
    </div>
    <div class="vg-avatar avatar-size-xs" fxtag="avatar">
        <img src="{{avatarUrl}}" />
    </div>
    <div class="vg-avatar avatar-size-sm" fxtag="avatar">
        <img src="{{avatarUrl}}" />
    </div>
    <div class="vg-avatar">
        <img src="{{avatarUrl}}" />
    </div>
    <div class="vg-avatar avatar-size-lg" fxtag="avatar">
        <img src="{{avatarUrl}}" />
    </div>
    <div class="vg-avatar avatar-size-xxxl" fxtag="avatar">
        <img src="{{avatarUrl}}" />
    </div>

  </div>
  
  <div class="col-6 row align-center justify-center pcol-10">
    <div class="vg-avatar avatar-size-xxxs m-4" fxtag="fxtag">
        <img src="https://book.funxdata.com/public/img/webmanage/AI.png" />
    </div>
    <div class="vg-avatar avatar-size-xxs m-4" fxtag="fxtag">
        <img src="https://book.funxdata.com/public/img/webmanage/AI.png" />
    </div>
    <div class="vg-avatar avatar-size-xs m-4" fxtag="fxtag">
        <img src="https://book.funxdata.com/public/img/webmanage/AI.png" />
    </div>
    <div class="vg-avatar avatar-size-sm m-4" fxtag="fxtag">
        <img src="https://book.funxdata.com/public/img/webmanage/AI.png" />
    </div>
    <div class="vg-avatar m-4" fxtag="fxtag">
        <img src="https://book.funxdata.com/public/img/webmanage/AI.png" />
    </div>
    <div class="vg-avatar avatar-size-lg m-4" fxtag="fxtag">
        <img src="https://book.funxdata.com/public/img/webmanage/AI.png" />
    </div>
    <div class="vg-avatar avatar-size-xxxl m-4" fxtag="fxtag">
        <img src="https://book.funxdata.com/public/img/webmanage/AI.png" />
    </div>
  </div>

</section>


### 头像圆角
 
当需要大圆角是，只需要给 vg-avatar 添加 border-radius-max class类即可实现

<section class='row justify-center pcol-10 prow-20 border-radius-md box-shadow-all mb-16'>
  <div class="col-6 pcol-10">

    <div class="vg-avatar" fxtag="fxtag">
        <img src="{{avatarUrl}}" />
    </div>
    <div class="vg-avatar border-radius-max" fxtag="fxtag">
        <img src="{{avatarUrl}}" />
    </div>

  </div>
  
  <div class="col-6 row align-center justify-center pcol-10">
    <div class="vg-avatar m-4" fxtag="fxtag">
        <img src="https://book.funxdata.com/public/img/webmanage/AI.png" />
    </div>
    <div class="vg-avatar border-radius-max m-4" fxtag="fxtag">
        <img src="https://book.funxdata.com/public/img/webmanage/AI.png" />
    </div>
  </div>

</section>