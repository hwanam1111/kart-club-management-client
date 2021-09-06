import React from 'react';
import styled from 'styled-components';

import useModalToggle from '../../hooks/useModalToggle';
import SignUpModal from '../common/SignUpModal';

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
  const [animation, modalOpend, setModalOpend, setModalClosed] = useModalToggle(0.3, false);

  return (
    <>
      <HomeTopButtonWrapper>
        <SignUpButton type="button" onClick={setModalOpend}>
          회원가입 하러가기
        </SignUpButton>
      </HomeTopButtonWrapper>
      {modalOpend && (
        <SignUpModal
          animation={animation}
          onCloseModal={setModalClosed}
        />
      )}
    </>
  );
}

export default HomeTopButton;
