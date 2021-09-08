import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Swal from 'sweetalert2';

import { RootState } from '../../store/reducers';
import { logoutAsync, resetLogout } from '../../store/actions/auth';
import { getMyInformationAsync } from '../../store/actions/user';
import useGetMyInformation from '../../hooks/useGetMyInformation';
import useModalChange from '../../hooks/modal/useModalChange';
import useModalToggle from '../../hooks/modal/useModalToggle';
import SignUpModal from '../common/SignUpModal';
import LoginModal from '../common/LoginModal';
import Loading from '../common/Loading';

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

  const dispatch = useDispatch();
  const onClickLogout = useCallback(() => {
    dispatch(logoutAsync.request());
  }, []);

  const { loading, data, error } = useSelector((state: RootState) => state.auth.logout);
  useEffect(() => {
    if (data) {
      dispatch(getMyInformationAsync.request());
      dispatch(resetLogout());
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: 'error',
        text: '서버에러가 발생하였습니다.\n잠시후 다시 이용해주세요.',
      });

      dispatch(resetLogout());
    }
  }, [error]);

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
              <MenuButton type="button" onClick={onClickLogout}>
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
      {loading && <Loading message="" />}
    </>
  );
}

export default HeaderUserMenuItems;
