import { produce } from 'immer';
import { createReducer } from 'typesafe-actions';

import { InitialStateClubDto, ClubAction } from '../types/club';
import {
  resetClubMasterVerifyImageUpload, clubMasterVerifyImageUploadAsync,
  resetClubRegister, clubRegisterAsync,
} from '../actions/club';

export const initialState: InitialStateClubDto = {
  clubMasterVerifyImageUpload: {
    loading: false,
    data: null,
    error: null,
  },
  clubRegister: {
    loading: false,
    data: null,
    error: null,
  },
};

const clubReducer = createReducer<InitialStateClubDto, ClubAction>(initialState)
  .handleAction(resetClubMasterVerifyImageUpload, (state) => produce(state, (draft) => {
    draft.clubMasterVerifyImageUpload.loading = false;
    draft.clubMasterVerifyImageUpload.data = null;
    draft.clubMasterVerifyImageUpload.error = null;
  }))
  .handleAction(clubMasterVerifyImageUploadAsync.request, (state) => produce(state, (draft) => {
    draft.clubMasterVerifyImageUpload.loading = true;
    draft.clubMasterVerifyImageUpload.data = null;
    draft.clubMasterVerifyImageUpload.error = null;
  }))
  .handleAction(clubMasterVerifyImageUploadAsync.success, (state, action) => produce(state, (draft) => {
    draft.clubMasterVerifyImageUpload.loading = false;
    draft.clubMasterVerifyImageUpload.data = action.payload.data;
    draft.clubMasterVerifyImageUpload.error = null;
  }))
  .handleAction(clubMasterVerifyImageUploadAsync.failure, (state, action) => produce(state, (draft) => {
    draft.clubMasterVerifyImageUpload.loading = false;
    draft.clubMasterVerifyImageUpload.data = null;
    draft.clubMasterVerifyImageUpload.error = action.payload;
  }))
  .handleAction(resetClubRegister, (state) => produce(state, (draft) => {
    draft.clubRegister.loading = false;
    draft.clubRegister.data = null;
    draft.clubRegister.error = null;
  }))
  .handleAction(clubRegisterAsync.request, (state) => produce(state, (draft) => {
    draft.clubRegister.loading = true;
    draft.clubRegister.data = null;
    draft.clubRegister.error = null;
  }))
  .handleAction(clubRegisterAsync.success, (state, action) => produce(state, (draft) => {
    draft.clubRegister.loading = false;
    draft.clubRegister.data = action.payload.data;
    draft.clubRegister.error = null;
  }))
  .handleAction(clubRegisterAsync.failure, (state, action) => produce(state, (draft) => {
    draft.clubRegister.loading = false;
    draft.clubRegister.data = null;
    draft.clubRegister.error = action.payload;
  }));

export default clubReducer;
