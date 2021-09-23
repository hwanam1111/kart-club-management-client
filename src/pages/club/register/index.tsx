import React from 'react';
import Router from 'next/router';

import PageTemplete from '../../../components/base/PageTemplate';
import useGetMyInformation from '../../../hooks/useGetMyInformation';
import ClubRegisterForm from '../../../components/club/register/ClubRegisterForm';

function MainPage() {
  const { myInformation } = useGetMyInformation();

  if (myInformation === 'no-user-info') {
    Router.push('/');
  }

  return (
    <>
      {(myInformation && myInformation !== 'no-user-info') && (
        <PageTemplete
          pageTitle="클럽 등록하기"
          pagePath="클럽 / 클럽 등록"
          topRightContent=""
        >
          <ClubRegisterForm />
        </PageTemplete>
      )}
    </>
  );
}

export default MainPage;
