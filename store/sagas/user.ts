import { all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import createAsyncSaga from '../../lib/createAsyncSaga';
import { EmailDuplicateCheckTypes, MyInformationTypes, FindEmailTypes, FindPasswordTypes } from '../types/user';
import {
  emailDuplicateCheckAsync, EMAIL_DUPLICATE_CHECK,
  getMyInformationAsync, GET_MY_INFORMATION,
  findEmailAsync, FIND_EMAIL,
  findPasswordAsync, FIND_PASSWORD,
} from '../actions/user';

async function emailDuplicateCheckAPI(email: string) {
  const response = await axios.get<EmailDuplicateCheckTypes>(`/v1/users/email/duplicate/${email}`);
  return response.data;
}
const emailDuplicateCheck = createAsyncSaga(emailDuplicateCheckAsync, emailDuplicateCheckAPI);

async function fetchMyInformationAPI() {
  const response = await axios.get<MyInformationTypes>('/v1/users/my');
  return response.data;
}
const fetchMyInformation = createAsyncSaga(getMyInformationAsync, fetchMyInformationAPI);

async function findEmailAPI(accessId: string) {
  const response = await axios.get<FindEmailTypes>(`/v1/users/find/email?accessId=${accessId}`);
  return response.data;
}
const findEmail = createAsyncSaga(findEmailAsync, findEmailAPI);

async function findPasswordAPI(data: { email: string, accessId: string }) {
  const response = await axios.get<FindPasswordTypes>(`/v1/users/find/password?email=${data.email}&accessId=${data.accessId}`);
  return response.data;
}
const findPassword = createAsyncSaga(findPasswordAsync, findPasswordAPI);

export default function* userSaga() {
  yield all([
    takeLatest(EMAIL_DUPLICATE_CHECK, emailDuplicateCheck),
    takeLatest(GET_MY_INFORMATION, fetchMyInformation),
    takeLatest(FIND_EMAIL, findEmail),
    takeLatest(FIND_PASSWORD, findPassword),
  ]);
}
