import { all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import createAsyncSaga from '../../lib/createAsyncSaga';
import { EmailDuplicateCheckTypes, VeifyNicknameTypes, SignUpTypes, MyInformationTypes } from '../types/user';
import {
  emailDuplicateCheckAsync, EMAIL_DUPLICATE_CHECK,
  verifyNicknameAsync, VERIFY_NICKNAME,
  signUpAsync, SIGN_UP,
  getMyInformationAsync, GET_MY_INFORMATION,
} from '../actions/user';

async function emailDuplicateCheckAPI(email: string) {
  const response = await axios.get<EmailDuplicateCheckTypes>(`/v1/users/duplicate-check/email/${email}`);
  return response.data;
}
const emailDuplicateCheck = createAsyncSaga(emailDuplicateCheckAsync, emailDuplicateCheckAPI);

async function verifyNicknameAPI(nickname: string) {
  const response = await axios.get<VeifyNicknameTypes>(`/v1/users/verify/nickname/${nickname}`);
  return response.data;
}
const verifyNickname = createAsyncSaga(verifyNicknameAsync, verifyNicknameAPI);

async function signUpAPI(data: any) {
  const response = await axios.post<SignUpTypes>('/v1/users/sign-up', data);
  return response.data;
}
const signUp = createAsyncSaga(signUpAsync, signUpAPI);

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
    takeLatest(GET_MY_INFORMATION, fetchMyInformation),
  ]);
}