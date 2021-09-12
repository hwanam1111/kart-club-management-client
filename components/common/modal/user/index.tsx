import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../store/reducers';
import useModalChange from '../../../../hooks/modal/useModalChange';
import useModalToggle from '../../../../hooks/modal/useModalToggle';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

function UserModal() {
  const [loginModalAnimation, isLoginModalOpend, setLoginModalOpend, setLoginModalClosed] = useModalToggle(0.4, false);
  const [signUpModalAnimation, isSignUpModalOpend, setSignUpModalOpend, setSignUpModalClosed] = useModalToggle(0.4, false);
  const onChangeLoginModal = useModalChange('login', setSignUpModalClosed, setLoginModalOpend, 0.6);
  const onChangeSignUpModal = useModalChange('signUp', setLoginModalClosed, setSignUpModalOpend, 0.6);

  const { currentModal } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (currentModal === 'login') setLoginModalOpend();
    if (currentModal === 'signUp') setSignUpModalOpend();
  }, [currentModal]);

  return (
    <>
      {isLoginModalOpend && (
        <LoginModal
          modalAnimation={loginModalAnimation}
          onCloseModal={setLoginModalClosed}
          onChangeSignUpModal={onChangeSignUpModal}
        />
      )}
      {isSignUpModalOpend && (
        <SignUpModal
          modalAnimation={signUpModalAnimation}
          onCloseModal={setSignUpModalClosed}
          onChangeLoginModal={onChangeLoginModal}
        />
      )}
    </>
  );
}

export default UserModal;
