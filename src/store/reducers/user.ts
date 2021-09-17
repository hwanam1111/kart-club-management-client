import { produce } from 'immer';
import { createReducer } from 'typesafe-actions';

import { InitialStateUserDto, UserAction } from '../types/user';
import {
  changeCurrentModal,
  resetEmailDuplicateCheck, emailDuplicateCheckAsync,
  getMyInformationAsync,
  resetFindEmail, findEmailAsync,
  resetFindPassword, findPasswordAsync,
} from '../actions/user';

export const initialState: InitialStateUserDto = {
  currentModal: null,
  emailDuplicateCheck: {
    loading: false,
    data: null,
    error: null,
  },
  myInformation: {
    loading: false,
    data: null,
    error: null,
  },
  findEmail: {
    loading: false,
    data: null,
    error: null,
  },
  findPassword: {
    loading: false,
    data: null,
    error: null,
  },
};

const userReducer = createReducer<InitialStateUserDto, UserAction>(initialState)
  .handleAction(changeCurrentModal, (state, action) => produce(state, (draft) => {
    draft.currentModal = action.payload;
  }))
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
  }))
  .handleAction(resetFindEmail, (state) => produce(state, (draft) => {
    draft.findEmail.loading = false;
    draft.findEmail.data = null;
    draft.findEmail.error = null;
  }))
  .handleAction(findEmailAsync.request, (state) => produce(state, (draft) => {
    draft.findEmail.loading = true;
    draft.findEmail.data = null;
    draft.findEmail.error = null;
  }))
  .handleAction(findEmailAsync.success, (state, action) => produce(state, (draft) => {
    draft.findEmail.loading = false;
    draft.findEmail.data = action.payload.data;
    draft.findEmail.error = null;
  }))
  .handleAction(findEmailAsync.failure, (state, action) => produce(state, (draft) => {
    draft.findEmail.loading = false;
    draft.findEmail.data = null;
    draft.findEmail.error = action.payload;
  }))
  .handleAction(resetFindPassword, (state) => produce(state, (draft) => {
    draft.findPassword.loading = false;
    draft.findPassword.data = null;
    draft.findPassword.error = null;
  }))
  .handleAction(findPasswordAsync.request, (state) => produce(state, (draft) => {
    draft.findPassword.loading = true;
    draft.findPassword.data = null;
    draft.findPassword.error = null;
  }))
  .handleAction(findPasswordAsync.success, (state, action) => produce(state, (draft) => {
    draft.findPassword.loading = false;
    draft.findPassword.data = action.payload.data;
    draft.findPassword.error = null;
  }))
  .handleAction(findPasswordAsync.failure, (state, action) => produce(state, (draft) => {
    draft.findPassword.loading = false;
    draft.findPassword.data = null;
    draft.findPassword.error = action.payload;
  }));

export default userReducer;
