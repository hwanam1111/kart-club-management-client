import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import wrapper from '../store/configureStore';

// import GlobalStyles from '../components/GlobalStyles';

function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8;" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="author" content="LEEJUN KIM" />
        <meta name="subject" content="카트라이더 클럽 매니저" />
        <meta name="description" content="카트라이더 클럽 관리 프로그램" />
        <meta name="keywords" content="카트라이더, 카트라이더 tmi, 카트라이더 클럽, 카트라이더 클럽 관리, 카트, 카트 tmi, 카트 클럽, 카트 클럽 관리" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="카트라이더 클럽 매니저" />
        <meta property="og:description" content="카트라이더 클럽 관리 프로그램" />
        <meta property="og:image" content="" />
        <meta property="og:image:secure_url" content="" />
        <title>카트라이더 클럽 매니저</title>
      </Head>
      {/* <GlobalStyles /> */}
      <Component />
    </>
  );
}

export default wrapper.withRedux(App);
