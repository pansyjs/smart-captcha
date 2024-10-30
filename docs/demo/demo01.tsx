import { SmartCaptcha, type SmartCaptchaRef } from '@pansy/smart-captcha';
import { Button, Space } from 'antd';
import React, { useRef } from 'react';

function Demo() {
  const ref = useRef<SmartCaptchaRef>();

  const handleRest = () => {
    ref.current?.reset();
  };

  return (
    <Space direction="vertical" size={24}>
      <SmartCaptcha
        ref={ref}
        elementId="smart-captcha-01"
        onSuccess={(data) => {
          // eslint-disable-next-line no-console
          console.log(data);
        }}
      />
      <Button onClick={handleRest}>
        重置
      </Button>
    </Space>
  );
}

export default Demo;
