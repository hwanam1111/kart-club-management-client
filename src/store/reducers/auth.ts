import { produce } from 'immer';
import { createReducer } from 'typesafe-actions';

import { InitialStateAuthDto, AuthAction } from '../types/auth';
import {
  resetVerifyNickname, verifyNicknameAsync,
  resetSignUp, signUpAsync,
  resetLogin, loginAsync,
  resetLogout, logoutAsync,
} from '../actions/auth';

const initialState: InitialStateAuthDto = {
  verifyNickname: {
    loading: false,
    data: null,
    error: null,
  },
  signUp: {
    loading: false,
    data: null,
    error: null,
  },
  login: {
    loading: false,
    data: null,
    error: null,
  },
  logout: {
    loading: false,
    data: null,
    error: null,
  },
};

const authReducer = createReducer<InitialStateAuthDto, AuthAction>(initialState)
  .handleAction(resetVerifyNickname, (state) => produce(state, (draft) => {
    draft.verifyNickname.loading = false;
    draft.verifyNickname.data = null;
    draft.verifyNickname.error = null;
  }))
  .handleAction(verifyNicknameAsync.request, (state) => produce(state, (draft) => {
    draft.verifyNickname.loading = true;
    draft.verifyNickname.data = null;
    draft.verifyNickname.error = null;
  }))
  .handleAction(verifyNicknameAsync.success, (state, action) => produce(state, (draft) => {
    draft.verifyNickname.loading = false;
    draft.verifyNickname.data = action.payload.data;
    draft.verifyNickname.error = null;
  }))
  .handleAction(verifyNicknameAsync.failure, (state, action) => produce(state, (draft) => {
    draft.verifyNickname.loading = false;
    draft.verifyNickname.data = null;
    draft.verifyNickname.error = action.payload;
  }))
  .handleAction(resetSignUp, (state) => produce(state, (draft) => {
    draft.signUp.loading = false;
    draft.signUp.data = null;
    draft.signUp.error = null;
  }))
  .handleAction(signUpAsync.request, (state) => produce(state, (draft) => {
    draft.signUp.loading = true;
    draft.signUp.data = null;
    draft.signUp.error = null;
  }))
  .handleAction(signUpAsync.success, (state, action) => produce(state, (draft) => {
    draft.signUp.loading = false;
    draft.signUp.data = action.payload.data;
    draft.signUp.error = null;
  }))
  .handleAction(signUpAsync.failure, (state, action) => produce(state, (draft) => {
    draft.signUp.loading = false;
    draft.signUp.data = null;
    draft.signUp.error = action.payload;
  }))
  .handleAction(resetLogin, (state) => produce(state, (draft) => {
    draft.login.loading = false;
    draft.login.data = null;
    draft.login.error = null;
  }))
  .handleAction(loginAsync.request, (state) => produce(state, (draft) => {
    draft.login.loading = true;
    draft.login.data = null;
    draft.login.error = null;
  }))
  .handleAction(loginAsync.success, (state, action) => produce(state, (draft) => {
    draft.login.loading = false;
    draft.login.data = action.payload.data;
    draft.login.error = null;
  }))
  .handleAction(loginAsync.failure, (state, action) => produce(state, (draft) => {
    draft.login.loading = false;
    draft.login.data = null;
    draft.login.error = action.payload;
  }))
  .handleAction(resetLogout, (state) => produce(state, (draft) => {
    draft.logout.loading = false;
    draft.logout.data = null;
    draft.logout.error = null;
  }))
  .handleAction(logoutAsync.request, (state) => produce(state, (draft) => {
    draft.logout.loading = true;
    draft.logout.data = null;
    draft.logout.error = null;
  }))
  .handleAction(logoutAsync.success, (state, action) => produce(state, (draft) => {
    draft.logout.loading = false;
    draft.logout.data = action.payload.data;
    draft.logout.error = null;
  }))
  .handleAction(logoutAsync.failure, (state, action) => produce(state, (draft) => {
    draft.logout.loading = false;
    draft.logout.data = null;
    draft.logout.error = action.payload;
  }));

export default authReducer;
