import { useEffect, useRef, useState, useCallback } from 'react';

const useSlideToggleMenu = (direction: string, duration: number, opend: boolean) => {
  const element = useRef<any>(null);
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

  let transform = direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)';

  const menuClosedHandler = useCallback((): void => {
    element.current.style.transition = `transform ${duration}s ease-in-out`;
    element.current.style.transform = direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)';
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

export default useSlideToggleMenu;
