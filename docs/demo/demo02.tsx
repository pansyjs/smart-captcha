import { useRef } from 'react';
import { Button, Space, Form } from 'antd';
import { SmartCaptcha } from '@pansy/smart-captcha';

import type { SmartCaptchaRef } from '@pansy/smart-captcha';

export default () => {
  const ref = useRef<SmartCaptchaRef>();
  const [form] = Form.useForm();

  const handleReset = () => {
    ref.current?.reset();
  }

  const handleSubmit = () => {
    console.log(form.getFieldsValue());
  }

  return (
    <Form form={form}>
      <Form.Item name="captcha">
        <SmartCaptcha
          ref={ref}
          elementId="smart-captcha-02"
          onSuccess={(data) => {
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

  )
}
