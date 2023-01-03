import * as React from 'react';
import { act, render, fireEvent, } from '@testing-library/react';
import { SmartCaptcha, type SmartCaptchaRef } from '../src';

const executeLoaderCallback = async (e?: string | Error): Promise<void> => {
  await act(async () => {
    const script = document.querySelector('script')!;

    fireEvent.load(script);
  });
};

describe('SmartCaptcha', () => {
  it('should be defined', () => {
    expect(SmartCaptcha).toBeDefined();
  });

  it('renders correctly', async () => {
    const { container } = render(<SmartCaptcha />);

    expect(container.innerHTML).toBe('');

    await executeLoaderCallback();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('mount correctly', async () => {
    expect(() => render(<SmartCaptcha />)).not.toThrow();
  });

  it('SmartCaptcha ref', async () => {
    const ref = React.createRef<SmartCaptchaRef>();

    render(<SmartCaptcha ref={ref} />);

    await executeLoaderCallback();

    expect(typeof ref.current?.reset).toBe('function');
  });
});
