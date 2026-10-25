# 颜色

颜色以 CSS 变量定义在 `stylesheet/styles/light/color.css`，`dark` 只覆盖变量值。

## 基础 token

| 变量 | 默认值 | 用途 |
| --- | --- | --- |
| `--primary` | `#1D4ED8` | 主色、链接、选中态 |
| `--secondary` | `#9333EA` | 次色、强调 |
| `--accent` | `#F59E0B` | 高亮、提示 |
| `--neutral` | `#64748B` | 次要文字、说明 |
| `--neutral-light` | `#D1D5DB` | 边框、分隔线 |
| `--neutral-dark` | `#334155` | 主文字 |
| `--success` | `#10B981` | 成功 |
| `--warning` | `#F59E0B` | 警告 |
| `--error` | `#EF4444` | 错误、危险操作 |
| `--background` | `#F3F4F6` | 页面背景 |
| `--surface` | `#FFFFFF` | 卡片、浮层背景 |

## 使用方式

```css
.tag {
  color: var(--primary);
  background: color-mix(in srgb, var(--primary) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);
}
```

```html
<p class="color-gray-700">辅助文字</p>
```

`color-*` 是 vango 的原子类，适合快速标注；长期维护的组件优先使用 `var(--…)`。

## 主题覆盖

```css
.dark {
  --background: #071510;
  --surface: #0F1413;
  --neutral-dark: #E6EDEA;
  --neutral-light: #334155;
}
```

暗色主题只覆盖变量，不复制整套组件样式。

## 语义色对照

| 语义 | 变量 | 常见控件类 |
| --- | --- | --- |
| 主要 | `--primary` | `btn-type-brand` |
| 成功 | `--success` | `btn-type-success` |
| 警告 | `--warning` | `btn-type-warn` |
| 错误 | `--error` | `btn-type-error` |
| 信息 | `--neutral` | `btn-type-info` |

## 注意

- 不要在新组件里写死十六进制颜色。
- 需要透明度时用 `color-mix()`，避免维护多份 rgba。
- 历史主题目录（`djh/`、`liuwenhao/`、`lizhixian/`）里的 `color.css` 与主线重复，
  新项目直接使用 `light/color.css`。
