import { useState, useCallback, useEffect } from 'react';

const useCheckPasswordInput = (passwordValue: string, checkPasswordValue: string) => {
  const [password, setPassword] = useState(passwordValue);
  const [passwordVerifyMessage, setPasswordVerifyMessage] = useState(null);

  const [checkPassword, setChackPassword] = useState(checkPasswordValue);
  const [checkPasswordVerifyMessage, setCheckPasswordVerifyMessage] = useState(null);

  const onChangeInputValue = useCallback((evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { label } = evt.target.dataset;
    const enterdPassword = evt.target.value;

    if (label === 'password') {
      setPassword(enterdPassword);
    } else if (label === 'password-check') {
      setChackPassword(enterdPassword);
    }
  }, []);

  useEffect(() => {
    const passwordRegExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

    if (password === '') {
      setPasswordVerifyMessage('');
    } else if (!passwordRegExp.test(password)) {
      setPasswordVerifyMessage('영어, 숫자를 포함한 8 ~ 16자리 비밀번호를 입력해주세요.');
    } else {
      setPasswordVerifyMessage('complete');
    }

    if (checkPassword === '') {
      setCheckPasswordVerifyMessage('');
    } else if (password !== checkPassword) {
      setCheckPasswordVerifyMessage('비밀번호가 일치하지 않습니다.');
    }

    if (password !== '' && checkPassword !== '' && (password === checkPassword)) {
      setCheckPasswordVerifyMessage('complete');
      setPasswordVerifyMessage('complete');
    }
  }, [password, checkPassword]);

  return [
    password, passwordVerifyMessage,
    checkPassword, checkPasswordVerifyMessage,
    onChangeInputValue,
  ] as const;
};

export default useCheckPasswordInput;
