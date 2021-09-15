import React from 'react';
import styled from 'styled-components';

import NavigationLogo from './NavigationLogo';
import NavigationMenu from './NavigationMenu';

const NavWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 280px;
  background-color: #fff;
  padding: 0 30px;
`;

function Navigation() {
  return (
    <NavWrapper>
      <NavigationLogo />
      <NavigationMenu />
    </NavWrapper>
  );
}

export default Navigation;
