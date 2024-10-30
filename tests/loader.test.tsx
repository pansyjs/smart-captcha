import { act, fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { Loader } from '../src/components/Loader';

describe('apiLoader', () => {
  it('should be defined', () => {
    expect(Loader).toBeDefined();
  });

  it('renders correctly', async () => {
    const { container } = render(<Loader>children</Loader>);

    const script = document.querySelector('script')!;

    await act(() => {
      fireEvent.load(script);
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
