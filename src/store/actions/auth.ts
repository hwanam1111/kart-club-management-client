import { createStandardAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

import {
  VeifyNicknameTypes,
  SignUpTypes,
  LoginTypes,
  LogoutTypes,
} from '../types/auth';

export const RESET_VERIFY_NICKNAME = 'auth/RESET_VERIFY_NICKNAME';
export const VERIFY_NICKNAME = 'auth/VERIFY_NICKNAME';
export const VERIFY_NICKNAME_SUCCESS = 'auth/VERIFY_NICKNAME_SUCCESS';
export const VERIFY_NICKNAME_ERROR = 'auth/VERIFY_NICKNAME_ERROR';
export const resetVerifyNickname = createStandardAction(RESET_VERIFY_NICKNAME)();
export const verifyNicknameAsync = createAsyncAction(
  VERIFY_NICKNAME,
  VERIFY_NICKNAME_SUCCESS,
  VERIFY_NICKNAME_ERROR,
)<string, VeifyNicknameTypes, AxiosError>();

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

export const RESET_LOGOUT = 'auth/RESET_LOGOUT';
export const LOGOUT = 'auth/LOGOUT';
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'auth/LOGOUT_ERROR';
export const resetLogout = createStandardAction(RESET_LOGOUT)();
export const logoutAsync = createAsyncAction(
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
)<undefined, LogoutTypes, AxiosError>();
