import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
} from 'react';

import type { SmartCaptchaResult, SmartCaptchaRef, SliderCaptchaProps } from '../types';

const SliderCaptcha: React.ForwardRefRenderFunction<SmartCaptchaRef, SliderCaptchaProps> = (
  {
    className,
    style,
    elementId = 'slider-captcha',
    appkey,
    scene,
    foreign,
    width,
    language,
    upLang,
    hideErrorCode,
    fontSize,
    onSuccess,
    onChange,
    onFailed,
    onError,
  },
  ref,
) => {
  const nc = useRef<SmartCaptchaRef>();

  useImperativeHandle(ref, () => ({
    reset: () => {
      nc?.current?.reset();
    },
  }));

  useEffect(() => {
    if (window.AWSC && !nc.current) {
      window.AWSC.use('nc', (_: string, module: any) => {
        nc.current = module.init({
          appkey,
          scene,
          renderTo: `${elementId}`,
          // 智能验证组件的宽度。
          width: width,
          foreign,
          language,
          upLang,
          fontSize,
          hideErrorCode,
          success: function(data: SmartCaptchaResult) {
            const value = {
              sig: data.sig,
              token: data.token,
              sessionId: data.sessionId,
              appKey: appkey,
              scene,
            }
            onChange?.(value);
            onSuccess?.(value);
          },
          fail: function() {
            nc?.current?.reset();
            onChange?.(undefined);
            onFailed?.();
          },
          error: function() {
            nc?.current?.reset();
            onChange?.(undefined);
            onError?.();
          },
        })
      })
    }
  }, []);

  return (
    <div className={className} style={style} id={elementId} />
  );
};

export default forwardRef(SliderCaptcha);
