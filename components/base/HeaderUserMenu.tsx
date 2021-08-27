import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';

interface HeaderUserMenuProps {
  onClose: () => void
}

function HeaderUserMenu({ onClose }: HeaderUserMenuProps) {
  return (
    <OutsideClickHandler onOutsideClick={onClose}>
      유저 메뉴
    </OutsideClickHandler>
  );
}

export default HeaderUserMenu;
