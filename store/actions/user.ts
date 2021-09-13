import { createStandardAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

import {
  EmailDuplicateCheckTypes,
  MyInformationTypes,
  FindEmailTypes,
  FindPasswordTypes,
} from '../types/user';

export const CHANGE_CURRENT_MODAL = 'user/CHANGE_CURRENT_MODAL';
export const changeCurrentModal = createStandardAction(CHANGE_CURRENT_MODAL)<string>();

export const RESET_EMAIL_DUPLICATE_CHECK = 'user/RESET_EMAIL_DUPLICATE_CHECK';
export const EMAIL_DUPLICATE_CHECK = 'user/EMAIL_DUPLICATE_CHECK';
export const EMAIL_DUPLICATE_CHECK_SUCCESS = 'user/EMAIL_DUPLICATE_CHECK_SUCCESS';
export const EMAIL_DUPLICATE_CHECK_ERROR = 'user/EMAIL_DUPLICATE_CHECK_ERROR';
export const resetEmailDuplicateCheck = createStandardAction(RESET_EMAIL_DUPLICATE_CHECK)();
export const emailDuplicateCheckAsync = createAsyncAction(
  EMAIL_DUPLICATE_CHECK,
  EMAIL_DUPLICATE_CHECK_SUCCESS,
  EMAIL_DUPLICATE_CHECK_ERROR,
)<string, EmailDuplicateCheckTypes, AxiosError>();

export const GET_MY_INFORMATION = 'user/GET_MY_INFORMATION';
export const GET_MY_INFORMATION_SUCCESS = 'user/GET_MY_INFORMATION_SUCCESS';
export const GET_MY_INFORMATION_ERROR = 'user/GET_MY_INFORMATION_ERROR';
export const getMyInformationAsync = createAsyncAction(
  GET_MY_INFORMATION,
  GET_MY_INFORMATION_SUCCESS,
  GET_MY_INFORMATION_ERROR,
)<undefined, MyInformationTypes, AxiosError>();

export const RESET_FIND_EMAIL = 'user/RESET_FIND_EMAIL';
export const FIND_EMAIL = 'user/FIND_EMAIL';
export const FIND_EMAIL_SUCCESS = 'user/FIND_EMAIL_SUCCESS';
export const FIND_EMAIL_ERROR = 'user/FIND_EMAIL_ERROR';
export const resetFindEmail = createStandardAction(RESET_FIND_EMAIL)();
export const findEmailAsync = createAsyncAction(
  FIND_EMAIL,
  FIND_EMAIL_SUCCESS,
  FIND_EMAIL_ERROR,
)<string, FindEmailTypes, AxiosError>();

export const RESET_FIND_PASSWORD = 'user/RESET_FIND_PASSWORD';
export const FIND_PASSWORD = 'user/FIND_PASSWORD';
export const FIND_PASSWORD_SUCCESS = 'user/FIND_PASSWORD_SUCCESS';
export const FIND_PASSWORD_ERROR = 'user/FIND_PASSWORD_ERROR';
export const resetFindPassword = createStandardAction(RESET_FIND_PASSWORD)();
export const findPasswordAsync = createAsyncAction(
  FIND_PASSWORD,
  FIND_PASSWORD_SUCCESS,
  FIND_PASSWORD_ERROR,
)<{
  email: string,
  accessId: string
}, FindPasswordTypes, AxiosError>();
