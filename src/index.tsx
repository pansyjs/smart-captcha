import React from 'react';
import { ApiLoader } from './api-loader';
import BaseSmartCaptcha from './smart-captcha';

import { SmartCaptchaProps } from './smart-captcha';

export const SmartCaptcha: React.FC<SmartCaptchaProps> = (props) => {
  return (
    <ApiLoader>
      <BaseSmartCaptcha {...props} />
    </ApiLoader>
  )
}
