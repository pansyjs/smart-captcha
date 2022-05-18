import { useRef } from 'react';
import { Button, Space } from 'antd';
import { SmartCaptcha } from '@pansy/smart-captcha';

import type { SmartCaptchaRef } from '@pansy/smart-captcha';

export default () => {
  const ref = useRef<SmartCaptchaRef>();

  const handleRest = () => {
    ref.current?.reset();
  }

  return (
    <Space direction="vertical" size={24}>
      <SmartCaptcha
        ref={ref}
        elementId="smart-captcha-01"
        onSuccess={(data) => {
          console.log(data);
        }}
      />
      <Button onClick={handleRest}>
        重置
      </Button>
    </Space>
  )
}
