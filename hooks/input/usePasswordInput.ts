import { useState, useCallback } from 'react';

const usePasswordInput = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue);
  const onChangeInputValue = useCallback((evt: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(evt.target.value);
  }, []);

  return [value, onChangeInputValue] as const;
};

export default usePasswordInput;
