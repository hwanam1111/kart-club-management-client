import React from 'react';
import styled from 'styled-components';

import LoginModal from '../common/LoginModal';
import SignUpModal from '../common/SignUpModal';
import useModalToggle from '../../hooks/modal/useModalToggle';
import useModalChange from '../../hooks/modal/useModalChange';

const HomePleaseLoginWrapper = styled.section`
  background-color: #fff;
  border-radius: 12px;
  text-align: center;
  flex: 1 0 auto;
`;

const PleaseLoginTitle = styled.h1`
  margin-top: 70px;
  font-weight: 700;
  font-size: 2rem;
  color: #181c32;
`;

const PleaseLoginContent = styled.div`
  color: #b5b5c3;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 50px;
`;

const LoginButton = styled.button`
  display: block;
  margin: 50px auto 0 auto;
  border-radius: 5px;
  padding: 10px 15px;
  color: #fff;
  background-color: var(--main-color);
  transition: background-color .2s;

  &:hover {
    background-color: var(--main-color-bold);
  }
`;

const LoginAvatar = styled.img`
  margin-top: 50px;
  width: 310px;
`;

function HomePleaseLogin() {
  const [loginAnimation, loginModalOpend, setLoginModalOpend, setLoginModalClosed] = useModalToggle(0.3, false);
  const [signUpAnimation, signUpModalOpend, setSignUpModalOpend, setSignUpModalClosed] = useModalToggle(0.3, false);
  const onChangeSignUpModal = useModalChange(setLoginModalClosed, setSignUpModalOpend, 0.5);
  const onChangeLoginModal = useModalChange(setSignUpModalClosed, setLoginModalOpend, 0.5);

  return (
    <>
      <HomePleaseLoginWrapper>
        <PleaseLoginTitle>
          로그인을 해주세요!
        </PleaseLoginTitle>
        <PleaseLoginContent>
          <p>로그인을 하고, 내가 원하는 클럽에 가입신청도 하고,</p>
          <p>클럽에 소속이 되어있으면, 클럽원들과 소통해봐요!</p>
          <p>클럽의 운영진이라면, 클럽관리도 할 수 있어요!</p>
        </PleaseLoginContent>
        <LoginButton type="button" onClick={setLoginModalOpend}>
          로그인
        </LoginButton>
        <LoginAvatar src="/static/signin.png" alt="로그인 아바타" title="로그인 아바타" />
      </HomePleaseLoginWrapper>
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

export default HomePleaseLogin;
