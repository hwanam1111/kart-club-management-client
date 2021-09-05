import { useEffect, useRef, useState, useCallback } from 'react';

const useModalToggle = (duration: number, opend: boolean) => {
  const element = useRef<HTMLElement>(null);
  const [menuOpend, setMenuOpend] = useState(opend);

  const menuOpendHandler = useCallback((): void => {
    setMenuOpend(true);
  }, []);

  useEffect(() => {
    if (menuOpend) {
      element.current.style.transition = `transform ${duration}s ease-in-out`;
      element.current.style.transform = 'none';
    }
  }, [menuOpend]);

  let transform = 'translateY(-100%)';

  const menuClosedHandler = useCallback((): void => {
    element.current.style.transition = `transform ${duration}s ease-in-out`;
    element.current.style.transform = 'translateY(-100%)';
    transform = 'none';

    setTimeout(() => {
      setMenuOpend(false);
    }, duration * 1000);
  }, []);

  return [{
    ref: element,
    style: {
      transform,
    },
  }, menuOpend, menuOpendHandler, menuClosedHandler] as const;
};

export default useModalToggle;
