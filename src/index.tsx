import React, { forwardRef } from 'react';
import { ApiLoader } from './api-loader';
import BaseSmartCaptcha from './components/Smart';
import BaseSliderCaptcha from './components/Slider';

import type { SmartCaptchaProps, SmartCaptchaRef, SliderCaptchaProps } from './types';

const InternalSmartCaptcha: React.ForwardRefRenderFunction<
  SmartCaptchaRef,
  SmartCaptchaProps
> = (props, ref) => {
  return (
    <ApiLoader>
      <BaseSmartCaptcha {...props} ref={ref} />
    </ApiLoader>
  )
}

const InternalSliderCaptcha: React.ForwardRefRenderFunction<
  SmartCaptchaRef,
  SliderCaptchaProps
> = (props, ref) => {
  return (
    <ApiLoader>
      <BaseSliderCaptcha {...props} ref={ref} />
    </ApiLoader>
  )
}

export const SmartCaptcha = forwardRef(InternalSmartCaptcha);
export const SliderCaptcha = forwardRef(InternalSliderCaptcha);

export type {
  SmartCaptchaData,
  SmartCaptchaRef,
  SmartCaptchaProps,
  SliderCaptchaProps,
} from './types';
