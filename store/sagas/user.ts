import { all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import createAsyncSaga from '../../lib/createAsyncSaga';
import { EmailDuplicateCheckTypes, VeifyNicknameTypes, SignUpTypes, LoginTypes, MyInformationTypes } from '../types/user';
import {
  emailDuplicateCheckAsync, EMAIL_DUPLICATE_CHECK,
  verifyNicknameAsync, VERIFY_NICKNAME,
  signUpAsync, SIGN_UP,
  loginAsync, LOGIN,
  getMyInformationAsync, GET_MY_INFORMATION,
} from '../actions/user';

async function emailDuplicateCheckAPI(email: string) {
  const response = await axios.get<EmailDuplicateCheckTypes>(`/v1/users/email/duplicate/${email}`);
  return response.data;
}
const emailDuplicateCheck = createAsyncSaga(emailDuplicateCheckAsync, emailDuplicateCheckAPI);

async function verifyNicknameAPI(nickname: string) {
  const response = await axios.get<VeifyNicknameTypes>(`/v1/users/verify/nickname/${nickname}`);
  return response.data;
}
const verifyNickname = createAsyncSaga(verifyNicknameAsync, verifyNicknameAPI);

async function signUpAPI(data: {
  email: string,
  password: string,
  nickname: string,
  accessId: string,
}) {
  const response = await axios.post<SignUpTypes>('/v1/users/sign-up', data);
  return response.data;
}
const signUp = createAsyncSaga(signUpAsync, signUpAPI);

async function loginAPI(data: {
  email: string,
  password: string,
}) {
  const response = await axios.post<LoginTypes>('/v1/users/login', data);
  return response.data;
}
const login = createAsyncSaga(loginAsync, loginAPI);

async function fetchMyInformationAPI() {
  const response = await axios.get<MyInformationTypes>('/v1/users/my');
  return response.data;
}
const fetchMyInformation = createAsyncSaga(getMyInformationAsync, fetchMyInformationAPI);

export default function* userSaga() {
  yield all([
    takeLatest(EMAIL_DUPLICATE_CHECK, emailDuplicateCheck),
    takeLatest(VERIFY_NICKNAME, verifyNickname),
    takeLatest(SIGN_UP, signUp),
    takeLatest(LOGIN, login),
    takeLatest(GET_MY_INFORMATION, fetchMyInformation),
  ]);
}
