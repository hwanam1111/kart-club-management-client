import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Navigation from './Navigation';
import PageTitle from './PageTitle';

interface PageTempleteProps {
  children: React.ReactNode
  pageTitle: string,
  pagePath: string
  topRightContent: any,
}

const Wrapper = styled.main`
  background-color: #f5f8fa;
  margin: 65px 30px 0 280px;
  padding: 30px;
  border-radius: 1.5rem;
  min-height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
`;

const PageTopWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

function PageTemplete({ children, pageTitle, pagePath, topRightContent }: PageTempleteProps) {
  return (
    <>
      <Header />
      <Navigation />
      <Wrapper>
        <PageTopWrapper>
          <PageTitle pageTitle={pageTitle} pagePath={pagePath} />
          {topRightContent}
        </PageTopWrapper>
        {children}
      </Wrapper>
    </>
  );
}

export default PageTemplete;
