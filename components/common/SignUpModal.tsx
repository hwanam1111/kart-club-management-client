import React, { useCallback } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import ModalTemplate from './ModalTemplate';
import LabelInput from './LabelInput';
import FormSubmitButton from './FormSubmitButton';
import useEmailInput from '../../hooks/input/useEmailInput';
import useCheckPasswordInput from '../../hooks/input/useCheckPasswordInput';
import useNicknameInput from '../../hooks/input/useNicknameInput';

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
  const [email, onChangeEmail, emailVerifyMessage] = useEmailInput('');
  const [
    password, passwordVerifyMessage,
    checkPassword, checkPasswordVerifyMessage,
    onChangePassword,
  ] = useCheckPasswordInput('', '');
  const [nickname, onChangeNickname, nicknameVerifyMessage] = useNicknameInput('');

  const onSubmitSignUpForm = useCallback((evt: React.FormEvent): void => {
    evt.preventDefault();
  }, []);

  return (
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
          type="email"
          placeholder="현재 사용중인 카트라이더 닉네임을 입력해주세요."
          value={nickname}
          onChange={onChangeNickname}
          verifyMessage={nicknameVerifyMessage}
          maxLength={12}
        />
        <FormSubmitButton buttonText="회원가입" margin="50px auto 0 auto" />
      </SignUpForm>
    </ModalTemplate>
  );
}

export default SignUpModal;
