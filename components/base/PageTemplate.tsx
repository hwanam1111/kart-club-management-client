import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Navigation from './Navigation';

interface PageTempleteProps {
  children: React.ReactNode
}

function PageTemplete({ children }: PageTempleteProps) {
  const Wrapper = styled.section`
    background-color: #f5f8fa;
    margin: 65px 30px 0 280px;
    padding: 30px;
    border-radius: 1.5rem;
    min-height: calc(100vh - 65px);
  `;

  return (
    <>
      <Header />
      <Navigation />
      <Wrapper>
        {children}
      </Wrapper>
    </>
  );
}

export default PageTemplete;
