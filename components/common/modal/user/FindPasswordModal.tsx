import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Swal from 'sweetalert2';

import { RootState } from '../../../../store/reducers';
import ModalTemplate from '../ModalTemplate';
import LabelInput from '../../LabelInput';
import FormSubmitButton from '../../FormSubmitButton';
import useCheckBlankInput from '../../../../hooks/input/useCheckBlankInput';
import useNicknameInput from '../../../../hooks/input/useNicknameInput';
import { resetVerifyNickname, verifyNicknameAsync } from '../../../../store/actions/auth';
import { findPasswordAsync, resetFindPassword } from '../../../../store/actions/user';
import Loading from '../../Loading';

const FindPasswordForm = styled.form`
  margin-top: 50px;
  width: 600px;
`;

interface FindPasswordModalProps {
  modalAnimation: {
    ref: any,
  },
  onCloseModal: () => void,
}

function FindPasswordModal({ modalAnimation, onCloseModal }: FindPasswordModalProps) {
  const dispatch = useDispatch();
  const { verifyNickname } = useSelector((state: RootState) => state.auth);
  const { findPassword } = useSelector((state: RootState) => state.user);

  const [email, onChangeEmail, emailVerifyMessage] = useCheckBlankInput('');
  const [nickname, onChangeNickname, nicknameVerifyMessage] = useNicknameInput('');

  const onSubmitFindPasswordForm = useCallback((evt: React.FormEvent): any => {
    evt.preventDefault();

    if (email === '') {
      return Swal.fire({
        icon: 'error',
        text: '이메일을 입력해주세요.',
      });
    }

    if (nickname === '') {
      return Swal.fire({
        icon: 'error',
        text: '닉네임을 입력해주세요.',
      });
    }

    return dispatch(verifyNicknameAsync.request(nickname));
  }, [email, nickname]);

  useEffect(() => {
    if (verifyNickname.data) {
      if (verifyNickname.data === 'no-nickname') {
        Swal.fire({
          icon: 'error',
          html: '입력하신 이메일과 닉네임에 일치하는 회원님의 정보가 없습니다.',
        });

        dispatch(resetVerifyNickname());
      } else {
        dispatch(findPasswordAsync.request({
          email,
          accessId: verifyNickname.data.accessId,
        }));
      }
    }
  }, [email, verifyNickname.data]);

  useEffect(() => {
    if (findPassword.data) {
      Swal.fire({
        icon: 'success',
        html: '회원님이 기재하신 이메일로 새로운 비밀번호를 전송해드렸습니다!<br/><br/>이메일 확인 후 로그인을 해주세요!',
      });

      dispatch(resetVerifyNickname());
      dispatch(resetFindPassword());
    }
  }, [findPassword.data]);

  useEffect(() => {
    if (findPassword.error) {
      Swal.fire({
        icon: 'error',
        text: '서버에러가 발생하였습니다.\n잠시후 다시 이용해주세요.',
      });

      dispatch(resetVerifyNickname());
      dispatch(resetFindPassword());
    }
  }, [findPassword.error]);

  return (
    <>
      <ModalTemplate title="비밀번호 찾기" modalAnimation={modalAnimation} onCloseModal={onCloseModal}>
        <FindPasswordForm onSubmit={onSubmitFindPasswordForm}>
          <LabelInput
            label="이메일"
            inputLabel="email"
            type="email"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={onChangeEmail}
            verifyMessage={emailVerifyMessage}
            maxLength={254}
          />
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
        </FindPasswordForm>
      </ModalTemplate>
      {(verifyNickname.loading || findPassword.loading) && <Loading message="" />}
    </>
  );
}

export default FindPasswordModal;
