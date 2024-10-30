import type { SliderCaptchaProps, SmartCaptchaProps, SmartCaptchaRef } from './types';
import React, { forwardRef } from 'react';
import { Loader } from './components/Loader';
import BaseSliderCaptcha from './components/Slider';
import BaseSmartCaptcha from './components/Smart';

const InternalSmartCaptcha: React.ForwardRefRenderFunction<
  SmartCaptchaRef,
  SmartCaptchaProps
> = (props, ref) => {
  return (
    <Loader>
      <BaseSmartCaptcha {...props} ref={ref} />
    </Loader>
  );
};

const InternalSliderCaptcha: React.ForwardRefRenderFunction<
  SmartCaptchaRef,
  SliderCaptchaProps
> = (props, ref) => {
  return (
    <Loader>
      <BaseSliderCaptcha {...props} ref={ref} />
    </Loader>
  );
};

export const SmartCaptcha = forwardRef(InternalSmartCaptcha);
export const SliderCaptcha = forwardRef(InternalSliderCaptcha);

export type {
  SliderCaptchaProps,
  SmartCaptchaData,
  SmartCaptchaProps,
  SmartCaptchaRef,
} from './types';
