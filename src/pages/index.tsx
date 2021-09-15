import React from 'react';

import PageTemplete from '../components/base/PageTemplate';
import HomePleaseLogin from '../components/home/HomePleaseLogin';
import HomePleaseRegisterClub from '../components/home/HomePleaseRegisterClub';
import HomeTopButton from '../components/home/HomeTopButton';
import useGetMyInformation from '../hooks/useGetMyInformation';

function MainPage() {
  const { myInformation } = useGetMyInformation();

  return (
    <PageTemplete
      pageTitle="홈"
      pagePath="홈 / 메인페이지"
      topRightContent={(!myInformation || myInformation === 'no-user-info') && <HomeTopButton />}
    >
      {myInformation && myInformation !== 'no-user-info' ? (
        <>
          {!myInformation.clubId ? (
            <HomePleaseRegisterClub />
          ) : (
            <div>클럽에 가입되었음</div>
          )}
        </>
      ) : (
        <HomePleaseLogin />
      )}
    </PageTemplete>
  );
}

export default MainPage;
