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
  .handleAction(getMyInformationAsync.success, (state) => produce(state, (draft) => {
    draft.myInformation.loading = false;
    draft.myInformation.data = {
      id: 1,
      email: 'email',
      nickname: 'nickname',
      rating: 'rating',
      profileImageUri: 'profile image',
      clubId: 1,
    };
    draft.myInformation.error = null;
  }))
  .handleAction(getMyInformationAsync.failure, (state, action) => produce(state, (draft) => {
    draft.myInformation.loading = false;
    draft.myInformation.data = null;
    draft.myInformation.error = action.payload;
  }));

export default userReducer;
