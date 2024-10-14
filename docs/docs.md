---
title: 文档
nav:
  title: 文档
  path: /docs
  order: 10
---

# 文档

## 代码示例

### 基本示例

<code src="./demo/demo01.tsx"></code>

### 表单示例

<code src="./demo/demo02.tsx"></code>

### 滑动组件

<code src="./demo/demo03.tsx"></code>

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
|defaultTxt|智能验证组件初始状态文案|`string`|`点击按钮开始智能验证`|
|successTxt|智能验证组件验证通过状态文案|`string`|`验证成功`|
|failTxt|智能验证组件验证失败（拦截）状态文案|`string`|`验证失败，请在此点击按钮刷新`|
|scaningTxt|智能验证组件验证中状态文案|`string`|`智能检测中`|
|language|验证组件的语言|`string`|`cn`|
|upLang|二次验证时，用于自定义文案|`object`|-|
|test|测试字段，用于测试验证码的不同状态|`string`|-|
|onSuccess|验证成功回调|`(data) => void`|-|
|onChange|验证成功/失败回调|`(data) => void`|-|
|onFailed|验证失败回调|`() => void`|-|
