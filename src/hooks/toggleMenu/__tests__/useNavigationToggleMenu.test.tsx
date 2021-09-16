import React, { useRef } from 'react';
import { render, waitFor } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import useNavigationToggleMenu from '../useNavigationToggleMenu';

describe('custom hooks : useNavigationToggleMenu called', () => {
  jest.spyOn(React, 'useRef').mockImplementation(() => ({
    current: {
      style: {
        transition: 'none',
        maxHeight: '0',
      },
      getBoundingClientRect() {
        return {
          height: 0,
        };
      },
    },
  }));

  it('navigation toggle menu called', async () => {
    const menuArrowRef = useRef<HTMLSpanElement>(null);
    const { result } = renderHook(() => useNavigationToggleMenu(0.5, false, menuArrowRef));
    render(
      <>
        <span ref={menuArrowRef} />
        <div {...result.current[0]} />
      </>,
    );

    expect(result.current[1]).toBe(false);
    act(() => result.current[2]());
    expect(result.current[1]).toBe(true);
    act(() => result.current[3]());
    await waitFor(() => expect(result.current[1]).toBe(false));
    expect(result.current[1]).toBe(false);
  });
});
