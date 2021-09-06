import React, { useCallback } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import ModalTemplate from './ModalTemplate';
import LabelInput from './LabelInput';
import FormSubmitButton from './FormSubmitButton';
import useEmailInput from '../../hooks/input/useEmailInput';
import usePasswordInput from '../../hooks/input/usePasswordInput';
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
  const [email, onChangeEmail, verifyMessage] = useEmailInput('');
  const [password, onChangePassword] = usePasswordInput('');
  const [checkPassword, onChangeCheckPassword] = usePasswordInput('');
  const [nickname, onChangeNickname] = useNicknameInput('');

  const onSubmitSignUpForm = useCallback((evt: React.FormEvent): void => {
    evt.preventDefault();
  }, []);

  console.log(verifyMessage);

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
          placeholder="영문, 숫자, 특수문자 포함 8~16자리"
          value={password}
          onChange={onChangePassword}
          verifyMessage=""
          maxLength={16}
        />
        <LabelInput
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요."
          value={checkPassword}
          onChange={onChangeCheckPassword}
          verifyMessage=""
          maxLength={16}
        />
        <LabelInput
          label="카트라이더 닉네임"
          type="email"
          placeholder="현재 사용중인 카트라이더 닉네임을 입력해주세요."
          value={nickname}
          onChange={onChangeNickname}
          verifyMessage=""
          maxLength={12}
        />
        <FormSubmitButton buttonText="회원가입" margin="50px auto 0 auto" />
      </SignUpForm>
    </ModalTemplate>
  );
}

export default SignUpModal;
