import { produce } from 'immer';
import { createReducer } from 'typesafe-actions';

import { InitialStateUserDto, UserAction } from '../types/user';
import { getMyInformationAsync } from '../actions/user';

const initialState: InitialStateUserDto = {
  myInformation: {
    loading: false,
    data: null,
    error: null,
  },
};

const userReducer = createReducer<InitialStateUserDto, UserAction>(initialState)
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
