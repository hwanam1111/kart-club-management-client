import { useEffect, useRef } from 'react';

interface useFadeInFunction {
  ref: any,
  style: {
    opacity: number
  }
}

const useFadeIn = (duration = 0, delay = 0): useFadeInFunction => {
  const element = useRef<HTMLElement>(null);
  useEffect(() => {
    element.current.style.transition = `opacity ${duration}s ${delay}s`;
    element.current.style.opacity = '1';
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

export default useFadeIn;
