import { createReducer } from 'typesafe-actions';

import { UserStateType, UserAction } from '../types/user';
import { getMyInformationAsync } from '../actions/user';
import { asyncState, createAsyncReducer, transformToArray } from '../../lib/reducerUtils';

const initialState: UserStateType = {
  myInformation: asyncState.initial(),
};

const userReducer = createReducer<UserStateType, UserAction>(initialState)
  .handleAction(
    transformToArray(getMyInformationAsync),
    createAsyncReducer(getMyInformationAsync, 'myInformation'),
  );

export default userReducer;
