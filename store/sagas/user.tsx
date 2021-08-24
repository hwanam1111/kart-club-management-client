import { all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { MyInformationTypes } from '../types/user';
import { getMyInformationAsync, GET_MY_INFORMATION } from '../actions/user';
import createAsyncSaga from '../../lib/createAsyncSaga';

async function fetchMyInformationAPI() {
  const response = await axios.post<MyInformationTypes>('/users/my');
  return response.data;
}
const fetchMyInformation = createAsyncSaga(getMyInformationAsync, fetchMyInformationAPI);

export default function* userSaga() {
  yield all([
    takeLatest(GET_MY_INFORMATION, fetchMyInformation),
  ]);
}
