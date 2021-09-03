import React from 'react';
import styled from 'styled-components';

const HomeTopButtonWrapper = styled.div``;

const SignUpButton = styled.button`
  border-radius: 5px;
  padding: 10px 15px;
  color: #fff;
  background-color: var(--main-color);
`;

function HomeTopButton() {
  return (
    <HomeTopButtonWrapper>
      <SignUpButton type="button">
        회원가입 하러가기
      </SignUpButton>
    </HomeTopButtonWrapper>
  );
}

export default HomeTopButton;
