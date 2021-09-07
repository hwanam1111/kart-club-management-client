import React from 'react';
import { BiMessageSquareDetail } from 'react-icons/bi';
import styled from 'styled-components';

import useGetMyInformation from '../../hooks/useGetMyInformation';
import useToggleMenu from '../../hooks/toggleMenu/useToggleMenu';
import useSlideToggleMenu from '../../hooks/toggleMenu/useFixedSlideToggleMenu';
import HeaderUserMenu from './HeaderUserMenu';
import HeaderNotification from './HeaderNotification';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  z-index: 2;
  height: 65px;
  padding: 0 70px;
  width: calc(100% - 280px);
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff;;
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
  const { myInformation } = useGetMyInformation();
  const [userMenuOpend, setUserMenuOpend] = useToggleMenu(false);
  const [openSlide, notificationOpend, setNotificationOpend, setNotificationClosed] = useSlideToggleMenu('right', 0.3, false);

  return (
    <HeaderWrapper>
      <NotificationToggleBtn type="button" onClick={setNotificationOpend}>
        <BiMessageSquareDetail />
      </NotificationToggleBtn>
      {notificationOpend && (
        <HeaderNotification
          onClose={setNotificationClosed}
          slideAnimation={openSlide}
        />
      )}
      <UserToggleBtn type="button" onClick={setUserMenuOpend}>
        <UserImage
          src={myInformation?.profileImageUri || '/static/user.png'}
          alt="프로필 이미지"
        />
      </UserToggleBtn>
      {userMenuOpend && (
        <HeaderUserMenu
          onClose={setUserMenuOpend}
        />
      )}
    </HeaderWrapper>
  );
}

export default Header;
