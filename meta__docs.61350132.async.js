"use strict";(self.webpackChunk_pansy_smart_captcha=self.webpackChunk_pansy_smart_captcha||[]).push([[904],{94683:function(h,e,a){var r;a.r(e),a.d(e,{demos:function(){return z}});var v=a(90228),t=a.n(v),K=a(87999),c=a.n(K),s=a(75271),T=a(27114),M=a(48228),z={"docs-docs-demo-demo01":{component:s.memo(s.lazy(function(){return a.e(433).then(a.bind(a,46271))})),asset:{type:"BLOCK",id:"docs-docs-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:a(36992).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.6"},"@pansy/smart-captcha":{type:"NPM",value:"3.1.0"}},entry:"index.tsx"},context:{react:r||(r=a.t(s,2)),antd:T,"@pansy/smart-captcha":M},renderOpts:{compile:function(){var x=c()(t()().mark(function g(){var m,C=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.e(196).then(a.bind(a,96196));case 2:return n.abrupt("return",(m=n.sent).default.apply(m,C));case 3:case"end":return n.stop()}},g)}));function y(){return x.apply(this,arguments)}return y}()}},"docs-docs-demo-demo02":{component:s.memo(s.lazy(function(){return a.e(433).then(a.bind(a,11847))})),asset:{type:"BLOCK",id:"docs-docs-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:a(66938).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.6"},"@pansy/smart-captcha":{type:"NPM",value:"3.1.0"}},entry:"index.tsx"},context:{react:r||(r=a.t(s,2)),antd:T,"@pansy/smart-captcha":M},renderOpts:{compile:function(){var x=c()(t()().mark(function g(){var m,C=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.e(196).then(a.bind(a,96196));case 2:return n.abrupt("return",(m=n.sent).default.apply(m,C));case 3:case"end":return n.stop()}},g)}));function y(){return x.apply(this,arguments)}return y}()}},"docs-docs-demo-demo03":{component:s.memo(s.lazy(function(){return a.e(433).then(a.bind(a,9320))})),asset:{type:"BLOCK",id:"docs-docs-demo-demo03",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:a(54521).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.6"},"@pansy/smart-captcha":{type:"NPM",value:"3.1.0"}},entry:"index.tsx"},context:{react:r||(r=a.t(s,2)),antd:T,"@pansy/smart-captcha":M},renderOpts:{compile:function(){var x=c()(t()().mark(function g(){var m,C=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.e(196).then(a.bind(a,96196));case 2:return n.abrupt("return",(m=n.sent).default.apply(m,C));case 3:case"end":return n.stop()}},g)}));function y(){return x.apply(this,arguments)}return y}()}}}},4462:function(h,e,a){a.r(e),a.d(e,{demos:function(){return v}});var r=a(75271),v={"docs-demo-demo01":{component:r.memo(r.lazy(function(){return a.e(433).then(a.bind(a,46271))})),asset:null,context:void 0,renderOpts:void 0}}},48228:function(h,e,a){a.r(e),a.d(e,{SliderCaptcha:function(){return C},SmartCaptcha:function(){return m}});var r=a(26068),v=a.n(r),t=a(75271),K=a(15794),c=a(52676);function s(f){var n=f.children,I=(0,K.C)("//g.alicdn.com/AWSC/AWSC/awsc.js");return(0,c.jsx)(c.Fragment,{children:I==="ready"&&n})}var T=function(n,I){var U=n.className,Z=n.style,O=n.elementId,B=O===void 0?"slider-captcha":O,L=n.appkey,$=n.scene,F=n.foreign,G=n.width,j=n.language,H=n.upLang,N=n.hideErrorCode,V=n.fontSize,R=n.onSuccess,u=n.onChange,E=n.onFailed,A=n.onError,o=(0,t.useRef)();return(0,t.useImperativeHandle)(I,function(){return{reset:function(){var S;o==null||(S=o.current)===null||S===void 0||S.reset()}}}),(0,t.useEffect)(function(){window.AWSC&&!o.current&&window.AWSC.use("nc",function(J,S){o.current=S.init({appkey:L,scene:$,renderTo:"".concat(B),width:G,foreign:F,language:j,upLang:H,fontSize:V,hideErrorCode:N,success:function(d){var l={sig:d.sig,token:d.token,sessionId:d.sessionId,appKey:L,scene:$};u==null||u(l),R==null||R(l)},fail:function(){var d;o==null||(d=o.current)===null||d===void 0||d.reset(),u==null||u(void 0),E==null||E()},error:function(){var d;o==null||(d=o.current)===null||d===void 0||d.reset(),u==null||u(void 0),A==null||A()}})})},[]),(0,c.jsx)("div",{className:U,style:Z,id:B})},M=(0,t.forwardRef)(T),z=function(n,I){var U=n.className,Z=n.style,O=n.elementId,B=O===void 0?"smart-captcha":O,L=n.appkey,$=n.scene,F=n.width,G=F===void 0?300:F,j=n.height,H=j===void 0?42:j,N=n.defaultTxt,V=N===void 0?"\u70B9\u51FB\u6309\u94AE\u5F00\u59CB\u667A\u80FD\u9A8C\u8BC1":N,R=n.successTxt,u=R===void 0?"\u9A8C\u8BC1\u6210\u529F":R,E=n.scaningTxt,A=E===void 0?"\u667A\u80FD\u68C0\u6D4B\u4E2D":E,o=n.failTxt,J=o===void 0?"\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u5728\u6B64\u70B9\u51FB\u6309\u94AE\u5237\u65B0":o,S=n.language,W=n.upLang,d=n.onSuccess,l=n.onChange,P=n.onFailed,p=(0,t.useRef)();return(0,t.useImperativeHandle)(I,function(){return{reset:function(){var D;p==null||(D=p.current)===null||D===void 0||D.reset()}}}),(0,t.useEffect)(function(){window.AWSC&&!p.current&&window.AWSC.use("ic",function(Y,D){p.current=D.init({renderTo:"#".concat(B),width:G,height:H,default_txt:V,success_txt:u,fail_txt:J,scaning_txt:A,appkey:L,scene:$,language:S,upLang:W,success:function(i){var X={sig:i.sig,token:i.token,sessionId:i.sessionId,appKey:L,scene:$};l==null||l(X),d==null||d(X)},fail:function(){var i;p==null||(i=p.current)===null||i===void 0||i.reset(),P==null||P(),l==null||l(void 0)},error:function(){var i;p==null||(i=p.current)===null||i===void 0||i.reset(),P==null||P(),l==null||l(void 0)}})})},[]),(0,c.jsx)("div",{className:U,style:Z,id:B})},x=(0,t.forwardRef)(z),y=function(n,I){return(0,c.jsx)(s,{children:(0,c.jsx)(x,v()(v()({},n),{},{ref:I}))})},g=function(n,I){return(0,c.jsx)(s,{children:(0,c.jsx)(M,v()(v()({},n),{},{ref:I}))})},m=(0,t.forwardRef)(y),C=(0,t.forwardRef)(g)},43087:function(h,e,a){a.r(e),a.d(e,{texts:function(){return r}});const r=[{value:"\u5C5E\u6027",paraId:0,tocIndex:5},{value:"\u63CF\u8FF0",paraId:0,tocIndex:5},{value:"\u7C7B\u578B",paraId:0,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:5},{value:"className",paraId:0,tocIndex:5},{value:"\u8282\u70B9\u7C7B\u540D",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"style",paraId:0,tocIndex:5},{value:"\u8282\u70B9\u6837\u5F0F",paraId:0,tocIndex:5},{value:"CSSProperties",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"elementId",paraId:0,tocIndex:5},{value:"\u6E32\u67D3\u7684\u76EE\u6807\u5143\u7D20ID",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"appkey",paraId:0,tocIndex:5},{value:"\u5E94\u7528\u7C7B\u578B\u6807\u8BC6",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"scene",paraId:0,tocIndex:5},{value:"\u4F7F\u7528\u573A\u666F\u6807\u8BC6",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"width",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u7684\u5BBD\u5EA6",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"300",paraId:0,tocIndex:5},{value:"height",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u7684\u9AD8\u5EA6",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"42",paraId:0,tocIndex:5},{value:"defaultTxt",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u521D\u59CB\u72B6\u6001\u6587\u6848",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"\u70B9\u51FB\u6309\u94AE\u5F00\u59CB\u667A\u80FD\u9A8C\u8BC1",paraId:0,tocIndex:5},{value:"successTxt",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u9A8C\u8BC1\u901A\u8FC7\u72B6\u6001\u6587\u6848",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u6210\u529F",paraId:0,tocIndex:5},{value:"failTxt",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u9A8C\u8BC1\u5931\u8D25\uFF08\u62E6\u622A\uFF09\u72B6\u6001\u6587\u6848",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u5728\u6B64\u70B9\u51FB\u6309\u94AE\u5237\u65B0",paraId:0,tocIndex:5},{value:"scaningTxt",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u9A8C\u8BC1\u4E2D\u72B6\u6001\u6587\u6848",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u68C0\u6D4B\u4E2D",paraId:0,tocIndex:5},{value:"language",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u7EC4\u4EF6\u7684\u8BED\u8A00",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"cn",paraId:0,tocIndex:5},{value:"upLang",paraId:0,tocIndex:5},{value:"\u4E8C\u6B21\u9A8C\u8BC1\u65F6\uFF0C\u7528\u4E8E\u81EA\u5B9A\u4E49\u6587\u6848",paraId:0,tocIndex:5},{value:"object",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"test",paraId:0,tocIndex:5},{value:"\u6D4B\u8BD5\u5B57\u6BB5\uFF0C\u7528\u4E8E\u6D4B\u8BD5\u9A8C\u8BC1\u7801\u7684\u4E0D\u540C\u72B6\u6001",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"onSuccess",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u6210\u529F\u56DE\u8C03",paraId:0,tocIndex:5},{value:"(data) => void",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"onChange",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u6210\u529F/\u5931\u8D25\u56DE\u8C03",paraId:0,tocIndex:5},{value:"(data) => void",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"onFailed",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u5931\u8D25\u56DE\u8C03",paraId:0,tocIndex:5},{value:"() => void",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5}]},34718:function(h,e,a){a.r(e),a.d(e,{texts:function(){return r}});const r=[{value:"\u6587\u6863",paraId:0,tocIndex:0},{value:`# npm install
npm install @pansy/smart-captcha --save

# yarn install
yarn add @pansy/smart-captcha

# pnpm install
pnpm i @pansy/smart-captcha
`,paraId:1,tocIndex:1},{value:`import { SmartCaptcha } from '@pansy/smart-captcha';

export default () => {
  <SmartCaptcha />
}
`,paraId:2,tocIndex:2}]},36992:function(h,e){e.Z=`import React, { useRef } from 'react';
import { Button, Space } from 'antd';
import { SmartCaptcha, type SmartCaptchaRef } from '@pansy/smart-captcha';

export default () => {
  const ref = useRef<SmartCaptchaRef>();

  const handleRest = () => {
    ref.current?.reset();
  }

  return (
    <Space direction="vertical" size={24}>
      <SmartCaptcha
        ref={ref}
        elementId="smart-captcha-01"
        onSuccess={(data) => {
          console.log(data);
        }}
      />
      <Button onClick={handleRest}>
        \u91CD\u7F6E
      </Button>
    </Space>
  )
}
`},66938:function(h,e){e.Z=`import React, { useRef } from 'react';
import { Button, Space, Form } from 'antd';
import { SmartCaptcha, type SmartCaptchaRef } from '@pansy/smart-captcha';

export default () => {
  const ref = useRef<SmartCaptchaRef>();
  const [form] = Form.useForm();

  const handleReset = () => {
    ref.current?.reset();
  }

  const handleSubmit = () => {
    console.log(form.getFieldsValue());
  }

  return (
    <Form form={form}>
      <Form.Item name="captcha">
        <SmartCaptcha
          ref={ref}
          elementId="smart-captcha-02"
          onSuccess={(data) => {
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
  )
}
`},54521:function(h,e){e.Z=`import React, { useRef } from 'react';
import { Button, Space } from 'antd';
import { SliderCaptcha, type SmartCaptchaRef } from '@pansy/smart-captcha';

export default () => {
  const ref = useRef<SmartCaptchaRef>();

  const handleRest = () => {
    ref.current?.reset();
  }

  return (
    <Space direction="vertical" size={24}>
      <SliderCaptcha
        ref={ref}
        elementId="slider-captcha-01"
        appkey="CF_APP_1"
        scene="register"
        onSuccess={(data) => {
          console.log(data);
        }}
        style={{
          position: 'relative'
        }}
      />

      <Button onClick={handleRest}>
        \u91CD\u7F6E
      </Button>
    </Space>
  )
}
`}}]);
