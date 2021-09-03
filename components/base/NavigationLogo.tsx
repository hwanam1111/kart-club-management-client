import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavLogoWrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: flex-end;
`;

const LogoLink = styled.a``;

const LogoImage = styled.img`
  width: 90px;
`;

function NavigationLogo() {
  return (
    <NavLogoWrapper>
      <Link href="/">
        <LogoLink>
          <LogoImage src="/static/logo.png" alt="로고" title="로고" />
        </LogoLink>
      </Link>
    </NavLogoWrapper>
  );
}

export default NavigationLogo;
