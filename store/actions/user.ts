import { createStandardAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

import {
  EmailDuplicateCheckTypes,
  VeifyNicknameTypes,
  MyInformationTypes,
} from '../types/user';

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

export const RESET_VERIFY_NICKNAME = 'user/RESET_VERIFY_NICKNAME';
export const VERIFY_NICKNAME = 'user/VERIFY_NICKNAME';
export const VERIFY_NICKNAME_SUCCESS = 'user/VERIFY_NICKNAME_SUCCESS';
export const VERIFY_NICKNAME_ERROR = 'user/VERIFY_NICKNAME_ERROR';
export const resetVerifyNickname = createStandardAction(RESET_VERIFY_NICKNAME)();
export const verifyNicknameAsync = createAsyncAction(
  VERIFY_NICKNAME,
  VERIFY_NICKNAME_SUCCESS,
  VERIFY_NICKNAME_ERROR,
)<string, VeifyNicknameTypes, AxiosError>();

export const GET_MY_INFORMATION = 'user/GET_MY_INFORMATION';
export const GET_MY_INFORMATION_SUCCESS = 'user/GET_MY_INFORMATION_SUCCESS';
export const GET_MY_INFORMATION_ERROR = 'user/GET_MY_INFORMATION_ERROR';
export const getMyInformationAsync = createAsyncAction(
  GET_MY_INFORMATION,
  GET_MY_INFORMATION_SUCCESS,
  GET_MY_INFORMATION_ERROR,
)<undefined, MyInformationTypes, AxiosError>();
