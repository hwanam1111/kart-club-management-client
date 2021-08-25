import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/reducers';
import { getMyInformationAsync } from '../../store/actions/user';

interface GetMyInformationProps {
  children: React.ReactNode
}

function GetMyInformation({ children }: GetMyInformationProps) {
  const { data, loading, error } = useSelector((state: RootState) => state.user.myInformation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyInformationAsync.request());
  }, []);

  return (
    <>
      {children}
    </>
  );
}

export default GetMyInformation;
