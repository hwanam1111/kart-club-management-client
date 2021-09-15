import { ActionType } from 'typesafe-actions';

import * as authActions from '../actions/auth';

export type AuthAction = ActionType<typeof authActions>;

export interface DefaultAsyncTypes {
  loading: boolean,
  error: any | null
}

export interface VeifyNicknameTypes extends DefaultAsyncTypes {
  data: {
    accessId: string,
    name: string,
    level: number
  } | string | null
}

export interface SignUpTypes extends DefaultAsyncTypes {
  data: string | null
}

export interface LoginTypes extends DefaultAsyncTypes {
  data: string | null
}

export interface LogoutTypes extends DefaultAsyncTypes {
  data: string | null
}

export interface InitialStateAuthDto {
  verifyNickname: VeifyNicknameTypes,
  signUp: SignUpTypes,
  login: LoginTypes,
  logout: LogoutTypes,
}
