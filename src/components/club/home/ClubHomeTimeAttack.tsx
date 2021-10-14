import React from 'react';
import styled from 'styled-components';
import ClubHomeTimeAttackItem from './ClubHomeTimeAttackItem';

const Wrapper = styled.section`
  margin-top: 60px;
`;

const Title = styled.h2`
  color: #181c32;
  font-size: 1.1rem;
  font-weight: 500;
`;

const TimeAttackBlock = styled.div`
  display: flex;
  margin-top: 30px;
`;

const NoTimeAttactItem = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 100px;
  font-size: 0.95rem;
  color: #8f96a5;
`;

const fakeListData = [
  {
    id: 1,
    videoThumbnailLink: 'https://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20210916_9D4183E6_235879126_1_r',
    videoTitle: '동영상 제목동영상 제목동영상 제목동영상 제목동영상 제목동영상 제목동영상 제목동영상 제목동영상 제목동영상 제목동영상 제목',
    postedUserId: 1,
    postedUserNickname: '작성자 유저 이름',
    viewCount: '500,000',
    postedDate: '31일 전',
    link: '/',
  },
  {
    id: 2,
    videoThumbnailLink: 'https://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20210916_9D4183E6_235879126_1_r',
    videoTitle: '동영상 제목',
    postedUserId: 1,
    postedUserNickname: '작성자 유저 이름',
    viewCount: '500,000',
    postedDate: '31일 전',
    link: '/',
  },
  {
    id: 3,
    videoThumbnailLink: 'https://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20210916_9D4183E6_235879126_1_r',
    videoTitle: '동영상 제목동영상 제목동영상 제목동영상 제목동영상 제목동영상 제목동영상 제목동영상 제목동영상 제목',
    postedUserId: 1,
    postedUserNickname: '작성자 유저 이름',
    viewCount: '500,000',
    postedDate: '31일 전',
    link: '/',
  },
  {
    id: 4,
    videoThumbnailLink: 'https://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20210916_9D4183E6_235879126_1_r',
    videoTitle: '동영상 제목',
    postedUserId: 1,
    postedUserNickname: '작성자 유저 이름',
    viewCount: '500,000',
    postedDate: '31일 전',
    link: '/',
  },
  {
    id: 5,
    videoThumbnailLink: 'https://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20210916_9D4183E6_235879126_1_r',
    videoTitle: '동영상 제목',
    postedUserId: 1,
    postedUserNickname: '작성자 유저 이름',
    viewCount: '500,000',
    postedDate: '31일 전',
    link: '/',
  },
  {
    id: 6,
    videoThumbnailLink: 'https://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20210916_9D4183E6_235879126_1_r',
    videoTitle: '동영상 제목',
    postedUserId: 1,
    postedUserNickname: '작성자 유저 이름',
    viewCount: '500,000',
    postedDate: '31일 전',
    link: '/',
  },
];

function ClubHomeTimeAttack() {
  return (
    <Wrapper>
      <Title>클럽원들의 최신 타임어택</Title>
      <TimeAttackBlock>
        {
          fakeListData && (
            fakeListData.length > 0 ? (
              fakeListData.map((v) => (
                <ClubHomeTimeAttackItem key={v.id} timeAttack={v} />
              ))
            ) : (
              <NoTimeAttactItem>
                아직 업로드된 타임어택이 없습니다.
              </NoTimeAttactItem>
            )
          )
        }
      </TimeAttackBlock>
    </Wrapper>
  );
}

export default ClubHomeTimeAttack;
