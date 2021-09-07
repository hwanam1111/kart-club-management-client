import { useState, useCallback } from 'react';

const useCheckBlankInput = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue);
  const [verifyMessage, setVerifyMessage] = useState(null);

  const onChangeInputValue = useCallback((evt: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = evt.target.value;
    setValue(inputValue);

    if (inputValue === '') {
      setVerifyMessage(false);
    } else {
      setVerifyMessage('complete');
    }
  }, []);

  return [value, onChangeInputValue, verifyMessage] as const;
};

export default useCheckBlankInput;
