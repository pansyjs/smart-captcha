---
title: 文档
nav:
  title: 文档
  path: /docs
  order: 10
---

# 文档

## 代码示例

<code src="./demo/demo02.tsx" />

## API

|属性|描述|类型|默认值|
|---|---|----|-----|
|className|节点类名|`string`|-|
|style|节点样式|`CSSProperties`|-|
|elementId|渲染的目标元素ID|`string`|-|
|appkey|应用类型标识|`string`|-|
|scene|使用场景标识|`string`|-|
|width|智能验证组件的宽度|`number`|`300`|
|height|智能验证组件的高度|`number`|`42`|
|onSuccess|验证成功回调|`(data) => void`|-|
|onChange|验证成功/失败回调|`(data) => void`|-|
|onFailed|验证失败回调|`() => void`|-|
