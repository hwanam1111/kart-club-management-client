import React from 'react';
import styled from 'styled-components';

const HeaderUserMenuItemsWrapper = styled.ul`
  padding: 15px 25px;
`;

const MenuItem = styled.li`
  padding: 15px 0;
`;

function HeaderUserMenuItems() {
  return (
    <HeaderUserMenuItemsWrapper>
      <MenuItem>내 프로필</MenuItem>
      <MenuItem>내 클럽</MenuItem>
      <MenuItem>로그아웃</MenuItem>
    </HeaderUserMenuItemsWrapper>
  );
}

export default HeaderUserMenuItems;
