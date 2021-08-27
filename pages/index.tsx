import React from 'react';

import GetMyInformation from '../containers/base/GetMyInformation';
import HeaderContainer from '../containers/base/HeaderContainer';

function MainPage() {
  return (
    <GetMyInformation>
      <HeaderContainer />
    </GetMyInformation>
  );
}

export default MainPage;
