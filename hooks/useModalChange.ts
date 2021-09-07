import { useCallback } from 'react';

const useModalChange = (closedModal: () => void, opendModal: () => void, delay: number) => {
  const onChangeModal = useCallback((): void => {
    closedModal();
    setTimeout(() => {
      opendModal();
    }, delay * 1000);
  }, []);

  return onChangeModal;
};

export default useModalChange;
