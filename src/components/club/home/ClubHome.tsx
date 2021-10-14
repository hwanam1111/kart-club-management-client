import React from 'react';
import styled from 'styled-components';

import ClubHomeCard from './ClubHomeCard';
import ClubHomeTimeAttack from './ClubHomeTimeAttack';

const ClubHomeWrapper = styled.section``;

function ClubHome() {
  return (
    <ClubHomeWrapper>
      <ClubHomeCard />
      <ClubHomeTimeAttack />
    </ClubHomeWrapper>
  );
}

export default ClubHome;
