import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import useFixedSlideToggleMenu from '../useFixedSlideToggleMenu';

describe('custom hooks : useFixedSlideToggleMenu called', () => {
  it('update state from false to true when fixed toggle menu called', async () => {
    const { result } = renderHook(() => useFixedSlideToggleMenu('left', 0.5, false));
    render(<div {...result.current[0]} />);

    expect(result.current[1]).toBe(false);
    act(() => result.current[2]());
    expect(result.current[1]).toBe(true);
    act(() => result.current[3]());
    await waitFor(() => expect(result.current[1]).toBe(false));
    expect(result.current[1]).toBe(false);
  });
});
