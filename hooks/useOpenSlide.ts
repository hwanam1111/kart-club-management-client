import { useEffect, useRef } from 'react';

interface useOpenSlideHooks {
  ref: any,
  style: {
    transform: string
  }
}

const useOpenSlide = (direction = 'left', duration = 0): useOpenSlideHooks => {
  const element = useRef<HTMLElement>(null);
  useEffect(() => {
    element.current.style.transition = `transform ${duration}s ease-in-out`;
    element.current.style.transform = 'none';
  }, []);

  return {
    ref: element,
    style: {
      transform: direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)',
    },
  };
};

export default useOpenSlide;
