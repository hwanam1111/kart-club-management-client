import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Swal from 'sweetalert2';

import { RootState } from '../../../../store/reducers';
import ModalTemplate from '../ModalTemplate';
import LabelInput from '../../LabelInput';
import FormSubmitButton from '../../FormSubmitButton';
import useNicknameInput from '../../../../hooks/input/useNicknameInput';
import { resetVerifyNickname, verifyNicknameAsync } from '../../../../store/actions/auth';
import { findEmailAsync, resetFindEmail } from '../../../../store/actions/user';
import Loading from '../../Loading';

const FindEmailForm = styled.form`
  margin-top: 50px;
  width: 600px;
`;

interface FindEmailModalProps {
  modalAnimation: {
    ref: any,
  },
  onCloseModal: () => void,
}

function FindEmailModal({ modalAnimation, onCloseModal }: FindEmailModalProps) {
  const dispatch = useDispatch();
  const { verifyNickname } = useSelector((state: RootState) => state.auth);
  const { findEmail } = useSelector((state: RootState) => state.user);

  const [nickname, onChangeNickname, nicknameVerifyMessage] = useNicknameInput('');

  const onSubmitFindEmailForm = useCallback((evt: React.FormEvent): any => {
    evt.preventDefault();

    if (nickname === '') {
      return Swal.fire({
        icon: 'error',
        text: '닉네임을 입력해주세요.',
      });
    }

    return dispatch(verifyNicknameAsync.request(nickname));
  }, [nickname]);

  useEffect(() => {
    if (verifyNickname.data) {
      if (verifyNickname.data === 'no-nickname') {
        Swal.fire({
          icon: 'error',
          html: '해당 닉네임으로 가입한 정보가 없습니다.',
        });

        dispatch(resetVerifyNickname());
      } else {
        dispatch(findEmailAsync.request(verifyNickname.data.accessId));
      }
    }
  }, [verifyNickname.data]);

  useEffect(() => {
    if (findEmail.data) {
      Swal.fire({
        icon: 'success',
        html: `회원님의 이메일은 아래와 같습니다.<br/><br/>${findEmail.data.email}`,
      });

      dispatch(resetVerifyNickname());
      dispatch(resetFindEmail());
    }
  }, [findEmail.data]);

  useEffect(() => {
    if (findEmail.error) {
      Swal.fire({
        icon: 'error',
        text: '서버에러가 발생하였습니다.\n잠시후 다시 이용해주세요.',
      });

      dispatch(resetVerifyNickname());
      dispatch(resetFindEmail());
    }
  }, [findEmail.error]);

  return (
    <>
      <ModalTemplate title="이메일 찾기" modalAnimation={modalAnimation} onCloseModal={onCloseModal}>
        <FindEmailForm onSubmit={onSubmitFindEmailForm}>
          <LabelInput
            label="카트라이더 닉네임"
            inputLabel="nickname"
            type="text"
            placeholder="현재 사용중인 카트라이더 닉네임을 입력해주세요."
            value={nickname}
            onChange={onChangeNickname}
            verifyMessage={nicknameVerifyMessage}
            maxLength={12}
          />
          <FormSubmitButton buttonText="이메일 찾기" margin="50px auto 0 auto" disabled={nicknameVerifyMessage !== 'complete'} />
        </FindEmailForm>
      </ModalTemplate>
      {(verifyNickname.loading || findEmail.loading) && <Loading message="" />}
    </>
  );
}

export default FindEmailModal;
