import { useRef } from 'react';
import { SmartCaptcha } from '@pansy/smart-captcha';

export default () => {
  const ref = useRef();

  return (
    <SmartCaptcha
      ref={ref}
      onSuccess={(data) => {
        console.log(ref);
        console.log(data);
      }}
    />
  )
}
