import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
} from 'react';
import { Option } from './config';

import type { SmartCaptchaProps, SmartCaptchaResult, SmartCaptchaRef, } from './types';

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
    if (window.AWSC) {
      window.AWSC.use('ic', function (state: string, module: any) {
        ic.current = module.init({
          // 声明智能验证需要渲染的目标元素ID。
          renderTo: `#${elementId}`,
          // 智能验证组件的宽度。
          width: width,
          // 智能验证组件的高度。
          height: height,
          // 智能验证组件初始状态文案。
          default_txt: '点击按钮开始智能验证',
          // 智能验证组件验证通过状态文案。
          success_txt: '验证成功',
          // 智能验证组件验证失败（拦截）状态文案。
          fail_txt: '验证失败，请在此点击按钮刷新',
          // 智能验证组件验证中状态文案。
          scaning_txt: '智能检测中',
          // 应用类型标识
          appkey: Option.appkey,
          // 使用场景标识
          scene: Option.scene,
          success: function(data: SmartCaptchaResult) {
            const value = {
              sig: data.sig,
              token: data.token,
              sessionId: data.sessionId,
              appKey: Option.appkey,
              scene: Option.scene,
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
        })
      })
    }

    return () => {
      ic.current = undefined;
    }
  }, []);

  return (
    <div className={className} style={style} id={elementId} />
  );
};

export default forwardRef(SmartCaptcha);
