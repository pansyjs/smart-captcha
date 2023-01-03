import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { ApiLoader } from '../src/api-loader';

describe('ApiLoader', () => {
  it('should be defined', () => {
    expect(ApiLoader).toBeDefined();
  });

  it('renders correctly', async () => {
    const { container } = render(<ApiLoader>children</ApiLoader>);

    const script = document.querySelector('script')!;

    await act(() => {
      fireEvent.load(script);
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
