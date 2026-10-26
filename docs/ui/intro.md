# Piksel UI 介绍

Piksel UI 是 funxdata 的前端设计语言与组件样式集合，面向中后台、设计工具和聊天类产品。
它由三层组成：

| 层 | 位置 | 作用 |
| --- | --- | --- |
| 设计 token | `stylesheet/styles/light/color.css`、`fonts.css` | 颜色、字号等基础变量 |
| 组件样式 | `css-manage<version>.css`（来自 `history_ui/vango-ui`） | `vg-*`、`btn-*`、`vg-icon` 等控件 |
| 页面结构 | `stylesheet/template/styles/template.css` | `tpl-*` 页面骨架，与 `@funxdata/template` 配套 |

## 设计原则

- **结构、样式、业务分离**：页面结构在 template，视觉在 styles，业务项目只关心数据和事件。
- **token 优先**：颜色与字号通过 CSS 变量引用，不在业务代码里写死色值。
- **静态优先**：布局不引入动画；动效由业务按需添加。
- **渐进使用**：可以只用 token，也可以叠加 `vg-*` 控件和 `tpl-*` 页面骨架。

## 浏览器支持

使用现代 CSS（`color-mix()`、`aspect-ratio`、`clamp()`、`:focus-within`），
建议 Chrome / Edge 100+、Safari 15.4+。

## 相关入口

- 主题与组件文档：[`use.md`](./use.md)
- 颜色：[`color.md`](./color.md)
- 按钮：[`buttons.md`](./buttons.md)
- 排版：[`typography.md`](./typography.md)
