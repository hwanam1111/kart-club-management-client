import { produce } from 'immer';
import { createReducer } from 'typesafe-actions';

import { InitialStateUserDto, UserAction } from '../types/user';
import {
  resetEmailDuplicateCheck, emailDuplicateCheckAsync,
  getMyInformationAsync,
} from '../actions/user';

const initialState: InitialStateUserDto = {
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
