import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeCurrentModal } from '../../store/actions/user';

const useModalChange = (changeModalName: string, closedModal: () => void, delay: number) => {
  const dispatch = useDispatch();
  const onChangeModal = useCallback((): void => {
    closedModal();
    setTimeout(() => {
      dispatch(changeCurrentModal(changeModalName));
    }, delay * 1000);
  }, []);

  return onChangeModal;
};

export default useModalChange;
