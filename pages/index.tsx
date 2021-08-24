import React from 'react';

import GetMyInformation from '../containers/base/GetMyInformation';
import Header from '../components/base/Header';

function MainPage() {
  return (
    <GetMyInformation>
      <Header />
    </GetMyInformation>
  );
}

export default MainPage;
