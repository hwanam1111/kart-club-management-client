import { ActionType } from 'typesafe-actions';

import * as userActions from '../actions/user';

export type UserAction = ActionType<typeof userActions>;

export interface DefaultAsyncTypes {
  loading: boolean,
  error: any | null
}

export type CurrentModalTypes = string | null;

export interface EmailDuplicateCheckTypes extends DefaultAsyncTypes {
  data: string | null
}

export interface MyInformationTypes extends DefaultAsyncTypes {
  data: {
    id: number,
    email: string,
    currentNickname: string,
    rating: string | null,
    profileImageUri: string | null,
    clubId: number | null,
  } | null | string
}

export interface FindEmailTypes extends DefaultAsyncTypes {
  data: {
    email: string
  }
}

export interface FindPasswordTypes extends DefaultAsyncTypes {
  data: string | null
}

export interface InitialStateUserDto {
  currentModal: CurrentModalTypes,
  emailDuplicateCheck: EmailDuplicateCheckTypes,
  myInformation: MyInformationTypes,
  findEmail: FindEmailTypes,
  findPassword: FindPasswordTypes,
}
