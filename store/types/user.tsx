import { ActionType } from 'typesafe-actions';

import * as userActions from '../actions/user';

export type UserAction = ActionType<typeof userActions>;

export interface DefaultAsyncTypes {
  loading: boolean,
  error: any | null
}

export interface MyInformationTypes extends DefaultAsyncTypes {
  data: {
    id: number,
    email: string,
    nickname: string,
    rating: string,
    profileImageUri: string,
    clubId?: number
  } | null
}

export interface InitialStateUserDto {
  myInformation: MyInformationTypes,
}
