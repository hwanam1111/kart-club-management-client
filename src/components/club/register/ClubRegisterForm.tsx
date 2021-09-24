import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import styled from 'styled-components';
import Swal from 'sweetalert2';

import useCheckBlankInput from '../../../hooks/input/useCheckBlankInput';
import useGetMyInformation from '../../../hooks/useGetMyInformation';
import { clubRegisterAsync, resetClubMasterVerifyImageUpload, resetClubRegister } from '../../../store/actions/club';
import { RootState } from '../../../store/reducers';
import FormSubmitButton from '../../common/FormSubmitButton';
import LabelInput from '../../common/LabelInput';
import ClubRegisterFormVerifyMaster from './ClubRegisterFormVerifyMaster';
import Loading from '../../common/Loading';
import { getMyInformationAsync } from '../../../store/actions/user';

const ClubRegisterWrapper = styled.section`
  background-color: #fff;
  border-radius: 12px;
  padding: 50px 30px;
`;

const ClubRegisterFormBlock = styled.form`
  width: 700px;
  margin: 0 auto;
`;

function ClubRegisterForm() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state: RootState) => state.club.clubRegister);
  const { myInformation } = useGetMyInformation();

  const [clubName, onChangeClubName, clubNameVerifyMessage] = useCheckBlankInput('');
  const [imageFile, setImageFile] = useState(null);

  const onSubmitForm = useCallback((evt: React.FormEvent): any => {
    evt.preventDefault();

    if (!clubName) {
      return Swal.fire({
        icon: 'warning',
        text: '클럽 명을 입력해주세요.',
      });
    }

    if (!imageFile) {
      return Swal.fire({
        icon: 'warning',
        text: '마스터 검증을 위한 이미지를 업로드해주세요.',
      });
    }

    return Swal.fire({
      html: `현재 [${clubName}]클럽의 마스터분이 맞으신가요?<br/>만약 본인이 클럽 마스터가 아닌게 확인 될 시 클럽 소유권이 박탈 될 수 있습니다.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '클럽 등록 신청하기',
      cancelButtonText: '취소하기',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clubRegisterAsync.request({
          clubName,
          verifyMasterImageUrl: imageFile,
        }));
      }
    });
  }, [clubName, imageFile]);

  useEffect(() => {
    if (data) {
      dispatch(resetClubRegister());
      dispatch(getMyInformationAsync.request());

      Swal.fire({
        html: '클럽 등록 신청이 완료되었습니다.<br/><br/>클럽 검증이 완료되는대로 승인이 완료될 예정입니다.',
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(resetClubMasterVerifyImageUpload());
          Router.push('/');
        }
      });
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      if (error.response.data.data) {
        Swal.fire({
          icon: 'error',
          text: error.response.data.message,
        });
      } else {
        Swal.fire({
          icon: 'error',
          text: '서버에러가 발생하였습니다.\n잠시후 다시 이용해주세요.',
        });
      }
      dispatch(resetClubRegister());
    }
  }, [error]);

  return (
    <>
      <ClubRegisterWrapper onSubmit={onSubmitForm}>
        <ClubRegisterFormBlock>
          <LabelInput
            label="내 현재 닉네임"
            type="text"
            placeholder="클럽 명을 입력해주세요."
            value={myInformation.currentNickname}
            verifyMessage="complete"
            maxLength={20}
            readOnly
          />
          <LabelInput
            label="클럽 명"
            type="text"
            placeholder="클럽 명을 입력해주세요."
            value={clubName}
            onChange={onChangeClubName}
            verifyMessage={clubNameVerifyMessage}
            maxLength={20}
          />
          <ClubRegisterFormVerifyMaster setImageFile={setImageFile} />
          <FormSubmitButton
            buttonText="클럽 등록 신청하기"
            margin="50px auto 0 auto"
            disabled={!clubName || !imageFile}
          />
        </ClubRegisterFormBlock>
      </ClubRegisterWrapper>
      {loading && <Loading message="" />}
    </>
  );
}

export default ClubRegisterForm;
