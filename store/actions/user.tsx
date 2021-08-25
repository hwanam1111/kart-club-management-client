import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

import { MyInformationTypes } from '../types/user';

export const GET_MY_INFORMATION = 'user/GET_MY_INFORMATION';
export const GET_MY_INFORMATION_SUCCESS = 'user/GET_MY_INFORMATION_SUCCESS';
export const GET_MY_INFORMATION_ERROR = 'user/GET_MY_INFORMATION_ERROR';
export const getMyInformationAsync = createAsyncAction(
  GET_MY_INFORMATION,
  GET_MY_INFORMATION_SUCCESS,
  GET_MY_INFORMATION_ERROR,
)<undefined, MyInformationTypes, AxiosError>();
