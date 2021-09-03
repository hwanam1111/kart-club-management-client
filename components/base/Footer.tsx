import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  margin: 0 30px 0 280px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;

const CopyRight = styled.span`
  font-size: 0.8rem;
  font-weight: 300;
  color: #181c32;
  letter-spacing: -.3px;

  & > a {
    margin-left: 7px;
    color: #3f4254;
    font-weight: 600;
  }
`;

const GithubLink = styled.a`
  display: flex;
  align-content: center;
  justify-content: center;
  color: #3f4254;
  font-weight: 600;

  & > svg {
    margin-right: 7px;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <CopyRight>
        2021 &copy;
        <Link href="https://github.com/hwanam1111" passHref>
          <a target="_blank">
            Kim LeeJun
          </a>
        </Link>
      </CopyRight>
      <Link href="https://github.com/hwanam1111" passHref>
        <GithubLink target="_blank">
          <AiFillGithub />
          Github
        </GithubLink>
      </Link>
    </FooterWrapper>
  );
}

export default Footer;
