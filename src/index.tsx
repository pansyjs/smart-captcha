import type { LoaderProps } from './components/Loader';
import type { SliderCaptchaProps, SmartCaptchaProps, SmartCaptchaRef } from './types';
import React, { forwardRef } from 'react';
import { Loader } from './components/Loader';
import BaseSliderCaptcha from './components/Slider';
import BaseSmartCaptcha from './components/Smart';

const InternalSmartCaptcha: React.ForwardRefRenderFunction<
  SmartCaptchaRef,
  SmartCaptchaProps & Omit<LoaderProps, 'children'>
> = (props, ref) => {
  const { loading, ...rest } = props;
  return (
    <Loader loading={loading}>
      <BaseSmartCaptcha {...rest} ref={ref} />
    </Loader>
  );
};

const InternalSliderCaptcha: React.ForwardRefRenderFunction<
  SmartCaptchaRef,
  SliderCaptchaProps & Omit<LoaderProps, 'children'>
> = (props, ref) => {
  const { loading, ...rest } = props;

  return (
    <Loader loading={loading}>
      <BaseSliderCaptcha {...rest} ref={ref} />
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
