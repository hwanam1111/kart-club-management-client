import { produce } from 'immer';
import { createReducer } from 'typesafe-actions';

import { InitialStateUserDto, UserAction } from '../types/user';
import {
  resetEmailDuplicateCheck, emailDuplicateCheckAsync,
  resetVerifyNickname, verifyNicknameAsync,
  resetSignUp, signUpAsync,
  getMyInformationAsync,
} from '../actions/user';

const initialState: InitialStateUserDto = {
  emailDuplicateCheck: {
    loading: false,
    data: null,
    error: null,
  },
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
  myInformation: {
    loading: false,
    data: null,
    error: null,
  },
};

const userReducer = createReducer<InitialStateUserDto, UserAction>(initialState)
  .handleAction(resetEmailDuplicateCheck, (state) => produce(state, (draft) => {
    draft.emailDuplicateCheck.loading = false;
    draft.emailDuplicateCheck.data = null;
    draft.emailDuplicateCheck.error = null;
  }))
  .handleAction(emailDuplicateCheckAsync.request, (state) => produce(state, (draft) => {
    draft.emailDuplicateCheck.loading = true;
    draft.emailDuplicateCheck.data = null;
    draft.emailDuplicateCheck.error = null;
  }))
  .handleAction(emailDuplicateCheckAsync.success, (state, action) => produce(state, (draft) => {
    draft.emailDuplicateCheck.loading = false;
    draft.emailDuplicateCheck.data = action.payload.data;
    draft.emailDuplicateCheck.error = null;
  }))
  .handleAction(emailDuplicateCheckAsync.failure, (state, action) => produce(state, (draft) => {
    draft.emailDuplicateCheck.loading = false;
    draft.emailDuplicateCheck.data = null;
    draft.emailDuplicateCheck.error = action.payload;
  }))
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
  .handleAction(getMyInformationAsync.request, (state) => produce(state, (draft) => {
    draft.myInformation.loading = true;
    draft.myInformation.data = null;
    draft.myInformation.error = null;
  }))
  .handleAction(getMyInformationAsync.success, (state, action) => produce(state, (draft) => {
    draft.myInformation.loading = false;
    draft.myInformation.data = action.payload.data;
    draft.myInformation.error = null;
  }))
  .handleAction(getMyInformationAsync.failure, (state, action) => produce(state, (draft) => {
    draft.myInformation.loading = false;
    draft.myInformation.data = null;
    draft.myInformation.error = action.payload;
  }));

export default userReducer;
