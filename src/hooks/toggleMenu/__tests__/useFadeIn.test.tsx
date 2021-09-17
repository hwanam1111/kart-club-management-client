import React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useFadeIn from '../useFadeIn';

describe('custom hooks : useFadeIn', () => {
  jest.spyOn(React, 'useRef').mockImplementation(() => ({
    current: {
      style: {
        transition: 'none',
        opacity: '0',
      },
    },
  }));

  it('use fadein called', async () => {
    const { result } = renderHook(() => useFadeIn(0.5, 0));
    render(<div {...result.current} />);
  });
});
