import React from 'react';
import styled from 'styled-components';
import useGetMyInformation from '../../hooks/useGetMyInformation';

const HomeApplyingClubWrapper = styled.section`
  background-color: #fff;
  border-radius: 12px;
  text-align: center;
  flex: 1 0 auto;
`;

const ApplyingClubTitle = styled.h1`
  margin-top: 70px;
  font-weight: 700;
  font-size: 2rem;
  color: #181c32;
`;

const ApplyingClubContent = styled.div`
  color: #b5b5c3;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 50px;
`;

const ApplyingClubAvatar = styled.img`
  margin-top: 100px;
  width: 310px;
  flex: 1;
`;

function HomeApplyingClub() {
  const { myInformation } = useGetMyInformation();

  return (
    <>
      <HomeApplyingClubWrapper>
        <ApplyingClubTitle>
          클럽 등록 신청 검수가 진행중입니다!
        </ApplyingClubTitle>
        <ApplyingClubContent>
          <p>
            검수 신청을 한 클럽명은
            {' '}
            {myInformation.club.clubName}
            {' '}
            입니다.
          </p>
          <p>최대한 빠른 시간내에 검수 결과를 알려드리겠습니다!</p>
        </ApplyingClubContent>
        <ApplyingClubAvatar src="/static/process.png" alt="클럽 신청 중 아바타" title="클럽 신청 중 아바타" />
      </HomeApplyingClubWrapper>
    </>
  );
}

export default HomeApplyingClub;
