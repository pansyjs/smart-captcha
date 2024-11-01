"use strict";(self.webpackChunk_pansy_smart_captcha=self.webpackChunk_pansy_smart_captcha||[]).push([[904],{9991:function(C,t,n){n.r(t),n.d(t,{demos:function(){return R}});var d={};n.r(d),n.d(d,{SliderCaptcha:function(){return e.Z},SmartCaptcha:function(){return D.Z}});var E=n(90228),x=n.n(E),r=n(87999),y=n.n(r),p=n(75271),O=n.t(p,2),e=n(22647),D=n(4703),g=n(27114),R={"docs-docs-demo-demo01":{component:p.memo(p.lazy(function(){return n.e(433).then(n.bind(n,6767))})),asset:{type:"BLOCK",id:"docs-docs-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(55598).Z},"@pansy/smart-captcha":{type:"NPM",value:"3.2.0"},antd:{type:"NPM",value:"5.21.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@pansy/smart-captcha":d,antd:g,react:O},renderOpts:{compile:function(){var m=y()(x()().mark(function I(){var o,h=arguments;return x()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(787).then(n.bind(n,74787));case 2:return a.abrupt("return",(o=a.sent).default.apply(o,h));case 3:case"end":return a.stop()}},I)}));function s(){return m.apply(this,arguments)}return s}()}},"docs-docs-demo-demo02":{component:p.memo(p.lazy(function(){return n.e(433).then(n.bind(n,60879))})),asset:{type:"BLOCK",id:"docs-docs-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(76034).Z},"@pansy/smart-captcha":{type:"NPM",value:"3.2.0"},antd:{type:"NPM",value:"5.21.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@pansy/smart-captcha":d,antd:g,react:O},renderOpts:{compile:function(){var m=y()(x()().mark(function I(){var o,h=arguments;return x()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(787).then(n.bind(n,74787));case 2:return a.abrupt("return",(o=a.sent).default.apply(o,h));case 3:case"end":return a.stop()}},I)}));function s(){return m.apply(this,arguments)}return s}()}},"docs-docs-demo-demo03":{component:p.memo(p.lazy(function(){return n.e(433).then(n.bind(n,87190))})),asset:{type:"BLOCK",id:"docs-docs-demo-demo03",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(93233).Z},"@pansy/smart-captcha":{type:"NPM",value:"3.2.0"},antd:{type:"NPM",value:"5.21.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@pansy/smart-captcha":d,antd:g,react:O},renderOpts:{compile:function(){var m=y()(x()().mark(function I(){var o,h=arguments;return x()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(787).then(n.bind(n,74787));case 2:return a.abrupt("return",(o=a.sent).default.apply(o,h));case 3:case"end":return a.stop()}},I)}));function s(){return m.apply(this,arguments)}return s}()}}}},63970:function(C,t,n){n.r(t),n.d(t,{demos:function(){return E}});var d=n(75271),E={"docs-demo-demo01":{component:d.memo(d.lazy(function(){return n.e(433).then(n.bind(n,6767))})),asset:null,context:void 0,renderOpts:void 0}}},22647:function(C,t,n){var d=n(48305),E=n.n(d),x=n(15794),r=n(75271),y=n(52676),p=function(e,D){var g=e.className,R=e.style,m=e.elementId,s=m===void 0?"slider-captcha":m,I=e.appkey,o=e.scene,h=e.foreign,P=e.width,a=e.language,Z=e.upLang,F=e.hideErrorCode,z=e.fontSize,L=e.loading,A=e.onSuccess,u=e.onChange,B=e.onFailed,M=e.onError,c=(0,r.useRef)(),G=(0,r.useState)(!0),K=E()(G,2),j=K[0],$=K[1],i=(0,x.C)("//g.alicdn.com/AWSC/AWSC/awsc.js");return(0,r.useImperativeHandle)(D,function(){return{reset:function(){var T;c==null||(T=c.current)===null||T===void 0||T.reset()}}}),(0,r.useEffect)(function(){i==="ready"&&window.AWSC&&!c.current&&($(!1),window.AWSC.use("nc",function(S,T){c.current=T.init({appkey:I,scene:o,renderTo:"".concat(s),width:P,foreign:h,language:a,upLang:Z,fontSize:z,hideErrorCode:F,success:function(l){var U={sig:l.sig,token:l.token,sessionId:l.sessionId,appKey:I,scene:o};u==null||u(U),A==null||A(U)},fail:function(){var l;c==null||(l=c.current)===null||l===void 0||l.reset(),u==null||u(void 0),B==null||B()},error:function(){var l;c==null||(l=c.current)===null||l===void 0||l.reset(),u==null||u(void 0),M==null||M()}})}))},[i]),L?(0,y.jsx)("div",{className:g,style:R,id:s,children:j&&L}):(0,y.jsx)("div",{className:g,style:R,id:s})};t.Z=(0,r.forwardRef)(p)},4703:function(C,t,n){var d=n(48305),E=n.n(d),x=n(15794),r=n(75271),y=n(52676),p=function(e,D){var g=e.className,R=e.style,m=e.elementId,s=m===void 0?"smart-captcha":m,I=e.appkey,o=e.scene,h=e.width,P=h===void 0?300:h,a=e.height,Z=a===void 0?42:a,F=e.defaultTxt,z=F===void 0?"\u70B9\u51FB\u6309\u94AE\u5F00\u59CB\u667A\u80FD\u9A8C\u8BC1":F,L=e.successTxt,A=L===void 0?"\u9A8C\u8BC1\u6210\u529F":L,u=e.scaningTxt,B=u===void 0?"\u667A\u80FD\u68C0\u6D4B\u4E2D":u,M=e.failTxt,c=M===void 0?"\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u5728\u6B64\u70B9\u51FB\u6309\u94AE\u5237\u65B0":M,G=e.language,K=e.upLang,j=e.loading,$=e.onSuccess,i=e.onChange,S=e.onFailed,T=(0,r.useState)(!0),W=E()(T,2),l=W[0],U=W[1],v=(0,r.useRef)(),H=(0,x.C)("//g.alicdn.com/AWSC/AWSC/awsc.js");return(0,r.useImperativeHandle)(D,function(){return{reset:function(){var N;v==null||(N=v.current)===null||N===void 0||N.reset()}}}),(0,r.useEffect)(function(){H==="ready"&&window.AWSC&&!v.current&&(U(!1),window.AWSC.use("ic",function(Q,N){v.current=N.init({renderTo:"#".concat(s),width:P,height:Z,default_txt:z,success_txt:A,fail_txt:c,scaning_txt:B,appkey:I,scene:o,language:G,upLang:K,success:function(f){var J={sig:f.sig,token:f.token,sessionId:f.sessionId,appKey:I,scene:o};i==null||i(J),$==null||$(J)},fail:function(){var f;v==null||(f=v.current)===null||f===void 0||f.reset(),S==null||S(),i==null||i(void 0)},error:function(){var f;v==null||(f=v.current)===null||f===void 0||f.reset(),S==null||S(),i==null||i(void 0)}})}))},[H]),j?(0,y.jsx)("div",{className:g,style:R,id:s,children:l&&j}):(0,y.jsx)("div",{className:g,style:R,id:s})};t.Z=(0,r.forwardRef)(p)},76540:function(C,t,n){n.r(t),n.d(t,{texts:function(){return d}});const d=[{value:"\u5C5E\u6027",paraId:0,tocIndex:5},{value:"\u63CF\u8FF0",paraId:0,tocIndex:5},{value:"\u7C7B\u578B",paraId:0,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:5},{value:"className",paraId:0,tocIndex:5},{value:"\u8282\u70B9\u7C7B\u540D",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"style",paraId:0,tocIndex:5},{value:"\u8282\u70B9\u6837\u5F0F",paraId:0,tocIndex:5},{value:"CSSProperties",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"elementId",paraId:0,tocIndex:5},{value:"\u6E32\u67D3\u7684\u76EE\u6807\u5143\u7D20ID",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"appkey",paraId:0,tocIndex:5},{value:"\u5E94\u7528\u7C7B\u578B\u6807\u8BC6",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"scene",paraId:0,tocIndex:5},{value:"\u4F7F\u7528\u573A\u666F\u6807\u8BC6",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"width",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u7684\u5BBD\u5EA6",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"300",paraId:0,tocIndex:5},{value:"height",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u7684\u9AD8\u5EA6",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"42",paraId:0,tocIndex:5},{value:"defaultTxt",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u521D\u59CB\u72B6\u6001\u6587\u6848",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"\u70B9\u51FB\u6309\u94AE\u5F00\u59CB\u667A\u80FD\u9A8C\u8BC1",paraId:0,tocIndex:5},{value:"successTxt",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u9A8C\u8BC1\u901A\u8FC7\u72B6\u6001\u6587\u6848",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u6210\u529F",paraId:0,tocIndex:5},{value:"failTxt",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u9A8C\u8BC1\u5931\u8D25\uFF08\u62E6\u622A\uFF09\u72B6\u6001\u6587\u6848",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u5728\u6B64\u70B9\u51FB\u6309\u94AE\u5237\u65B0",paraId:0,tocIndex:5},{value:"scaningTxt",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u9A8C\u8BC1\u4E2D\u72B6\u6001\u6587\u6848",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u68C0\u6D4B\u4E2D",paraId:0,tocIndex:5},{value:"language",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u7EC4\u4EF6\u7684\u8BED\u8A00",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"cn",paraId:0,tocIndex:5},{value:"upLang",paraId:0,tocIndex:5},{value:"\u4E8C\u6B21\u9A8C\u8BC1\u65F6\uFF0C\u7528\u4E8E\u81EA\u5B9A\u4E49\u6587\u6848",paraId:0,tocIndex:5},{value:"object",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"test",paraId:0,tocIndex:5},{value:"\u6D4B\u8BD5\u5B57\u6BB5\uFF0C\u7528\u4E8E\u6D4B\u8BD5\u9A8C\u8BC1\u7801\u7684\u4E0D\u540C\u72B6\u6001",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"onSuccess",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u6210\u529F\u56DE\u8C03",paraId:0,tocIndex:5},{value:"(data) => void",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"onChange",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u6210\u529F/\u5931\u8D25\u56DE\u8C03",paraId:0,tocIndex:5},{value:"(data) => void",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"onFailed",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u5931\u8D25\u56DE\u8C03",paraId:0,tocIndex:5},{value:"() => void",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5}]},50762:function(C,t,n){n.r(t),n.d(t,{texts:function(){return d}});const d=[{value:"\u6587\u6863",paraId:0,tocIndex:0},{value:`# npm install
npm install @pansy/smart-captcha --save

# yarn install
yarn add @pansy/smart-captcha

# pnpm install
pnpm i @pansy/smart-captcha
`,paraId:1,tocIndex:1},{value:`import { SmartCaptcha } from '@pansy/smart-captcha';

export default () => {
  <SmartCaptcha />
}
`,paraId:2,tocIndex:2}]},55598:function(C,t){t.Z=`import { SmartCaptcha, type SmartCaptchaRef } from '@pansy/smart-captcha';
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
`},76034:function(C,t){t.Z=`import { SmartCaptcha, type SmartCaptchaRef } from '@pansy/smart-captcha';
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
`},93233:function(C,t){t.Z=`import { SliderCaptcha, type SmartCaptchaRef } from '@pansy/smart-captcha';
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
