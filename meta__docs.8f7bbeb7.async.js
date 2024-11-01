"use strict";(self.webpackChunk_pansy_smart_captcha=self.webpackChunk_pansy_smart_captcha||[]).push([[904],{19160:function(g,t,n){var d;n.r(t),n.d(t,{demos:function(){return H}});var h=n(90228),x=n.n(h),N=n(87999),o=n.n(N),u=n(75271),l=n(88730),T=n(27114),H={"docs-docs-demo-demo01":{component:u.memo(u.lazy(function(){return n.e(433).then(n.bind(n,6767))})),asset:{type:"BLOCK",id:"docs-docs-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(55598).Z},"@pansy/smart-captcha":{type:"NPM",value:"3.1.0"},antd:{type:"NPM",value:"5.21.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@pansy/smart-captcha":l,antd:T,react:d||(d=n.t(u,2))},renderOpts:{compile:function(){var y=o()(x()().mark(function S(){var I,R=arguments;return x()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(787).then(n.bind(n,74787));case 2:return a.abrupt("return",(I=a.sent).default.apply(I,R));case 3:case"end":return a.stop()}},S)}));function C(){return y.apply(this,arguments)}return C}()}},"docs-docs-demo-demo02":{component:u.memo(u.lazy(function(){return n.e(433).then(n.bind(n,60879))})),asset:{type:"BLOCK",id:"docs-docs-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(76034).Z},"@pansy/smart-captcha":{type:"NPM",value:"3.1.0"},antd:{type:"NPM",value:"5.21.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@pansy/smart-captcha":l,antd:T,react:d||(d=n.t(u,2))},renderOpts:{compile:function(){var y=o()(x()().mark(function S(){var I,R=arguments;return x()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(787).then(n.bind(n,74787));case 2:return a.abrupt("return",(I=a.sent).default.apply(I,R));case 3:case"end":return a.stop()}},S)}));function C(){return y.apply(this,arguments)}return C}()}},"docs-docs-demo-demo03":{component:u.memo(u.lazy(function(){return n.e(433).then(n.bind(n,87190))})),asset:{type:"BLOCK",id:"docs-docs-demo-demo03",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(93233).Z},"@pansy/smart-captcha":{type:"NPM",value:"3.1.0"},antd:{type:"NPM",value:"5.21.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@pansy/smart-captcha":l,antd:T,react:d||(d=n.t(u,2))},renderOpts:{compile:function(){var y=o()(x()().mark(function S(){var I,R=arguments;return x()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(787).then(n.bind(n,74787));case 2:return a.abrupt("return",(I=a.sent).default.apply(I,R));case 3:case"end":return a.stop()}},S)}));function C(){return y.apply(this,arguments)}return C}()}}}},63970:function(g,t,n){n.r(t),n.d(t,{demos:function(){return h}});var d=n(75271),h={"docs-demo-demo01":{component:d.memo(d.lazy(function(){return n.e(433).then(n.bind(n,6767))})),asset:null,context:void 0,renderOpts:void 0}}},88730:function(g,t,n){n.r(t),n.d(t,{SliderCaptcha:function(){return k},SmartCaptcha:function(){return w}});var d=n(26068),h=n.n(d),x=n(67825),N=n.n(x),o=n(75271),u=n(15794),l=n(52676);function T(M){var e=M.children,v=M.loading,f=(0,u.C)("//g.alicdn.com/AWSC/AWSC/awsc.js");return f==="loading"&&v?v:(0,l.jsx)(l.Fragment,{children:f==="ready"&&e})}var H=function(e,v){var f=e.className,E=e.style,L=e.elementId,$=L===void 0?"slider-captcha":L,A=e.appkey,j=e.scene,z=e.foreign,V=e.width,U=e.language,J=e.upLang,Z=e.hideErrorCode,Q=e.fontSize,D=e.onSuccess,i=e.onChange,O=e.onFailed,F=e.onError,c=(0,o.useRef)();return(0,o.useImperativeHandle)(v,function(){return{reset:function(){var P;c==null||(P=c.current)===null||P===void 0||P.reset()}}}),(0,o.useEffect)(function(){window.AWSC&&!c.current&&window.AWSC.use("nc",function(X,P){c.current=P.init({appkey:A,scene:j,renderTo:"".concat($),width:V,foreign:z,language:U,upLang:J,fontSize:Q,hideErrorCode:Z,success:function(r){var s={sig:r.sig,token:r.token,sessionId:r.sessionId,appKey:A,scene:j};i==null||i(s),D==null||D(s)},fail:function(){var r;c==null||(r=c.current)===null||r===void 0||r.reset(),i==null||i(void 0),O==null||O()},error:function(){var r;c==null||(r=c.current)===null||r===void 0||r.reset(),i==null||i(void 0),F==null||F()}})})},[]),(0,l.jsx)("div",{className:f,style:E,id:$})},y=(0,o.forwardRef)(H),C=function(e,v){var f=e.className,E=e.style,L=e.elementId,$=L===void 0?"smart-captcha":L,A=e.appkey,j=e.scene,z=e.width,V=z===void 0?300:z,U=e.height,J=U===void 0?42:U,Z=e.defaultTxt,Q=Z===void 0?"\u70B9\u51FB\u6309\u94AE\u5F00\u59CB\u667A\u80FD\u9A8C\u8BC1":Z,D=e.successTxt,i=D===void 0?"\u9A8C\u8BC1\u6210\u529F":D,O=e.scaningTxt,F=O===void 0?"\u667A\u80FD\u68C0\u6D4B\u4E2D":O,c=e.failTxt,X=c===void 0?"\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u5728\u6B64\u70B9\u51FB\u6309\u94AE\u5237\u65B0":c,P=e.language,G=e.upLang,r=e.onSuccess,s=e.onChange,B=e.onFailed,p=(0,o.useRef)();return(0,o.useImperativeHandle)(v,function(){return{reset:function(){var W;p==null||(W=p.current)===null||W===void 0||W.reset()}}}),(0,o.useEffect)(function(){window.AWSC&&!p.current&&window.AWSC.use("ic",function(q,W){p.current=W.init({renderTo:"#".concat($),width:V,height:J,default_txt:Q,success_txt:i,fail_txt:X,scaning_txt:F,appkey:A,scene:j,language:P,upLang:G,success:function(m){var b={sig:m.sig,token:m.token,sessionId:m.sessionId,appKey:A,scene:j};s==null||s(b),r==null||r(b)},fail:function(){var m;p==null||(m=p.current)===null||m===void 0||m.reset(),B==null||B(),s==null||s(void 0)},error:function(){var m;p==null||(m=p.current)===null||m===void 0||m.reset(),B==null||B(),s==null||s(void 0)}})})},[]),(0,l.jsx)("div",{className:f,style:E,id:$})},S=(0,o.forwardRef)(C),I=["loading"],R=["loading"],K=function(e,v){var f=e.loading,E=N()(e,I);return(0,l.jsx)(T,{loading:f,children:(0,l.jsx)(S,h()(h()({},E),{},{ref:v}))})},a=function(e,v){var f=e.loading,E=N()(e,R);return(0,l.jsx)(T,{loading:f,children:(0,l.jsx)(y,h()(h()({},E),{},{ref:v}))})},w=(0,o.forwardRef)(K),k=(0,o.forwardRef)(a)},76540:function(g,t,n){n.r(t),n.d(t,{texts:function(){return d}});const d=[{value:"\u5C5E\u6027",paraId:0,tocIndex:5},{value:"\u63CF\u8FF0",paraId:0,tocIndex:5},{value:"\u7C7B\u578B",paraId:0,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:5},{value:"className",paraId:0,tocIndex:5},{value:"\u8282\u70B9\u7C7B\u540D",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"style",paraId:0,tocIndex:5},{value:"\u8282\u70B9\u6837\u5F0F",paraId:0,tocIndex:5},{value:"CSSProperties",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"elementId",paraId:0,tocIndex:5},{value:"\u6E32\u67D3\u7684\u76EE\u6807\u5143\u7D20ID",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"appkey",paraId:0,tocIndex:5},{value:"\u5E94\u7528\u7C7B\u578B\u6807\u8BC6",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"scene",paraId:0,tocIndex:5},{value:"\u4F7F\u7528\u573A\u666F\u6807\u8BC6",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"width",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u7684\u5BBD\u5EA6",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"300",paraId:0,tocIndex:5},{value:"height",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u7684\u9AD8\u5EA6",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"42",paraId:0,tocIndex:5},{value:"defaultTxt",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u521D\u59CB\u72B6\u6001\u6587\u6848",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"\u70B9\u51FB\u6309\u94AE\u5F00\u59CB\u667A\u80FD\u9A8C\u8BC1",paraId:0,tocIndex:5},{value:"successTxt",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u9A8C\u8BC1\u901A\u8FC7\u72B6\u6001\u6587\u6848",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u6210\u529F",paraId:0,tocIndex:5},{value:"failTxt",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u9A8C\u8BC1\u5931\u8D25\uFF08\u62E6\u622A\uFF09\u72B6\u6001\u6587\u6848",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u5728\u6B64\u70B9\u51FB\u6309\u94AE\u5237\u65B0",paraId:0,tocIndex:5},{value:"scaningTxt",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u9A8C\u8BC1\u7EC4\u4EF6\u9A8C\u8BC1\u4E2D\u72B6\u6001\u6587\u6848",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"\u667A\u80FD\u68C0\u6D4B\u4E2D",paraId:0,tocIndex:5},{value:"language",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u7EC4\u4EF6\u7684\u8BED\u8A00",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"cn",paraId:0,tocIndex:5},{value:"upLang",paraId:0,tocIndex:5},{value:"\u4E8C\u6B21\u9A8C\u8BC1\u65F6\uFF0C\u7528\u4E8E\u81EA\u5B9A\u4E49\u6587\u6848",paraId:0,tocIndex:5},{value:"object",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"test",paraId:0,tocIndex:5},{value:"\u6D4B\u8BD5\u5B57\u6BB5\uFF0C\u7528\u4E8E\u6D4B\u8BD5\u9A8C\u8BC1\u7801\u7684\u4E0D\u540C\u72B6\u6001",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"onSuccess",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u6210\u529F\u56DE\u8C03",paraId:0,tocIndex:5},{value:"(data) => void",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"onChange",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u6210\u529F/\u5931\u8D25\u56DE\u8C03",paraId:0,tocIndex:5},{value:"(data) => void",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"onFailed",paraId:0,tocIndex:5},{value:"\u9A8C\u8BC1\u5931\u8D25\u56DE\u8C03",paraId:0,tocIndex:5},{value:"() => void",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5}]},50762:function(g,t,n){n.r(t),n.d(t,{texts:function(){return d}});const d=[{value:"\u6587\u6863",paraId:0,tocIndex:0},{value:`# npm install
npm install @pansy/smart-captcha --save

# yarn install
yarn add @pansy/smart-captcha

# pnpm install
pnpm i @pansy/smart-captcha
`,paraId:1,tocIndex:1},{value:`import { SmartCaptcha } from '@pansy/smart-captcha';

export default () => {
  <SmartCaptcha />
}
`,paraId:2,tocIndex:2}]},55598:function(g,t){t.Z=`import { SmartCaptcha, type SmartCaptchaRef } from '@pansy/smart-captcha';
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
`},76034:function(g,t){t.Z=`import { SmartCaptcha, type SmartCaptchaRef } from '@pansy/smart-captcha';
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
`},93233:function(g,t){t.Z=`import { SliderCaptcha, type SmartCaptchaRef } from '@pansy/smart-captcha';
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
