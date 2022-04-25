import { SmartCaptcha } from '@pansy/smart-captcha';

export default () => {
  return (
    <SmartCaptcha
      onSuccess={(data) => {
        console.log(data);
      }}
    />
  )
}
