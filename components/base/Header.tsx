import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  z-index: 2;
  height: 65px;
  padding: 0 30px;
  border-bottom: 1px solid #eee;
  width: calc(100% - 280px);
  position: fixed;
  top: 0;
  right: 0;
`;

const ProfileImage = styled.img`
  border-radius: .475rem;
  width: 35px;
  height: 35px;
  background-color: #efefef;
  padding: 5px;
`;

function Header() {
  return (
    <HeaderWrapper>
      <ProfileImage src="/static/user.png" alt="프로필 이미지" />
    </HeaderWrapper>
  );
}

export default Header;
