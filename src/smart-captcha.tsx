import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
} from 'react';
import { NVCOption } from './config';

import type { SmartCaptchaProps, SmartCaptchaResult, SmartCaptchaRef, } from './types';

declare const smartCaptcha: any;
declare const NVC_Opt: any;

const SmartCaptcha: React.ForwardRefRenderFunction<SmartCaptchaRef, SmartCaptchaProps> = (
  {
    className,
    style,
    elementId = 'smart-captcha',
    width = 300,
    height = 42,
    onSuccess,
    onChange,
    onFailed,
  },
  ref,
) => {
  const ic = useRef<any>();

  useImperativeHandle(ref, () => ({
    reset: () => {
      ic?.current?.reset();
    },
  }));

  useEffect(() => {
    if (typeof smartCaptcha !== 'undefined') {
      ic.current = new smartCaptcha({
        //声明智能验证需要渲染的目标元素ID。
        renderTo: `#${elementId}`,
        //智能验证组件的宽度。
        width: width,
        //智能验证组件的高度。
        height: height,
        //智能验证组件初始状态文案。
        default_txt: '点击按钮开始智能验证',
        //智能验证组件验证通过状态文案。
        success_txt: '验证成功',
        //智能验证组件验证失败（拦截）状态文案。
        fail_txt: '验证失败，请在此点击按钮刷新',
        //智能验证组件验证中状态文案。
        scaning_txt: '智能检测中',
        //前端智能验证通过时会触发该回调参数。您可以在该回调参数中将请求标识（token）、会话ID（sessionid）、签名串（sig）字段记录下来，随业务请求一同发送至您的服务端调用验签。
        success: function(data: SmartCaptchaResult) {
          const value = {
            token: NVC_Opt.token,
            sessionId: data.sessionId,
            sig: data.sig,
            appKey: NVCOption.appkey,
            scene: NVCOption.scene,
          }
          onChange?.(value);
          onSuccess?.(value);
        },
        fail: function() {
          ic?.current?.reset();
          onFailed?.();
          onChange?.(undefined);
        },
        error: function() {
          ic?.current?.reset();
          onFailed?.();
          onChange?.(undefined);
        },
      });
      ic.current.init();
    }
  }, []);

  return (
    <div className={className} style={style} id={elementId} />
  );
};

export default forwardRef(SmartCaptcha);
