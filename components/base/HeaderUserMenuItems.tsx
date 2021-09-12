import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Swal from 'sweetalert2';

import { RootState } from '../../store/reducers';
import { logoutAsync, resetLogout } from '../../store/actions/auth';
import { changeCurrentModal, getMyInformationAsync } from '../../store/actions/user';
import useGetMyInformation from '../../hooks/useGetMyInformation';
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
  const dispatch = useDispatch();
  const { myInformation } = useGetMyInformation();

  const onClickLoginBtn = useCallback(() => {
    dispatch(changeCurrentModal('login'));
  }, []);

  const onClickSignUpBtn = useCallback(() => {
    dispatch(changeCurrentModal('signUp'));
  }, []);

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
              <MenuButton type="button" onClick={onClickLoginBtn}>
                로그인
              </MenuButton>
            </MenuItem>
            <MenuItem>
              <MenuButton type="button" onClick={onClickSignUpBtn}>
                회원가입
              </MenuButton>
            </MenuItem>
          </>
        )}
      </HeaderUserMenuItemsWrapper>
      {loading && <Loading message="" />}
    </>
  );
}

export default HeaderUserMenuItems;
