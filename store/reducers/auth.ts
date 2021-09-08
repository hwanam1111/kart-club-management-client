import { produce } from 'immer';
import { createReducer } from 'typesafe-actions';

import { InitialStateAuthDto, AuthAction } from '../types/auth';
import {
  resetSignUp, signUpAsync,
  resetLogin, loginAsync,
} from '../actions/auth';

const initialState: InitialStateAuthDto = {
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
};

const authReducer = createReducer<InitialStateAuthDto, AuthAction>(initialState)
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
  }));

export default authReducer;
