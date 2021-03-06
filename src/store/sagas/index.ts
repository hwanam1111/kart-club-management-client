import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import authSaga from './auth';
import userSaga from './user';
import clubSaga from './club';

axios.defaults.baseURL = process.env.BACKEND_SERVER_URL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(userSaga),
    fork(clubSaga),
  ]);
}
