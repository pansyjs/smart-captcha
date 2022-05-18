<h1 align="center">
  @pansy/smart-captcha
</h1>

<div align="center">
阿里巴巴集团提供的一种智能验证码解决方案。
</div>

## 🏗 安装

```bash
# npm install
npm install @pansy/smart-captcha --save

# yarn install
yarn add @pansy/smart-captcha

# pnpm install
pnpm i @pansy/smart-captcha
```

## 🔨 使用

```tsx
import { SmartCaptcha } from '@pansy/smart-captcha';

export default () => {
  <SmartCaptcha />
}
```

## 注意：

在 [qiankun](https://qiankun.umijs.org/) 项目中 使用时由于沙盒的原因导致组件加载不出来，可通过 `excludeAssetFilter` 配置排除 `//g.alicdn.com/AWSC/AWSC/awsc.js`;

如果使用 [umi](https://umijs.org/zh-CN/plugins/plugin-qiankun) 只需要在基座项目里中的 `src/app.ts` 文件里添加如下代码即可

```ts
const cdnUrls =  [
  '//g.alicdn.com/AWSC/AWSC/awsc.js',
];

function isQuankuExclude(value: string) {
  let result = false;

  for (let i = 0; i < cdnUrls.length; i++) {
    if (value.includes(cdnUrls[i])) {
      result = true;
      break;
    }
  }

  return result;
}

export const qiankun = Promise.resolve().then(() => ({
  excludeAssetFilter: (assetUrl: string) => {
    return isQuankuExclude(assetUrl);
  }
}));
```
