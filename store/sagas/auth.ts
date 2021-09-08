import { all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import createAsyncSaga from '../../lib/createAsyncSaga';
import { SignUpTypes, LoginTypes, LogoutTypes } from '../types/auth';
import {
  signUpAsync, SIGN_UP,
  loginAsync, LOGIN,
  logoutAsync, LOGOUT,
} from '../actions/auth';

async function signUpAPI(data: {
  email: string,
  password: string,
  nickname: string,
  accessId: string,
}) {
  const response = await axios.post<SignUpTypes>('/v1/auth/sign-up', data);
  return response.data;
}
const signUp = createAsyncSaga(signUpAsync, signUpAPI);

async function loginAPI(data: {
  email: string,
  password: string,
}) {
  const response = await axios.post<LoginTypes>('/v1/auth/login', data);
  return response.data;
}
const login = createAsyncSaga(loginAsync, loginAPI);

async function logoutAPI() {
  const response = await axios.post<LogoutTypes>('/v1/auth/logout');
  return response.data;
}
const logout = createAsyncSaga(logoutAsync, logoutAPI);

export default function* userSaga() {
  yield all([
    takeLatest(SIGN_UP, signUp),
    takeLatest(LOGIN, login),
    takeLatest(LOGOUT, logout),
  ]);
}
