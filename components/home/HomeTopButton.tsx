import React from 'react';
import styled from 'styled-components';
import useModalChange from '../../hooks/modal/useModalChange';

import useModalToggle from '../../hooks/modal/useModalToggle';
import LoginModal from '../common/LoginModal';
import SignUpModal from '../common/SignUpModal';

const HomeTopButtonWrapper = styled.div``;

const SignUpButton = styled.button`
  border-radius: 5px;
  padding: 10px 15px;
  color: #fff;
  background-color: var(--main-color);
  transition: background-color .2s;

  &:hover {
    background-color: var(--main-color-bold);
  }
`;

function HomeTopButton() {
  const [loginAnimation, loginModalOpend, setLoginModalOpend, setLoginModalClosed] = useModalToggle(0.3, false);
  const [signUpAnimation, signUpModalOpend, setSignUpModalOpend, setSignUpModalClosed] = useModalToggle(0.3, false);
  const onChangeSignUpModal = useModalChange(setLoginModalClosed, setSignUpModalOpend, 0.5);
  const onChangeLoginModal = useModalChange(setSignUpModalClosed, setLoginModalOpend, 0.5);

  return (
    <>
      <HomeTopButtonWrapper>
        <SignUpButton type="button" onClick={setSignUpModalOpend}>
          회원가입 하러가기
        </SignUpButton>
      </HomeTopButtonWrapper>
      {loginModalOpend && (
        <LoginModal
          animation={loginAnimation}
          onCloseModal={setLoginModalClosed}
          onChangeSignUpModal={onChangeSignUpModal}
        />
      )}
      {signUpModalOpend && (
        <SignUpModal
          animation={signUpAnimation}
          onCloseModal={setSignUpModalClosed}
          onChangeLoginModal={onChangeLoginModal}
        />
      )}
    </>
  );
}

export default HomeTopButton;
