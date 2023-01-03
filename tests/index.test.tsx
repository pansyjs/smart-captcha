import * as React from 'react';
import { act, render, fireEvent, } from '@testing-library/react';
import { SmartCaptcha } from '../src';

describe('SmartCaptcha', () => {
  it('should be defined', () => {
    expect(SmartCaptcha).toBeDefined();
  });

  it('renders correctly', async () => {
    const { container } = render(<SmartCaptcha />);

    const script = document.querySelector('script') as HTMLScriptElement;

    act(() => {
      fireEvent.load(script);
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('mount correctly', () => {
    expect(() => render(<SmartCaptcha />)).not.toThrow();
  });
});
