<h1 align="center">
  @pansy/smart-captcha
</h1>

<div align="center">

阿里巴巴集团提供的一种智能验证码解决方案。

![coverage CI][coverage-ci]
![deploy CI][deploy-ci]
[![NPM version][image-1]][npm-url]
[![NPM downloads][image-2]][npm-url]
[![codecov][codecov-1]][codecov-2]
[![license][license-1]][npm-url]
[![issues](https://img.shields.io/github/issues/pansyjs/smart-captcha)](https://github.com/pansyjs/smart-captcha/issues)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/pansyjs/smart-captcha.svg)](http://isitmaintained.com/project/pansyjs/smart-captcha 'Percentage of issues still open')
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/pansyjs/smart-captcha.svg)](http://isitmaintained.com/project/pansyjs/smart-captcha 'Average time to resolve an issue')
[![dumi][dumi]][dumi-url]

</div>

## 📝 阿里文档

[文档](https://help.aliyun.com/document_detail/122733.html)

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

[image-1]: https://img.shields.io/npm/v/@pansy/smart-captcha.svg?style=flat
[image-2]: https://img.shields.io/npm/dw/@pansy/smart-captcha.svg?style=flat
[codecov-1]: https://codecov.io/github/pansyjs/smart-captcha/branch/master/graph/badge.svg?token=EKYDUW28H0
[codecov-2]: https://codecov.io/github/pansyjs/smart-captcha
[license-1]: https://badgen.net/npm/license/@pansy/smart-captcha
[npm-url]: https://www.npmjs.com/package/@pansy/smart-captcha
[issues-1]: https://www.npmjs.com/package/@pansy/smart-captcha

[dumi]: https://img.shields.io/badge/docs%20by-dumi-blue
[dumi-url]: https://d.umijs.org

[coverage-ci]: https://github.com/pansyjs/smart-captcha/workflows/Coverage/badge.svg
[deploy-ci]: https://github.com/pansyjs/smart-captcha/workflows/Deploy/badge.svg
