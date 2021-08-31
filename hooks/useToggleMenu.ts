import { useState, useCallback } from 'react';

const useToggleMenu = (opend: boolean) => {
  const [menuOpend, setMenuOpend] = useState(opend);
  const handler = useCallback((): void => {
    setMenuOpend((prevData) => !prevData);
  }, []);

  return [menuOpend, handler] as const;
};

export default useToggleMenu;
