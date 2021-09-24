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
          {!myInformation?.club?.id ? (
            <HomePleaseRegisterClub />
          ) : (
            <>
              {myInformation.club.isVerifiedComplete === 0 ? (
                <div>승인x</div>
              ) : (
                <div>승인o</div>
              )}
            </>
          )}
        </>
      ) : (
        <HomePleaseLogin />
      )}
    </PageTemplete>
  );
}

export default MainPage;
