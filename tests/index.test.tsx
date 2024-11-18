import { act, fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { SmartCaptcha, type SmartCaptchaRef } from '../src';

async function executeLoaderCallback(_?: string | Error): Promise<void> {
  await act(async () => {
    const script = document.querySelector('script')!;

    fireEvent.load(script);
  });
}

describe('smartCaptcha', () => {
  it('should be defined', () => {
    expect(SmartCaptcha).toBeDefined();
  });

  it('renders correctly', async () => {
    const { container } = render(<SmartCaptcha appkey="test" scene="test" />);

    expect(container.innerHTML).toBe('<div id="smart-captcha"></div>');

    await executeLoaderCallback();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('mount correctly', async () => {
    expect(() => render(<SmartCaptcha appkey="test" scene="test" />)).not.toThrow();
  });

  it('smartCaptcha ref', async () => {
    // eslint-disable-next-line react/no-create-ref
    const ref = React.createRef<SmartCaptchaRef>();

    render(<SmartCaptcha appkey="test" scene="test" ref={ref} />);

    await executeLoaderCallback();

    expect(typeof ref.current?.reset).toBe('function');
  });
});
