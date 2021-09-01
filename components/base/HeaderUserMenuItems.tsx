import React from 'react';
import styled from 'styled-components';

import useGetMyInformation from '../../hooks/useGetMyInformation';

const HeaderUserMenuItemsWrapper = styled.ul`
  padding: 15px 25px;
`;

const MenuItem = styled.li`
  padding: 15px 0;
`;

function HeaderUserMenuItems() {
  const { myInformation } = useGetMyInformation();

  return (
    <HeaderUserMenuItemsWrapper>
      {myInformation && myInformation !== 'no-user-info' ? (
        <>
          <MenuItem>내 프로필</MenuItem>
          <MenuItem>내 클럽</MenuItem>
          <MenuItem>로그아웃</MenuItem>
        </>
      ) : (
        <>
          <MenuItem>로그인</MenuItem>
          <MenuItem>회원가입</MenuItem>
        </>
      )}
    </HeaderUserMenuItemsWrapper>
  );
}

export default HeaderUserMenuItems;
