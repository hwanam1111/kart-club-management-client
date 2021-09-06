import { useState, useCallback } from 'react';

const useNicknameInput = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue);
  const [verifyMessage, setVerifyMessage] = useState(null);

  const onChangeInputValue = useCallback((evt: React.ChangeEvent<HTMLInputElement>): void => {
    const nickname = evt.target.value;
    setValue(nickname);

    let textCount = 0;
    evt.target.value.split('').forEach((v) => {
      const byte = v.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, '$&$1$2').length === 3 ? 2 : 1;
      textCount += byte;
    });

    if (nickname === '') {
      setVerifyMessage('닉네임을 입력해주세요.');
    } else if (/[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩ ]/g.test(nickname)) {
      setVerifyMessage('특수문자와 공백은 입력할 수 없습니다.');
    } else if (textCount > 12) {
      setVerifyMessage('닉네임 글자수가 초과되었습니다.');
    } else {
      setVerifyMessage('complete');
    }
  }, []);

  return [value, onChangeInputValue, verifyMessage] as const;
};

export default useNicknameInput;
