import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingWrapper = styled.div`
  display: flex;
  display: -webkit-flex;
  background: rgba(0, 0, 0, 0.6);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 5000000;
  align-content: center;
  -webkit-justify-content: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingAnimation = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-name: ${loading};
  animation-iteration-count: infinite;

  & > div {
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    border: 3px solid #fff;
    border-radius: 50%;
    animation: loading-animation 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }

  & > div::nth-child(1) {
    animation-delay: -0.45s;
  }

  & > div::nth-child(2) {
    animation-delay: -0.3s;
  }

  & > div::nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const LoadingContent = styled.div`
  margin-top: 30px;
  font-size: 15px;
  color: #fff;
  padding: 0 15px;
  word-break: keep-all;
  text-align: center;
`;

interface LoadingProps {
  message: string,
}

const Loading = ({ message }: LoadingProps) => (
  <LoadingWrapper>
    <LoadingAnimation>
      <div />
      <div />
      <div />
      <div />
    </LoadingAnimation>
    <LoadingContent>
      {message}
    </LoadingContent>
  </LoadingWrapper>
);

export default Loading;
