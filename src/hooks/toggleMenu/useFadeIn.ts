import { useEffect, useRef } from 'react';

interface useFadeInHooks {
  ref: any,
  style: {
    opacity: number
  }
}

const useFadeIn = (duration: number, delay: number): useFadeInHooks => {
  const element = useRef<HTMLElement>(null);
  useEffect(() => {
    element.current.style.transition = `opacity ${duration}s ${delay}s`;
    element.current.style.opacity = '1';
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

export default useFadeIn;
