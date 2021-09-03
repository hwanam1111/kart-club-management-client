import React from 'react';
import styled from 'styled-components';

const LoginModalFindUserInfoButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const FindUserInfoButton = styled.button`
  color: #b5b5c3;
`;

const SeparateLine = styled.span`
  display: block;
  margin: 0 11px 4px 11px;
  color: #b5b5c3;
  font-weight: 100;
`;

function LoginModalFindUserInfoButton() {
  return (
    <LoginModalFindUserInfoButtonWrapper>
      <FindUserInfoButton type="button">
        이메일 찾기
      </FindUserInfoButton>
      <SeparateLine>|</SeparateLine>
      <FindUserInfoButton type="button">
        비밀번호 찾기
      </FindUserInfoButton>
    </LoginModalFindUserInfoButtonWrapper>
  );
}

export default LoginModalFindUserInfoButton;
