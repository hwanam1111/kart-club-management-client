import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { changeCurrentModal } from '../../store/actions/user';

const HomeTopButtonWrapper = styled.div``;

const SignUpButton = styled.button`
  border-radius: 5px;
  padding: 10px 15px;
  color: #fff;
  background-color: var(--main-color);
  transition: background-color .2s;

  &:hover {
    background-color: var(--main-color-bold);
  }
`;

function HomeTopButton() {
  const dispatch = useDispatch();

  const onClickSignUpBtn = useCallback(() => {
    dispatch(changeCurrentModal('signUp'));
  }, []);

  return (
    <>
      <HomeTopButtonWrapper>
        <SignUpButton type="button" onClick={onClickSignUpBtn}>
          회원가입 하러가기
        </SignUpButton>
      </HomeTopButtonWrapper>
    </>
  );
}

export default HomeTopButton;
