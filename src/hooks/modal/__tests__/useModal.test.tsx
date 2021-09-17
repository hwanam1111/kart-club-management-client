import React from 'react';
import * as reactRedux from 'react-redux';
import { render, act, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { changeCurrentModal } from '../../../store/actions/user';
import user, { initialState } from '../../../store/reducers/user';
import useModalToggle from '../useModalToggle';
import useModalChange from '../useModalChange';

const useRefMock = jest.spyOn(React, 'useRef');
const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

beforeEach(() => {
  useRefMock.mockClear();
  useDispatchMock.mockClear();
});

useRefMock.mockImplementation(() => ({
  current: {
    style: {
      transition: 'none',
      transform: 'unset',
    },
  },
}));
useDispatchMock.mockReturnValue(jest.fn());

describe('custom hooks : useModalChange', () => {
  it('user modal opend', () => {
    const testLoginModalResult = renderHook(() => useModalToggle(0.1, false)).result;

    render(<div {...testLoginModalResult.current[0]} />);

    expect(testLoginModalResult.current[1]).toBe(false);
    act(() => testLoginModalResult.current[2]());
    expect(testLoginModalResult.current[1]).toBe(true);

    expect(changeCurrentModal('login')).toEqual({
      type: 'user/CHANGE_CURRENT_MODAL',
      payload: 'login',
      meta: undefined,
    });
    expect(user(initialState, changeCurrentModal('login'))).toEqual({
      ...initialState,
      currentModal: 'login',
    });
  });

  it('user modal closed', async () => {
    const testLoginModalResult = renderHook(() => useModalToggle(0.1, true)).result;

    render(<div {...testLoginModalResult.current[0]} />);

    expect(testLoginModalResult.current[1]).toBe(true);
    act(() => testLoginModalResult.current[3]());
    await waitFor(() => expect(testLoginModalResult.current[1]).toBe(false));
    expect(testLoginModalResult.current[1]).toBe(false);

    expect(changeCurrentModal(null)).toEqual({
      type: 'user/CHANGE_CURRENT_MODAL',
      payload: null,
      meta: undefined,
    });
    expect(user(initialState, changeCurrentModal(null))).toEqual({
      ...initialState,
      currentModal: null,
    });
  });

  it('modal changed', async () => {
    const testLoginModalResult = renderHook(() => useModalToggle(0.1, true)).result;
    const testSignUpModalResult = renderHook(() => useModalToggle(0.1, false)).result;
    const testLoginToSignUpModal = renderHook(() => useModalChange('signUp', testLoginModalResult.current[3], 0.1)).result;

    render(<div {...testLoginModalResult.current[0]} />);
    render(<div {...testSignUpModalResult.current[0]} />);

    expect(testLoginModalResult.current[1]).toBe(true);
    expect(testSignUpModalResult.current[1]).toBe(false);
    act(() => testLoginToSignUpModal.current());
    await waitFor(() => expect(testLoginModalResult.current[1]).toBe(false));
    expect(testLoginModalResult.current[1]).toBe(false);

    expect(changeCurrentModal('signUp')).toEqual({
      type: 'user/CHANGE_CURRENT_MODAL',
      payload: 'signUp',
      meta: undefined,
    });
    expect(user(initialState, changeCurrentModal('signUp'))).toEqual({
      ...initialState,
      currentModal: 'signUp',
    });
  });
});
