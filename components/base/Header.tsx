import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../../store/reducers';
import HeaderUserMenu from './HeaderUserMenu';

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

const UserToggleBtn = styled.button`
  
`;

const UserImage = styled.img`
  border-radius: .475rem;
  width: 35px;
  height: 35px;
  background-color: #efefef;
`;

function Header() {
  const { data } = useSelector((state: RootState) => state.user.myInformation);
  const [toggleMenuOpend, setToggleMenuOpend] = useState<boolean>(false);

  const onClickUserMenuBtn = useCallback((): void => {
    setToggleMenuOpend(true);
  }, []);

  const onCloseUserMenu = useCallback((): void => {
    setToggleMenuOpend(false);
  }, []);

  return (
    <HeaderWrapper>
      <UserToggleBtn type="button" onClick={onClickUserMenuBtn}>
        <UserImage
          src={data?.profileImageUri || '/static/user.png'}
          alt="프로필 이미지"
        />
      </UserToggleBtn>
      {toggleMenuOpend && (
        <HeaderUserMenu
          onClose={onCloseUserMenu}
        />
      )}
    </HeaderWrapper>
  );
}

export default Header;
