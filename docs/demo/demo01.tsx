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
    <Space direction="horizontal">
      <SmartCaptcha
        ref={ref}
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
