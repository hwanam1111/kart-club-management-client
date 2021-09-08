import { ActionType } from 'typesafe-actions';

import * as authActions from '../actions/auth';

export type AuthAction = ActionType<typeof authActions>;

export interface DefaultAsyncTypes {
  loading: boolean,
  error: any | null
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
  signUp: SignUpTypes,
  login: LoginTypes,
  logout: LogoutTypes,
}
