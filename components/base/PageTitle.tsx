import React from 'react';
import styled from 'styled-components';

const PageTitleWrapper = styled.div``;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: #181c32;
`;

const PagePath = styled.span`
  display: block;
  margin-top: 15px;
  color: #a1a5b7;
  font-size: 0.9rem;
`;

interface PageTitleProps {
  pageTitle: string,
  pagePath: string,
}

function PageTitle({ pageTitle, pagePath }: PageTitleProps) {
  return (
    <PageTitleWrapper>
      <Title>
        {pageTitle}
      </Title>
      <PagePath>
        {pagePath}
      </PagePath>
    </PageTitleWrapper>
  );
}

export default PageTitle;
