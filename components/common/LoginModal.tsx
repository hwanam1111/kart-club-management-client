import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import ModalTemplate from './ModalTemplate';
import LabelInput from './LabelInput';
import FormSubmitButton from './FormSubmitButton';
import LoginModalFindUserInfoButton from './LoginModalFindUserInfoButton';

const SignUpLink = styled.a`
  display: block;
  margin-top: 30px;
  font-size: 1.1rem;
  color: #b5b5c3;
  
  & > b {
    color: var(--main-color);
    font-weight: 600;
  }
`;

const LoginForm = styled.form`
  margin-top: 50px;
  width: 600px;
`;

interface LoginModalProps {
  onCloseModal: () => void
}

function LoginModal({ onCloseModal }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const onChangeEmail = useCallback((evt: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(evt.target.value);
  }, []);

  const [password, setPassword] = useState('');
  const onChangePassword = useCallback((evt: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(evt.target.value);
  }, []);

  const onSubmitLoginForm = useCallback((evt: React.FormEvent): void => {
    evt.preventDefault();
  }, []);

  return (
    <ModalTemplate title="로그인" onCloseModal={onCloseModal}>
      <Link href="/users/signup">
        <SignUpLink>
          아직 회원가입을 하지 않으셨나요?
          &nbsp;
          <b>회원가입</b>
          하러가기
        </SignUpLink>
      </Link>
      <LoginForm onSubmit={onSubmitLoginForm}>
        <LabelInput
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={onChangeEmail}
          verifyMessage=""
          maxLength={254}
        />
        <LabelInput
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={onChangePassword}
          verifyMessage=""
          maxLength={16}
        />
        <LoginModalFindUserInfoButton />
        <FormSubmitButton buttonText="로그인" margin="50px auto 0 auto" />
      </LoginForm>
    </ModalTemplate>
  );
}

export default LoginModal;
