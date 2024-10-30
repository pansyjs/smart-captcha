import type { SmartCaptchaData, SmartCaptchaProps, SmartCaptchaRef, SmartCaptchaResult } from '../types';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

const SmartCaptcha: React.ForwardRefRenderFunction<SmartCaptchaRef, SmartCaptchaProps> = (
  {
    className,
    style,
    elementId = 'smart-captcha',
    appkey,
    scene,
    width = 300,
    height = 42,
    defaultTxt = '点击按钮开始智能验证',
    successTxt = '验证成功',
    scaningTxt = '智能检测中',
    failTxt = '验证失败，请在此点击按钮刷新',
    language,
    upLang,
    onSuccess,
    onChange,
    onFailed,
  },
  ref,
) => {
  const ic = useRef<SmartCaptchaRef>();

  useImperativeHandle(ref, () => ({
    reset: () => {
      ic?.current?.reset();
    },
  }));

  useEffect(() => {
    if (window.AWSC && !ic.current) {
      window.AWSC.use('ic', (_: string, module: any) => {
        ic.current = module.init({
          // 声明智能验证需要渲染的目标元素ID。
          renderTo: `#${elementId}`,
          // 智能验证组件的宽度。
          width,
          // 智能验证组件的高度。
          height,
          // 智能验证组件初始状态文案。
          default_txt: defaultTxt,
          // 智能验证组件验证通过状态文案。
          success_txt: successTxt,
          // 智能验证组件验证失败（拦截）状态文案。
          fail_txt: failTxt,
          // 智能验证组件验证中状态文案。
          scaning_txt: scaningTxt,
          // 应用类型标识
          appkey,
          // 使用场景标识
          scene,
          language,
          upLang,
          success(data: SmartCaptchaResult) {
            const value: SmartCaptchaData = {
              sig: data.sig,
              token: data.token,
              sessionId: data.sessionId,
              appKey: appkey!,
              scene: scene!,
            };
            onChange?.(value);
            onSuccess?.(value);
          },
          fail() {
            ic?.current?.reset();
            onFailed?.();
            onChange?.(undefined);
          },
          error() {
            ic?.current?.reset();
            onFailed?.();
            onChange?.(undefined);
          },
        });
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={className} style={style} id={elementId} />
  );
};

export default forwardRef(SmartCaptcha);
