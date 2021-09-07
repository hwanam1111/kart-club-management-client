import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';

import HeaderUserMenuProfile from './HeaderUserMenuProfile';
import HeaderUserMenuItems from './HeaderUserMenuItems';
import useFadeIn from '../../hooks/toggleMenu/useFadeIn';

const HeaderUserMenuWrapper = styled.div`
  position: fixed;
  top: 65px;
  right: 30px;
  border-radius: .475rem;
  background-color: #fff;
  box-shadow: 0 0 50px 0 rgb(82 63 105 / 10%);
`;

interface HeaderUserMenuProps {
  onClose: () => void
}

function HeaderUserMenu({ onClose }: HeaderUserMenuProps) {
  const fadeIn = useFadeIn(0.2, 0);

  return (
    <OutsideClickHandler onOutsideClick={onClose}>
      <HeaderUserMenuWrapper {...fadeIn}>
        <HeaderUserMenuProfile />
        <HeaderUserMenuItems />
      </HeaderUserMenuWrapper>
    </OutsideClickHandler>
  );
}

export default HeaderUserMenu;
