import { all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import createAsyncSaga from '../../lib/createAsyncSaga';
import { ClubMasterVerifyImageUploadTypes, ClubRegisterTypes } from '../types/club';
import {
  clubMasterVerifyImageUploadAsync, CLUB_MASTER_VERIFY_IMAGE_UPLOAD,
  clubRegisterAsync, CLUB_REGISTER,
} from '../actions/club';

async function clubMasterVerifyImageUploadAPI(data: any) {
  const response = await axios.post<ClubMasterVerifyImageUploadTypes>('/v1/club/verify/master/image', data);
  return response.data;
}
const clubMasterVerifyImageUpload = createAsyncSaga(clubMasterVerifyImageUploadAsync, clubMasterVerifyImageUploadAPI);

async function clubRegisterAPI(data: { clubName: string, verifyMasterImageUrl: string }) {
  const response = await axios.post<ClubRegisterTypes>('/v1/club/register', data);
  return response.data;
}
const clubRegister = createAsyncSaga(clubRegisterAsync, clubRegisterAPI);

export default function* clubSaga() {
  yield all([
    takeLatest(CLUB_MASTER_VERIFY_IMAGE_UPLOAD, clubMasterVerifyImageUpload),
    takeLatest(CLUB_REGISTER, clubRegister),
  ]);
}
