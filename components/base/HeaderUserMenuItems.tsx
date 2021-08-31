import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../../store/reducers';

const HeaderUserMenuItemsWrapper = styled.ul`
  padding: 15px 25px;
`;

const MenuItem = styled.li`
  padding: 15px 0;
`;

function HeaderUserMenuItems() {
  const { data } = useSelector((state: RootState) => state.user.myInformation);

  return (
    <HeaderUserMenuItemsWrapper>
      {data && data !== 'no-user-info' ? (
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
