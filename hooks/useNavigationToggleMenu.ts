import { useEffect, useRef, useState, useCallback } from 'react';

const useNavigationToggleMenu = (duration: number, opend: boolean, menuArrowRef: any) => {
  const element = useRef<HTMLElement>(null);
  const [menuOpend, setMenuOpend] = useState(opend);

  const menuOpendHandler = useCallback((): void => {
    setMenuOpend(true);
  }, []);

  useEffect(() => {
    if (menuOpend) {
      element.current.style.transition = `max-height ${duration}s ease-in-out`;
      element.current.style.maxHeight = '250px';
      menuArrowRef.current.style.transition = `transform ${duration}s ease-in-out`;
      menuArrowRef.current.style.transform = 'rotateZ(-180deg)';

      setTimeout(() => {
        const subMenuHeight = element.current.getBoundingClientRect().height;
        element.current.style.maxHeight = `${subMenuHeight}px`;
      }, duration * 1000);
    }
  }, [menuOpend]);

  const menuClosedHandler = useCallback((): void => {
    element.current.style.transition = `max-height ${duration}s ease-in-out`;
    element.current.style.maxHeight = '0';
    menuArrowRef.current.style.transition = `transform ${duration}s ease-in-out`;
    menuArrowRef.current.style.transform = 'rotateZ(0)';

    setTimeout(() => {
      setMenuOpend(false);
    }, duration * 1000);
  }, []);

  return [{
    ref: element,
    style: {
      maxHeight: '0',
    },
  }, menuOpend, menuOpendHandler, menuClosedHandler] as const;
};

export default useNavigationToggleMenu;
