import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import Swal from 'sweetalert2';

import { verifyNicknameAsync, resetVerifyNickname, resetSignUp, signUpAsync } from '../../store/actions/user';
import { RootState } from '../../store/reducers';
import useEmailInput from '../../hooks/input/useEmailInput';
import useCheckPasswordInput from '../../hooks/input/useCheckPasswordInput';
import useNicknameInput from '../../hooks/input/useNicknameInput';
import ModalTemplate from './ModalTemplate';
import LabelInput from './LabelInput';
import FormSubmitButton from './FormSubmitButton';
import Loading from './Loading';

const LoginLink = styled.a`
  display: block;
  margin-top: 30px;
  font-size: 1.1rem;
  color: #b5b5c3;
  
  & > b {
    color: var(--main-color);
    font-weight: 600;
  }
`;

const SignUpForm = styled.form`
  margin-top: 50px;
  width: 600px;
`;

interface SignUpModalProps {
  animation: {
    ref: any,
    style: {
      transform: string
    }
  },
  onCloseModal: () => void
}

function SignUpModal({ animation, onCloseModal }: SignUpModalProps) {
  const dispatch = useDispatch();

  const [email, onChangeEmail, emailVerifyMessage] = useEmailInput('');
  const [password, passwordVerifyMessage, checkPassword, checkPasswordVerifyMessage, onChangePassword] = useCheckPasswordInput('', '');
  const [nickname, onChangeNickname, nicknameVerifyMessage] = useNicknameInput('');

  const onSubmitSignUpForm = useCallback((evt: React.FormEvent): any => {
    evt.preventDefault();

    if (email === '') {
      return Swal.fire({
        icon: 'error',
        text: '이메일을 입력해주세요.',
      });
    }

    if (emailVerifyMessage !== 'complete') {
      return Swal.fire({
        icon: 'error',
        text: '이메일을 형식에 맞게 입력해주세요.',
      });
    }

    if (password === '') {
      return Swal.fire({
        icon: 'error',
        text: '비밀번호를 입력해주세요.',
      });
    }

    if (passwordVerifyMessage !== 'complete') {
      return Swal.fire({
        icon: 'error',
        text: '비밀번호를 형식에 맞게 입력해주세요.',
      });
    }

    if (checkPasswordVerifyMessage !== 'complete') {
      return Swal.fire({
        icon: 'error',
        text: '비밀번호를 형식이 다르거나, 비밀번호가 같지 않습니다.',
      });
    }

    if (nickname === '') {
      return Swal.fire({
        icon: 'error',
        text: '닉네임을 입력해주세요.',
      });
    }

    if (nicknameVerifyMessage !== 'complete') {
      return Swal.fire({
        icon: 'error',
        text: '닉네임을 형식에 맞게 입력해주세요.',
      });
    }

    return Swal.fire({
      html: `회원가입시 기입한 닉네임이 현재 본인이 카트라이더에서 사용하고 있는 닉네임이 맞으신가요?<br/>닉네임 : ${nickname}<br/><br/>닉네임이 맞으시다면 회원가입을 해주세요!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '회원가입하기',
      cancelButtonText: '취소하기',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(verifyNicknameAsync.request(nickname));
      }
    });
  }, [
    email, emailVerifyMessage,
    password, passwordVerifyMessage, checkPasswordVerifyMessage,
    nickname, nicknameVerifyMessage,
  ]);

  const { verifyNickname, signUp } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (verifyNickname.data) {
      if (verifyNickname.data === 'no-nickname') {
        Swal.fire({
          icon: 'error',
          html: '현재 카트라이더 닉네임에 존재하지 않는 닉네임입니다.<br/><br/>닉네임을 다시 확인해주세요.',
        });
      } else {
        dispatch(signUpAsync.request({
          email,
          password,
          nickname,
          accessId: verifyNickname.data.accessId,
        }));
      }
    }
  }, [verifyNickname.data]);

  useEffect(() => {
    if (verifyNickname.error) {
      Swal.fire({
        icon: 'error',
        text: '서버에러가 발생하였습니다.\n잠시후 다시 이용해주세요.',
      });

      dispatch(resetVerifyNickname());
    }
  }, [verifyNickname.error]);

  useEffect(() => {
    if (signUp.data) {
      dispatch(resetSignUp());
      dispatch(resetVerifyNickname());
      onCloseModal();

      Swal.fire({
        icon: 'success',
        text: '회원가입이 완료되었습니다.',
      });
    }
  }, [signUp.data]);

  useEffect(() => {
    if (signUp.error) {
      if (signUp.error.response.data.data) {
        Swal.fire({
          icon: 'error',
          text: signUp.error.response.data.data,
        });
      } else {
        Swal.fire({
          icon: 'error',
          text: '서버에러가 발생하였습니다.\n잠시후 다시 이용해주세요.',
        });

        dispatch(resetSignUp());
      }
    }
  }, [signUp.error]);

  return (
    <>
      <ModalTemplate title="회원가입" animation={animation} onCloseModal={onCloseModal}>
        <Link href="/users/login">
          <LoginLink>
            이미 회원가입을 하셨나요?
            &nbsp;
            <b>로그인</b>
            하러가기
          </LoginLink>
        </Link>
        <SignUpForm onSubmit={onSubmitSignUpForm}>
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
            label="비밀번호"
            inputLabel="password"
            type="password"
            placeholder="영어, 숫자 포함 8~16자리"
            value={password}
            onChange={onChangePassword}
            verifyMessage={passwordVerifyMessage}
            maxLength={16}
          />
          <LabelInput
            label="비밀번호 확인"
            inputLabel="password-check"
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요."
            value={checkPassword}
            onChange={onChangePassword}
            verifyMessage={checkPasswordVerifyMessage}
            maxLength={16}
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
          <FormSubmitButton
            buttonText="회원가입"
            margin="50px auto 0 auto"
            disabled={
              emailVerifyMessage !== 'complete'
              || passwordVerifyMessage !== 'complete'
              || checkPasswordVerifyMessage !== 'complete'
              || nicknameVerifyMessage !== 'complete'
            }
          />
        </SignUpForm>
      </ModalTemplate>
      {signUp.loading && <Loading message="회원가입 중입니다." />}
    </>
  );
}

export default SignUpModal;
