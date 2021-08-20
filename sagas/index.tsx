import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

axios.defaults.baseURL = process.env.BACKEND_SERVER_URL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
  ]);
}
