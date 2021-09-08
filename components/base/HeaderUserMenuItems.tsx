import React from 'react';
import styled from 'styled-components';

import useGetMyInformation from '../../hooks/useGetMyInformation';
import useModalChange from '../../hooks/modal/useModalChange';
import useModalToggle from '../../hooks/modal/useModalToggle';
import SignUpModal from '../common/SignUpModal';
import LoginModal from '../common/LoginModal';

const HeaderUserMenuItemsWrapper = styled.ul`
  padding: 15px 25px;
`;

const MenuItem = styled.li``;

const MenuButton = styled.button`
  text-align: left;
  padding: 15px 0;
  width: 100%;
`;

function HeaderUserMenuItems() {
  const { myInformation } = useGetMyInformation();
  const [loginAnimation, loginModalOpend, setLoginModalOpend, setLoginModalClosed] = useModalToggle(0.3, false);
  const [signUpAnimation, signUpModalOpend, setSignUpModalOpend, setSignUpModalClosed] = useModalToggle(0.3, false);
  const onChangeSignUpModal = useModalChange(setLoginModalClosed, setSignUpModalOpend, 0.6);
  const onChangeLoginModal = useModalChange(setSignUpModalClosed, setLoginModalOpend, 0.6);

  return (
    <>
      <HeaderUserMenuItemsWrapper>
        {myInformation && myInformation !== 'no-user-info' ? (
          <>
            <MenuItem>
              <MenuButton type="button">
                내 프로필
              </MenuButton>
            </MenuItem>
            <MenuItem>
              <MenuButton type="button">
                내 클럽
              </MenuButton>
            </MenuItem>
            <MenuItem>
              <MenuButton type="button">
                로그아웃
              </MenuButton>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem>
              <MenuButton type="button" onClick={setLoginModalOpend}>
                로그인
              </MenuButton>
            </MenuItem>
            <MenuItem>
              <MenuButton type="button" onClick={setSignUpModalOpend}>
                회원가입
              </MenuButton>
            </MenuItem>
          </>
        )}
      </HeaderUserMenuItemsWrapper>
      {loginModalOpend && (
        <LoginModal
          animation={loginAnimation}
          onCloseModal={setLoginModalClosed}
          onChangeSignUpModal={onChangeSignUpModal}
        />
      )}
      {signUpModalOpend && (
        <SignUpModal
          animation={signUpAnimation}
          onCloseModal={setSignUpModalClosed}
          onChangeLoginModal={onChangeLoginModal}
        />
      )}
    </>
  );
}

export default HeaderUserMenuItems;
