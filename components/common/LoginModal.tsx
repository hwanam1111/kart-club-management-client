import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Swal from 'sweetalert2';

import { RootState } from '../../store/reducers';
import { getMyInformationAsync, loginAsync, resetLogin } from '../../store/actions/user';
import ModalTemplate from './ModalTemplate';
import LabelInput from './LabelInput';
import FormSubmitButton from './FormSubmitButton';
import LoginModalFindUserInfoButton from './LoginModalFindUserInfoButton';
import useCheckBlankInput from '../../hooks/input/useCheckBlankInput';
import Loading from './Loading';

const SignUpButton = styled.button`
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
  animation: {
    ref: any,
    style: {
      transform: string
    }
  },
  onCloseModal: () => void,
  onChangeSignUpModal: () => void
}

function LoginModal({ animation, onCloseModal, onChangeSignUpModal }: LoginModalProps) {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state: RootState) => state.user.login);

  const [email, onChangeEmail] = useCheckBlankInput('');
  const [password, onChangePassword] = useCheckBlankInput('');

  const onSubmitLoginForm = useCallback((evt: React.FormEvent): any => {
    evt.preventDefault();

    if (email === '') {
      return Swal.fire({
        icon: 'error',
        text: '이메일을 입력해주세요.',
      });
    }

    if (password === '') {
      return Swal.fire({
        icon: 'error',
        text: '비밀번호를 입력해주세요.',
      });
    }

    return dispatch(loginAsync.request({
      email, password,
    }));
  }, [email, password]);

  useEffect(() => {
    if (data) {
      dispatch(resetLogin());
      dispatch(getMyInformationAsync.request());
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

      dispatch(resetLogin());
    }
  }, [error]);

  return (
    <>
      <ModalTemplate title="로그인" animation={animation} onCloseModal={onCloseModal}>
        <SignUpButton onClick={onChangeSignUpModal}>
          아직 회원가입을 하지 않으셨나요?
          &nbsp;
          <b>회원가입</b>
          하러가기
        </SignUpButton>
        <LoginForm onSubmit={onSubmitLoginForm}>
          <LabelInput
            label="이메일"
            inputLabel="email"
            type="email"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={onChangeEmail}
            verifyMessage=""
            maxLength={254}
          />
          <LabelInput
            label="비밀번호"
            inputLabel="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={onChangePassword}
            verifyMessage=""
            maxLength={16}
          />
          <LoginModalFindUserInfoButton />
          <FormSubmitButton buttonText="로그인" margin="50px auto 0 auto" disabled={email === '' || password === ''} />
        </LoginForm>
      </ModalTemplate>
      {loading && <Loading message="로그인 중입니다." />}
    </>
  );
}

export default LoginModal;
