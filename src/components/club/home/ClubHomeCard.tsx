import React from 'react';
import styled from 'styled-components';
import ClubHomeCardItem from './ClubHomeCardItem';

const Wrapper = styled.section`
  display: flex;
`;

const fakeListData = [
  {
    id: 1,
    title: '제목 테스트입니다.',
    date: '2021-10-14',
    link: '/',
  },
  {
    id: 2,
    title: '제목 테스트입니다.제목 테스트입니다.제목 테스트입니다.제목 테스트입니다.제목 테스트입니다.제목 테스트입니다.',
    date: '2021-10-14',
    link: '/',
  },
  {
    id: 3,
    title: '제목 테스트입니다.제목 테스트입니다.제목 테스트입니다.',
    date: '2021-10-14',
    link: '/',
  },
  {
    id: 4,
    title: '제목 테스트입니다.제목 테스트입니다.제목 테스트입니다.제목 테스트입니다.',
    date: '2021-10-14',
    link: '/',
  },
  {
    id: 5,
    title: '제목 테스트입니다.',
    date: '2021-10-14',
    link: '/',
  },
  {
    id: 6,
    title: '제목 테스트입니다.제목 테스트입니다.제목 테스트입니다.제목 테스트입니다.제목 테스트입니다.제목 테스트입니다.제목 테스트입니다.',
    date: '2021-10-14',
    link: '/',
  },
];

function ClubHomeCard() {
  return (
    <Wrapper>
      <ClubHomeCardItem
        title="클럽 공지사항"
        cardItemList={fakeListData}
      />
      <ClubHomeCardItem
        title="자유게시판"
        cardItemList={fakeListData}
      />
      <ClubHomeCardItem
        title="업데이트 로그"
        cardItemList={fakeListData}
      />
    </Wrapper>
  );
}

export default ClubHomeCard;
