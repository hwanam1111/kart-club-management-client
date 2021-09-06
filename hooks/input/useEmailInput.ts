import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useEmailInput = (defaultValue: string) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(defaultValue);
  const [verifyMessage, setVerifyMessage] = useState(null);

  const onChangeInputValue = useCallback((evt: React.ChangeEvent<HTMLInputElement>): void => {
    const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    setValue(evt.target.value);

    if (!emailRegExp.test(evt.target.value)) {
      setVerifyMessage('이메일 형식을 맞춰서 입력해주세요.');
      // dispatch({
      //   type: RESET_CHECK_DUPLICATION_EMAIL,
      // });
    } else {
      // dispatch({
      //   type: CHECK_DUPLICATION_EMAIL_REQUEST,
      //   data: {
      //     type: 'customer',
      //     email: evt.target.value,
      //   },
      // });
    }
  }, []);

  // useEffect(() => {
  //   if (checkDuplicationEmailSuccess !== null) {
  //     if (checkDuplicationEmailSuccess) {
  //       setEmailVerifyMessage('complete');
  //     } else {
  //       setEmailVerifyMessage('이미 가입된 이메일입니다.');
  //     }
  //   }
  // }, [checkDuplicationEmailSuccess]);
  return [value, onChangeInputValue, verifyMessage] as const;
};

export default useEmailInput;
