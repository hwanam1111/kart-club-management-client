import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { RootState } from '../../store/reducers';
import { getMyInformationAsync } from '../../store/actions/user';

interface GetMyInformationProps {
  children: React.ReactNode
}

function GetMyInformation({ children }: GetMyInformationProps) {
  const { error } = useSelector((state: RootState) => state.user.myInformation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyInformationAsync.request());
  }, []);

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: 'error',
        text: '서버에러가 발생하였습니다.\n잠시후 다시 이용해주세요.',
      });
    }
  }, [error]);

  return (
    <>
      {children}
    </>
  );
}

export default GetMyInformation;
