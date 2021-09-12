import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../store/reducers';
import useModalChange from '../../../../hooks/modal/useModalChange';
import useModalToggle from '../../../../hooks/modal/useModalToggle';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import FindEmailModal from './FindEmailModal';

function UserModal() {
  const [loginModalAnimation, isLoginModalOpend, setLoginModalOpend, setLoginModalClosed] = useModalToggle(0.4, false);
  const [signUpModalAnimation, isSignUpModalOpend, setSignUpModalOpend, setSignUpModalClosed] = useModalToggle(0.4, false);
  const [findEmailModalAnimation, isFindEmailModalOpend, setFindEmailModalOpend, setFindEmailModalClosed] = useModalToggle(0.4, false);
  const onChangeLoginModal = useModalChange('login', setSignUpModalClosed, setLoginModalOpend, 0.6);
  const onChangeSignUpModal = useModalChange('signUp', setLoginModalClosed, setSignUpModalOpend, 0.6);
  const onChangeFindEmailModal = useModalChange('findEmail', setLoginModalClosed, setFindEmailModalOpend, 0.6);

  const { currentModal } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (currentModal === 'login') setLoginModalOpend();
    else if (currentModal === 'signUp') setSignUpModalOpend();
    else if (currentModal === 'findEmail') setFindEmailModalOpend();
  }, [currentModal]);

  return (
    <>
      {isLoginModalOpend && (
        <LoginModal
          modalAnimation={loginModalAnimation}
          onCloseModal={setLoginModalClosed}
          onChangeSignUpModal={onChangeSignUpModal}
          onChangeFindEmailModal={onChangeFindEmailModal}
        />
      )}
      {isSignUpModalOpend && (
        <SignUpModal
          modalAnimation={signUpModalAnimation}
          onCloseModal={setSignUpModalClosed}
          onChangeLoginModal={onChangeLoginModal}
        />
      )}
      {isFindEmailModalOpend && (
        <FindEmailModal
          modalAnimation={findEmailModalAnimation}
          onCloseModal={setFindEmailModalClosed}
        />
      )}
    </>
  );
}

export default UserModal;
