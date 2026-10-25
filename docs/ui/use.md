# 安装与使用

## 1. 引入样式与图标

在 `index.html` 中按顺序引入：

```html
<!-- 设计 token + 主题 -->
<link rel="stylesheet" href="https://static.funxdata.com/release/css/css-manage33031.css">
<!-- 字体图标（默认不主动升级） -->
<link rel="stylesheet" href="https://static.funxdata.com/release/font20250304/icons.css">
```

页面结构类 `tpl-*` 位于 `@funxdata/template` 的 `styles/template.css`，
使用 template 时由 `bindTemplateStyles()` 注入，或单独引入打包产物。

## 2. 使用 token

```css
.card {
  color: var(--neutral-dark);
  background: var(--surface);
  border: 1px solid var(--neutral-light);
  border-radius: 0.75rem;
}
```

不要在业务样式里写 `#1D4ED8` 这类色值，改为 `var(--primary)`。

## 3. 使用组件类

```html
<button class="vg-btn btn-type-brand btn-size-md">保存</button>
<span class="vg-icon ic-search"></span>
```

`vg-*` 的完整实现来自 vango-ui 的 less 源码，发布为 `css-manage<version>.css`。

## 4. 使用页面模板

```ts
import { app_tpl } from "@funxdata/template/uitpl";
import { registerTemplates } from "./templates.ts";
import { bindTemplateStyles } from "@funxdata/template/uistyles";

bindTemplateStyles();
registerTemplates(tpl);

const html = await tpl.renderStringAsync(app_tpl, {
  aside: { logo, home: "#material", items: navItems },
  page: "material_tpl",
  pageData: { title: "素材管理", items: [] },
});
```

页面模板的字段见 `stylesheet/template/docs/pages.md`。

## 5. 主题切换

主题通过根节点 class 控制：

```html
<body class="light">…</body>
<!-- 或 -->
<body class="dark">…</body>
```

`light` / `dark` 目前共用同一组变量名，切换时只覆盖变量值。

## 6. 开发方式

- `stylesheet` 仓库：`deno task view` 启动文档站
- `stylesheet/template`：`deno task view` 预览页面模板
- 业务项目：`deno task view`，默认 `8864` 端口

外部 CDN 版本统一记录在 `todo/external-assets.md`。
