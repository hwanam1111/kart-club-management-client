import { ActionType } from 'typesafe-actions';

import * as clubActions from '../actions/club';

export type ClubAction = ActionType<typeof clubActions>;

export interface DefaultAsyncTypes {
  loading: boolean,
  error: any | null
}

export interface ClubMasterVerifyImageUploadTypes extends DefaultAsyncTypes {
  data: string | null;
}

export interface ClubRegisterTypes extends DefaultAsyncTypes {
  data: string | null;
}

export interface InitialStateClubDto {
  clubMasterVerifyImageUpload: ClubMasterVerifyImageUploadTypes,
  clubRegister: ClubRegisterTypes,
}
