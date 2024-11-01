import type { SliderCaptchaProps, SmartCaptchaRef, SmartCaptchaResult } from '../types';
import { useExternal } from '@pansy/use-external';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

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
    loading,
    onSuccess,
    onChange,
    onFailed,
    onError,
  },
  ref,
) => {
  const nc = useRef<SmartCaptchaRef>();
  const [isLoading, setIsLoading] = useState(true);
  const status = useExternal('//g.alicdn.com/AWSC/AWSC/awsc.js');

  useImperativeHandle(ref, () => ({
    reset: () => {
      nc?.current?.reset();
    },
  }));

  useEffect(() => {
    if (status === 'ready' && window.AWSC && !nc.current) {
      setIsLoading(false);
      window.AWSC.use('nc', (_: string, module: any) => {
        nc.current = module.init({
          appkey,
          scene,
          renderTo: `${elementId}`,
          // 智能验证组件的宽度。
          width,
          foreign,
          language,
          upLang,
          fontSize,
          hideErrorCode,
          success(data: SmartCaptchaResult) {
            const value = {
              sig: data.sig,
              token: data.token,
              sessionId: data.sessionId,
              appKey: appkey,
              scene,
            };
            onChange?.(value);
            onSuccess?.(value);
          },
          fail() {
            nc?.current?.reset();
            onChange?.(undefined);
            onFailed?.();
          },
          error() {
            nc?.current?.reset();
            onChange?.(undefined);
            onError?.();
          },
        });
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  if (!loading) {
    return (
      <div className={className} style={style} id={elementId} />
    );
  }

  return (
    <div className={className} style={style} id={elementId}>
      {isLoading && loading}
    </div>
  );
};

export default forwardRef(SliderCaptcha);
