import { useEffect, useRef, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeCurrentModal } from '../../store/actions/user';

const useModalToggle = (duration: number, opend: boolean) => {
  const dispatch = useDispatch();
  const element = useRef<HTMLElement>(null);

  const [modalOpend, setModalOpend] = useState(opend);

  const modalOpendHandler = useCallback((): void => {
    setModalOpend(true);
  }, []);

  useEffect(() => {
    if (modalOpend) {
      setTimeout(() => {
        element.current.style.transition = `transform ${duration}s ease-in-out`;
        element.current.style.transform = 'unset';
      }, 50);
    }
  }, [modalOpend]);

  const modalClosedHandler = useCallback((): void => {
    element.current.style.transition = `transform ${duration}s ease-in-out`;
    element.current.style.transform = 'translateY(-100%)';

    setTimeout(() => {
      dispatch(changeCurrentModal(null));
      setModalOpend(false);
    }, duration * 1000);
  }, []);

  return [{
    ref: element,
  }, modalOpend, modalOpendHandler, modalClosedHandler] as const;
};

export default useModalToggle;
