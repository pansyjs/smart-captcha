import React, { useRef } from 'react';
import { Button, Space } from 'antd';
import { SliderCaptcha, type SmartCaptchaRef } from '@pansy/smart-captcha';

export default () => {
  const ref = useRef<SmartCaptchaRef>();

  const handleRest = () => {
    ref.current?.reset();
  }

  return (
    <Space direction="vertical" size={24}>
      <SliderCaptcha
        ref={ref}
        elementId="slider-captcha-01"
        appkey="CF_APP_1"
        scene="register"
        onSuccess={(data) => {
          console.log(data);
        }}
        style={{
          position: 'relative'
        }}
      />

      <Button onClick={handleRest}>
        重置
      </Button>
    </Space>
  )
}
