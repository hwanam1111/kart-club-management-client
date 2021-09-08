import { createStandardAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

import {
  SignUpTypes,
  LoginTypes,
} from '../types/auth';

export const RESET_SIGN_UP = 'auth/RESET_SIGN_UP';
export const SIGN_UP = 'auth/SIGN_UP';
export const SIGN_UP_SUCCESS = 'auth/SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'auth/SIGN_UP_ERROR';
export const resetSignUp = createStandardAction(RESET_SIGN_UP)();
export const signUpAsync = createAsyncAction(
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
)<{
  email: string,
  password: string,
  nickname: string,
  accessId: string
}, SignUpTypes, AxiosError>();

export const RESET_LOGIN = 'auth/RESET_LOGIN';
export const LOGIN = 'auth/LOGIN';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'auth/LOGIN_ERROR';
export const resetLogin = createStandardAction(RESET_LOGIN)();
export const loginAsync = createAsyncAction(
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
)<{
  email: string,
  password: string
}, LoginTypes, AxiosError>();
