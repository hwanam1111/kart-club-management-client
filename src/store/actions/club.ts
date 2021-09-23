import { createStandardAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

import { ClubMasterVerifyImageUploadTypes, ClubRegisterTypes } from '../types/club';

export const RESET_CLUB_MASTER_VERIFY_IMAGE_UPLOAD = 'club/RESET_CLUB_MASTER_VERIFY_IMAGE_UPLOAD';
export const CLUB_MASTER_VERIFY_IMAGE_UPLOAD = 'club/CLUB_MASTER_VERIFY_IMAGE_UPLOAD';
export const CLUB_MASTER_VERIFY_IMAGE_UPLOAD_SUCCESS = 'club/CLUB_MASTER_VERIFY_IMAGE_UPLOAD_SUCCESS';
export const CLUB_MASTER_VERIFY_IMAGE_UPLOAD_ERROR = 'club/CLUB_MASTER_VERIFY_IMAGE_UPLOAD_ERROR';
export const resetClubMasterVerifyImageUpload = createStandardAction(RESET_CLUB_MASTER_VERIFY_IMAGE_UPLOAD)();
export const clubMasterVerifyImageUploadAsync = createAsyncAction(
  CLUB_MASTER_VERIFY_IMAGE_UPLOAD,
  CLUB_MASTER_VERIFY_IMAGE_UPLOAD_SUCCESS,
  CLUB_MASTER_VERIFY_IMAGE_UPLOAD_ERROR,
)<any, ClubMasterVerifyImageUploadTypes, AxiosError>();

export const RESET_CLUB_REGISTER = 'club/RESET_CLUB_REGISTER';
export const CLUB_REGISTER = 'club/CLUB_REGISTER';
export const CLUB_REGISTER_SUCCESS = 'club/CLUB_REGISTER_SUCCESS';
export const CLUB_REGISTER_ERROR = 'club/CLUB_REGISTER_ERROR';
export const resetClubRegister = createStandardAction(RESET_CLUB_REGISTER)();
export const clubRegisterAsync = createAsyncAction(
  CLUB_REGISTER,
  CLUB_REGISTER_SUCCESS,
  CLUB_REGISTER_ERROR,
)<{
  clubName: string,
  verifyMasterImageUrl: string
}, ClubRegisterTypes, AxiosError>();
