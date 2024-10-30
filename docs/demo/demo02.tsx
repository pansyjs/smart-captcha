import { SmartCaptcha, type SmartCaptchaRef } from '@pansy/smart-captcha';
import { Button, Form, Space } from 'antd';
import React, { useRef } from 'react';

function Demo() {
  const ref = useRef<SmartCaptchaRef>();
  const [form] = Form.useForm();

  const handleReset = () => {
    ref.current?.reset();
  };

  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    console.log(form.getFieldsValue());
  };

  return (
    <Form form={form}>
      <Form.Item name="captcha">
        <SmartCaptcha
          ref={ref}
          elementId="smart-captcha-02"
          onSuccess={(data) => {
            // eslint-disable-next-line no-console
            console.log(data);
          }}
        />
      </Form.Item>

      <Space>
        <Button onClick={handleReset}>
          重置
        </Button>
        <Button onClick={handleSubmit}>
          提交
        </Button>
      </Space>
    </Form>
  );
}

export default Demo;
