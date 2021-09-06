import { all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import createAsyncSaga from '../../lib/createAsyncSaga';
import { EmailDuplicateCheckTypes, MyInformationTypes } from '../types/user';
import {
  emailDuplicateCheckAsync, EMAIL_DUPLICATE_CHECK,
  getMyInformationAsync, GET_MY_INFORMATION,
} from '../actions/user';

async function emailDuplicateCheckAPI(email: string) {
  const response = await axios.get<EmailDuplicateCheckTypes>(`/v1/users/duplicate-check/email/${email}`);
  return response.data;
}
const emailDuplicateCheck = createAsyncSaga(emailDuplicateCheckAsync, emailDuplicateCheckAPI);

async function fetchMyInformationAPI() {
  const response = await axios.get<MyInformationTypes>('/v1/users/my');
  return response.data;
}
const fetchMyInformation = createAsyncSaga(getMyInformationAsync, fetchMyInformationAPI);

export default function* userSaga() {
  yield all([
    takeLatest(EMAIL_DUPLICATE_CHECK, emailDuplicateCheck),
    takeLatest(GET_MY_INFORMATION, fetchMyInformation),
  ]);
}
