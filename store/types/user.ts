import { ActionType } from 'typesafe-actions';

import * as userActions from '../actions/user';

export type UserAction = ActionType<typeof userActions>;

export interface DefaultAsyncTypes {
  loading: boolean,
  error: any | null
}

export interface EmailDuplicateCheckTypes extends DefaultAsyncTypes {
  data: string | null
}

export interface VeifyNicknameTypes extends DefaultAsyncTypes {
  data: {
    accessId: string,
    name: string,
    level: number
  } | string | null
}

export interface MyInformationTypes extends DefaultAsyncTypes {
  data: {
    id: number,
    email: string,
    nickname: string,
    rating: string,
    profileImageUri: string,
    clubId?: number
  } | null | string
}

export interface InitialStateUserDto {
  emailDuplicateCheck: EmailDuplicateCheckTypes,
  verifyNickname: VeifyNicknameTypes,
  myInformation: MyInformationTypes,
}
