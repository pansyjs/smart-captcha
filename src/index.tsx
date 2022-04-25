import React, { forwardRef } from 'react';
import { ApiLoader } from './api-loader';
import BaseSmartCaptcha from './smart-captcha';

import type { SmartCaptchaProps, SmartCaptchaRef } from './types';

const InternalSmartCaptcha: React.ForwardRefRenderFunction<SmartCaptchaRef, SmartCaptchaProps> = (props, ref) => {
  return (
    <ApiLoader>
      <BaseSmartCaptcha {...props} ref={ref} />
    </ApiLoader>
  )
}

export const SmartCaptcha = forwardRef(InternalSmartCaptcha);

export type {
  SmartCaptchaData,
  SmartCaptchaProps,
} from './types';
