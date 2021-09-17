import { renderHook, act } from '@testing-library/react-hooks';
import useToggleMenu from '../useToggleMenu';

describe('custom hooks : useToggleMenu', () => {
  it('use toggle menu called', async () => {
    const { result } = renderHook(() => useToggleMenu(false));
    expect(result.current[0]).toBe(false);
    act(() => result.current[1]());
    expect(result.current[0]).toBe(true);
  });
});
