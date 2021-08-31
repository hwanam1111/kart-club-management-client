import React from 'react';
import { useSelector } from 'react-redux';
import { BiMessageSquareDetail } from 'react-icons/bi';
import styled from 'styled-components';

import { RootState } from '../../store/reducers';
import useToggleMenu from '../../hooks/useToggleMenu';
import HeaderUserMenu from './HeaderUserMenu';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  z-index: 2;
  height: 65px;
  padding: 0 70px;
  border-bottom: 1px solid #eee;
  width: calc(100% - 280px);
  position: fixed;
  top: 0;
  right: 0;
`;

const NotificationToggleBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #a1a5b7;
`;

const UserToggleBtn = styled.button`
  margin-left: 30px;
`;

const UserImage = styled.img`
  border-radius: .475rem;
  width: 35px;
  height: 35px;
  background-color: #efefef;
`;

function Header() {
  const { data } = useSelector((state: RootState) => state.user.myInformation);
  const [userMenuOpend, onClickUserMenuOpend] = useToggleMenu(false);
  const [notificationOpend, onClickNotificationOpend] = useToggleMenu(false);

  return (
    <HeaderWrapper>
      <NotificationToggleBtn type="button" onClick={onClickNotificationOpend}>
        <BiMessageSquareDetail />
      </NotificationToggleBtn>
      <UserToggleBtn type="button" onClick={onClickUserMenuOpend}>
        <UserImage
          src={data?.profileImageUri || '/static/user.png'}
          alt="프로필 이미지"
        />
      </UserToggleBtn>
      {userMenuOpend && (
        <HeaderUserMenu
          onClose={onClickUserMenuOpend}
        />
      )}
    </HeaderWrapper>
  );
}

export default Header;
