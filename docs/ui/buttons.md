# 按钮

按钮基于 `vg-btn`，通过类型、尺寸和图标修饰类组合。

## 基本用法

```html
<button class="vg-btn">默认</button>
<button class="vg-btn btn-type-brand">主要</button>
<button class="vg-btn btn-type-error">危险</button>
<button class="vg-btn btn-size-sm">小号</button>
<button class="vg-btn btn-block">占满一行</button>
```

## 类型

| 类 | 语义 |
| --- | --- |
| `btn-type-brand` | 主要操作 |
| `btn-type-success` | 成功/确认 |
| `btn-type-warn` | 警告 |
| `btn-type-error` | 危险/删除 |
| `btn-type-info` | 次要信息操作 |

## 尺寸

| 类 | 说明 |
| --- | --- |
| `btn-size-sm` | 小号，适合工具条 |
| `btn-size-md` | 默认 |
| `btn-size-xl` | 大号，适合图标按钮 |
| `btn-block` | 宽度占满父容器 |

## 图标按钮

```html
<button class="vg-btn btn-icons btn-size-sm" type="button" title="更多">
  <i class="vg-icon ic-dots"></i>
</button>

<button class="vg-btn btn-type-brand btn-size-md">
  <i class="vg-icon ic-plus"></i>
  <span>新建</span>
</button>
```

图标统一使用 `vg-icon ic-*`，不要混用 SVG 字体与图标字体（除非业务明确需要）。

## 状态

```html
<button class="vg-btn" disabled>禁用</button>
<button class="vg-btn disabled" aria-disabled="true">禁用（链接样式）</button>
```

- 禁用态不要只靠颜色区分，保留 `disabled` 或 `aria-disabled`。
- 按钮内文字与图标间距由 `vg-btn` 的 `gap` 控制，不要手动加 `margin`。

## 与 template 的关系

template 的 `tpl_action` 会自动生成按钮或链接：

```ts
{ key: "create", title: "新建", icon: "ic-plus", variant: "brand", size: "md" }
```

渲染结果就是 `vg-btn btn-type-brand btn-size-md`。业务侧只需要处理 `data-action`。

## 注意

- 主页面最多保留一个主要按钮，避免多个 `btn-type-brand` 竞争。
- 危险操作使用 `btn-type-error`，并在确认对话框中再次说明后果。
- 按钮样式来自 `css-manage<version>.css`，修改需回到 vango-ui 的 less 源码。
