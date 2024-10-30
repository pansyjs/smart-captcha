"use strict";(self.webpackChunk_pansy_smart_captcha=self.webpackChunk_pansy_smart_captcha||[]).push([[904],{8467:function(h,a,e){var r;e.r(a),e.d(a,{demos:function(){return z}});var v=e(90228),t=e.n(v),K=e(87999),c=e.n(K),s=e(75271),T=e(728),M=e(27114),z={"docs-docs-demo-demo01":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,6971))})),asset:{type:"BLOCK",id:"docs-docs-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(88599).Z},"@pansy/smart-captcha":{type:"NPM",value:"3.1.0"},antd:{type:"NPM",value:"5.21.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@pansy/smart-captcha":T,antd:M,react:r||(r=e.t(s,2))},renderOpts:{compile:function(){var x=c()(t()().mark(function g(){var m,C=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(111).then(e.bind(e,51111));case 2:return n.abrupt("return",(m=n.sent).default.apply(m,C));case 3:case"end":return n.stop()}},g)}));function y(){return x.apply(this,arguments)}return y}()}},"docs-docs-demo-demo02":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,84034))})),asset:{type:"BLOCK",id:"docs-docs-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(23213).Z},"@pansy/smart-captcha":{type:"NPM",value:"3.1.0"},antd:{type:"NPM",value:"5.21.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@pansy/smart-captcha":T,antd:M,react:r||(r=e.t(s,2))},renderOpts:{compile:function(){var x=c()(t()().mark(function g(){var m,C=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(111).then(e.bind(e,51111));case 2:return n.abrupt("return",(m=n.sent).default.apply(m,C));case 3:case"end":return n.stop()}},g)}));function y(){return x.apply(this,arguments)}return y}()}},"docs-docs-demo-demo03":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,62446))})),asset:{type:"BLOCK",id:"docs-docs-demo-demo03",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95933).Z},"@pansy/smart-captcha":{type:"NPM",value:"3.1.0"},antd:{type:"NPM",value:"5.21.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@pansy/smart-captcha":T,antd:M,react:r||(r=e.t(s,2))},renderOpts:{compile:function(){var x=c()(t()().mark(function g(){var m,C=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(111).then(e.bind(e,51111));case 2:return n.abrupt("return",(m=n.sent).default.apply(m,C));case 3:case"end":return n.stop()}},g)}));function y(){return x.apply(this,arguments)}return y}()}}}},75153:function(h,a,e){e.r(a),e.d(a,{demos:function(){return v}});var r=e(75271),v={"docs-demo-demo01":{component:r.memo(r.lazy(function(){return e.e(433).then(e.bind(e,6971))})),asset:null,context:void 0,renderOpts:void 0}}},728:function(h,a,e){e.r(a),e.d(a,{SliderCaptcha:function(){return C},SmartCaptcha:function(){return m}});var r=e(26068),v=e.n(r),t=e(75271),K=e(15794),c=e(52676);function s(f){var n=f.children,I=(0,K.C)("//g.alicdn.com/AWSC/AWSC/awsc.js");return(0,c.jsx)(c.Fragment,{children:I==="ready"&&n})}var T=function(n,I){var U=n.className,Z=n.style,D=n.elementId,O=D===void 0?"slider-captcha":D,B=n.appkey,L=n.scene,F=n.foreign,G=n.width,j=n.language,H=n.upLang,N=n.hideErrorCode,V=n.fontSize,R=n.onSuccess,u=n.onChange,E=n.onFailed,$=n.onError,o=(0,t.useRef)();return(0,t.useImperativeHandle)(I,function(){return{reset:function(){var S;o==null||(S=o.current)===null||S===void 0||S.reset()}}}),(0,t.useEffect)(function(){window.AWSC&&!o.current&&window.AWSC.use("nc",function(J,S){o.current=S.init({appkey:B,scene:L,renderTo:"".concat(O),width:G,foreign:F,language:j,upLang:H,fontSize:V,hideErrorCode:N,success:function(d){var l={sig:d.sig,token:d.token,sessionId:d.sessionId,appKey:B,scene:L};u==null||u(l),R==null||R(l)},fail:function(){var d;o==null||(d=o.current)===null||d===void 0||d.reset(),u==null||u(void 0),E==null||E()},error:function(){var d;o==null||(d=o.current)===null||d===void 0||d.reset(),u==null||u(void 0),$==null||$()}})})},[]),(0,c.jsx)("div",{className:U,style:Z,id:O})},M=(0,t.forwardRef)(T),z=function(n,I){var U=n.className,Z=n.style,D=n.elementId,O=D===void 0?"smart-captcha":D,B=n.appkey,L=n.scene,F=n.width,G=F===void 0?300:F,j=n.height,H=j===void 0?42:j,N=n.defaultTxt,V=N===void 0?"\u70B9\u51FB\u6309\u94AE\u5F00\u59CB\u667A\u80FD\u9A8C\u8BC1":N,R=n.successTxt,u=R===void 0?"\u9A8C\u8BC1\u6210\u529F":R,E=n.scaningTxt,$=E===void 0?"\u667A\u80FD\u68C0\u6D4B\u4E2D":E,o=n.failTxt,J=o===void 0?"\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u5728\u6B64\u70B9\u51FB\u6309\u94AE\u5237\u65B0":o,S=n.language,W=n.upLang,d=n.onSuccess,l=n.onChange,P=n.onFailed,i=(0,t.useRef)();return(0,t.useImperativeHandle)(I,function(){return{reset:function(){var A;i==null||(A=i.current)===null||A===void 0||A.reset()}}}),(0,t.useEffect)(function(){window.AWSC&&!i.current&&window.AWSC.use("ic",function(Y,A){i.current=A.init({renderTo:"#".concat(O),width:G,height:H,default_txt:V,success_txt:u,fail_txt:J,scaning_txt:$,appkey:B,scene:L,language:S,upLang:W,success:function(p){var X={sig:p.sig,token:p.token,sessionId:p.sessionId,appKey:B,scene:L};l==null||l(X),d==null||d(X)},fail:function(){var p;i==null||(p=i.current)===null||p===void 0||p.reset(),P==null||P(),l==null||l(void 0)},error:function(){var p;i==null||(p=i.current)===null||p===void 0||p.reset(),P==null||P(),l==null||l(void 0)}})})},[]),(0,c.jsx)("div",{className:U,style:Z,id:O})},x=(0,t.forwardRef)(z),y=function(n,I){return(0,c.jsx)(s,{children:(0,c.jsx)(x,v()(v()({},n),{},{ref:I}))})},g=function(n,I){return(0,c.jsx)(s,{children:(0,c.jsx)(M,v()(v()({},n),{},{ref:I}))})},m=(0,t.forwardRef)(y),C=(0,t.forwardRef)(g)},99328:function(h,a,e){e.r(a),e.d(a,{texts:function(){return r}});const r=[{value:"\u5C5E\u6027",paraId:0,tocIndex:5},{value:"\u63CF\u8FF0",paraId:0,tocIndex:5},{value:"\u7C7B\u578B",paraId:0,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:5},{value:"className",paraId:0,tocIndex:5},{value:"\u8282\u70B9\u7C7B\u540D",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"style",paraId:0,tocIndex:5},{value:"\u8282\u70B9\u6837\u5F0F",paraId:0,tocIndex:5},{value:"CSSProperties",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"elementId",paraId:0,tocIndex:5},{value:"\u6E32\u67D3\u7684\u76EE\u6807\u5143\u7D20ID",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"appkey",paraId:0,tocIndex:5},{value:"\u5E94\u7528\u7C7B\u578B\u6807\u8BC6",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"scene",paraId:0,tocIndex:5},{value:"\u4F7F\u7528\u573A\u666F\u6807\u8BC6",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"width",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u7684\u5BBD\u5EA6",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"300",paraId:0,tocIndex:5},{value:"height",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u7684\u9AD8\u5EA6",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"42",paraId:0,tocIndex:5},{value:"defaultTxt",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u521D\u59CB\u72B6\u6001\u6587\u6848",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"\u70B9\u51FB\u6309\u94AE\u5F00\u59CB\u667A\u80FD\u9A8C\u8BC1",paraId:0,tocIndex:5},{value:"successTxt",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u9A8C\u8BC1\u901A\u8FC7\u72B6\u6001\u6587\u6848",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u6210\u529F",paraId:0,tocIndex:5},{value:"failTxt",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u9A8C\u8BC1\u5931\u8D25\uFF08\u62E6\u622A\uFF09\u72B6\u6001\u6587\u6848",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u5728\u6B64\u70B9\u51FB\u6309\u94AE\u5237\u65B0",paraId:0,tocIndex:5},{value:"scaningTxt",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u9A8C\u8BC1\u4E2D\u72B6\u6001\u6587\u6848",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u68C0\u6D4B\u4E2D",paraId:0,tocIndex:5},{value:"language",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u7EC4\u4EF6\u7684\u8BED\u8A00",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"cn",paraId:0,tocIndex:5},{value:"upLang",paraId:0,tocIndex:5},{value:"\u4E8C\u6B21\u9A8C\u8BC1\u65F6\uFF0C\u7528\u4E8E\u81EA\u5B9A\u4E49\u6587\u6848",paraId:0,tocIndex:5},{value:"object",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"test",paraId:0,tocIndex:5},{value:"\u6D4B\u8BD5\u5B57\u6BB5\uFF0C\u7528\u4E8E\u6D4B\u8BD5\u9A8C\u8BC1\u7801\u7684\u4E0D\u540C\u72B6\u6001",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"onSuccess",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u6210\u529F\u56DE\u8C03",paraId:0,tocIndex:5},{value:"(data) => void",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"onChange",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u6210\u529F/\u5931\u8D25\u56DE\u8C03",paraId:0,tocIndex:5},{value:"(data) => void",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"onFailed",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u5931\u8D25\u56DE\u8C03",paraId:0,tocIndex:5},{value:"() => void",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5}]},29120:function(h,a,e){e.r(a),e.d(a,{texts:function(){return r}});const r=[{value:"\u6587\u6863",paraId:0,tocIndex:0},{value:`# npm install
npm install @pansy/smart-captcha --save

# yarn install
yarn add @pansy/smart-captcha

# pnpm install
pnpm i @pansy/smart-captcha
`,paraId:1,tocIndex:1},{value:`import { SmartCaptcha } from '@pansy/smart-captcha';

export default () => {
  <SmartCaptcha />
}
`,paraId:2,tocIndex:2}]},88599:function(h,a){a.Z=`import { SmartCaptcha, type SmartCaptchaRef } from '@pansy/smart-captcha';
import { Button, Space } from 'antd';
import React, { useRef } from 'react';

function Demo() {
  const ref = useRef<SmartCaptchaRef>();

  const handleRest = () => {
    ref.current?.reset();
  };

  return (
    <Space direction="vertical" size={24}>
      <SmartCaptcha
        ref={ref}
        elementId="smart-captcha-01"
        onSuccess={(data) => {
          // eslint-disable-next-line no-console
          console.log(data);
        }}
      />
      <Button onClick={handleRest}>
        \u91CD\u7F6E
      </Button>
    </Space>
  );
}

export default Demo;
`},23213:function(h,a){a.Z=`import { SmartCaptcha, type SmartCaptchaRef } from '@pansy/smart-captcha';
import { Button, Form, Space } from 'antd';
import React, { useRef } from 'react';

function Demo() {
  const ref = useRef<SmartCaptchaRef>();
  const [form] = Form.useForm();

  const handleReset = () => {
    ref.current?.reset();
  };

  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    console.log(form.getFieldsValue());
  };

  return (
    <Form form={form}>
      <Form.Item name="captcha">
        <SmartCaptcha
          ref={ref}
          elementId="smart-captcha-02"
          onSuccess={(data) => {
            // eslint-disable-next-line no-console
            console.log(data);
          }}
        />
      </Form.Item>

      <Space>
        <Button onClick={handleReset}>
          \u91CD\u7F6E
        </Button>
        <Button onClick={handleSubmit}>
          \u63D0\u4EA4
        </Button>
      </Space>
    </Form>
  );
}

export default Demo;
`},95933:function(h,a){a.Z=`import { SliderCaptcha, type SmartCaptchaRef } from '@pansy/smart-captcha';
import { Button, Space } from 'antd';
import React, { useRef } from 'react';

function Demo() {
  const ref = useRef<SmartCaptchaRef>();

  const handleRest = () => {
    ref.current?.reset();
  };

  return (
    <Space direction="vertical" size={24}>
      <SliderCaptcha
        ref={ref}
        elementId="slider-captcha-01"
        appkey="CF_APP_1"
        scene="register"
        onSuccess={(data) => {
          // eslint-disable-next-line no-console
          console.log(data);
        }}
        style={{
          position: 'relative',
        }}
      />

      <Button onClick={handleRest}>
        \u91CD\u7F6E
      </Button>
    </Space>
  );
}

export default Demo;
`}}]);
