import { ActionType } from 'typesafe-actions';

import { AsyncState } from '../../lib/reducerUtils';
import * as userActions from '../actions/user';

export type UserAction = ActionType<typeof userActions>;

interface MyInformationTypes {
  id: number,
  email: string,
  nickname: string,
  rating: string,
  profileImageUri: string
  clubId?: number
}

export type UserStateType = {
  myInformation: AsyncState<MyInformationTypes, Error>;
};
