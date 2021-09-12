import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Swal from 'sweetalert2';

import wrapper from '../store/configureStore';
import GlobalStyles from '../GlobalStyles';
import { RootState } from '../store/reducers';
import { getMyInformationAsync } from '../store/actions/user';
import UserModal from '../components/common/modal/user';

function App({ Component }: AppProps) {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state: RootState) => state.user.myInformation);

  useEffect(() => {
    dispatch(getMyInformationAsync.request());
  }, []);

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: 'error',
        text: '서버에러가 발생하였습니다.\n잠시후 다시 이용해주세요.',
      });
    }
  }, [error]);

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
        <title>.</title>
      </Head>
      <GlobalStyles />
      {(data || error) && <Component />}
      <UserModal />
    </>
  );
}

export default wrapper.withRedux(App);
