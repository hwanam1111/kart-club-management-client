import React from 'react';

import PageTemplete from '../components/base/PageTemplate';
import HomePleaseLogin from '../components/home/HomePleaseLogin';
import HomeTopButton from '../components/home/HomeTopButton';

function MainPage() {
  return (
    <PageTemplete
      pageTitle="홈"
      pagePath="홈 / 메인페이지"
      topRightContent={<HomeTopButton />}
    >
      <HomePleaseLogin />
    </PageTemplete>
  );
}

export default MainPage;
