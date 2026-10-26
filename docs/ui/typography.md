# 排版

字号以 CSS 变量定义在 `stylesheet/styles/light/fonts.css`，标题与正文使用统一比例。

## 字号 token

| 变量 | 值 | 用途 |
| --- | --- | --- |
| `--font-size-base` | `1rem` | 正文 |
| `--font-size-lg` | `1.125rem` | 大正文、小标题 |
| `--font-size-xl` | `1.25rem` | h5 |
| `--font-size-2xl` | `1.5rem` | h4 |
| `--font-size-3xl` | `1.875rem` | h3 |
| `--font-size-4xl` | `2.25rem` | h2 |
| `--font-size-5xl` | `3rem` | h1 |
| `--font-size-6xl` | `3.75rem` | 展示型标题 |

## 标题

```html
<h1>页面主标题</h1>
<h2>区块标题</h2>
<h3>卡片标题</h3>
<h4>小标题</h4>
<h5>辅助标题</h5>
<h6>最小标题</h6>
```

h1–h6 已绑定对应字号；业务侧也可以用 `tpl-page-title` 等结构类控制页面标题。

## 正文与辅助文字

```html
<p class="font-size-14 color-gray-900">正文</p>
<p class="font-size-12 color-gray-500">辅助说明</p>
<p class="span mt-4 font-size-12 color-gray-500">时间、来源</p>
```

| 类 | 说明 |
| --- | --- |
| `font-size-12` / `14` / `16` | 常用字号，来自 vango 原子类 |
| `line-height-lg` | 宽松行高，适合说明文字 |
| `text-overflow` | 单行省略 |
| `word-break-all` | 长单词/URL 换行 |
| `white-space-nowrap` | 不换行 |

## 自定义字号

```css
.caption {
  font-size: var(--font-size-xs, 0.75rem);
  color: var(--neutral);
  line-height: 1.6;
}
```

新增字号时优先补 token，不要在多处写 `font-size: 13px`。

## 行高与阅读宽度

- 正文行高建议 `1.5`–`1.7`。
- 长文本容器限制最大宽度（template 使用 `--tpl-content-width`，设置页 48rem）。
- 标题与正文之间用间距而不是空段落分隔。

## 注意

- 不使用小于 `12px` 的正文字号。
- 中英文混排时保持同一行高，避免基线跳动。
- 字号 token 与 Tailwind 的 `text-*` 并存时，以 token 为准，避免两套比例冲突。
