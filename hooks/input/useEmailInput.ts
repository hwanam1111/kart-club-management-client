import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/reducers/index';
import { resetEmailDuplicateCheck, emailDuplicateCheckAsync } from '../../store/actions/user';

const useEmailInput = (defaultValue: string) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(defaultValue);
  const [verifyMessage, setVerifyMessage] = useState(null);
  const { data, error } = useSelector((state: RootState) => state.user.emailDuplicateCheck);

  useEffect(() => {
    dispatch(resetEmailDuplicateCheck());
  }, []);

  const onChangeInputValue = useCallback((evt: React.ChangeEvent<HTMLInputElement>): void => {
    const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    const emailValue = evt.target.value;

    setValue(emailValue);

    if (!emailRegExp.test(emailValue)) {
      setVerifyMessage('이메일 형식을 맞춰서 입력해주세요.');
    } else {
      dispatch(emailDuplicateCheckAsync.request(emailValue));
    }
  }, []);

  useEffect(() => {
    if (data !== null) {
      if (data === 'duplicate-email') {
        setVerifyMessage('이미 가입된 이메일입니다.');
      } else if (data === 'available-email') {
        setVerifyMessage('complete');
      }
    } else {
      setVerifyMessage(null);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      setVerifyMessage('서버에 에러가 발생하였습니다. 잠시 후 다시 시도해주세요.');
    }
  }, [error]);
  return [value, onChangeInputValue, verifyMessage] as const;
};

export default useEmailInput;
