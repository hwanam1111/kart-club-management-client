import React from 'react';
import styled from 'styled-components';
import useGetMyInformation from '../../hooks/useGetMyInformation';

const HeaderUserMenuProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

const MyProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: .475rem;
`;

const MyProfileTextBox = styled.div`
  margin-left: 20px;
`;

const MyNickname = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #181c32;
  font-size: 1rem;
  font-weight: 600;

  & > .rating {
    background-color: #e8fff3;
    color: #50cd89;
    font-size: 0.75em;
    border-radius: .475rem;
    padding: 4px 6px;
    margin-left: 5px;
  }
`;

const MyClubName = styled.span`
  display: block;
  margin-top: 8px;
  font-size: 0.8rem;
  color: #a1a5b7;
`;

const PleaseLogin = styled.span`
  font-size: 1.1rem;
  color: #181c32;
`;

function HeaderUserMenuProfile() {
  const { myInformation } = useGetMyInformation();

  return (
    <HeaderUserMenuProfileWrapper>
      <MyProfileImage
        src={myInformation?.profileImageUri || '/static/user.png'}
        alt="프로필 사진"
      />
      <MyProfileTextBox>
        {myInformation && myInformation !== 'no-user-info' ? (
          <>
            <MyNickname>
              {myInformation?.currentNickname || ''}
              <span className="rating">
                {myInformation?.rating || '소속 클럽 없음'}
              </span>
            </MyNickname>
            {myInformation?.clubId && <MyClubName>KoguryoEmpire</MyClubName>}
          </>
        ) : (
          <PleaseLogin>
            로그인을 해주세요.
          </PleaseLogin>
        )}
      </MyProfileTextBox>
    </HeaderUserMenuProfileWrapper>
  );
}

export default HeaderUserMenuProfile;
