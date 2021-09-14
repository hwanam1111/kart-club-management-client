import React from 'react';
import { AiOutlineHome, AiOutlineProfile, AiOutlineUnorderedList } from 'react-icons/ai';
import { BiAddToQueue } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { SiGroupon, SiGoogletagmanager } from 'react-icons/si';
import { RiSendPlaneLine } from 'react-icons/ri';
import styled from 'styled-components';

import useGetMyInformation from '../../hooks/useGetMyInformation';
import NavigationMenuMain from './NavigationMenuMain';

const NavMenuWrapper = styled.ul`
  height: calc(100% - 80px);
  padding: 20px 0 30px 0;
  overflow-y: auto;
`;

const SeparateLine = styled.hr`
  display: block;
  border: 1px solid #eee;
`;

function NavigationMenu() {
  const { myInformation } = useGetMyInformation();

  return (
    <NavMenuWrapper>
      {myInformation && (
        <>
          <>
            <NavigationMenuMain
              title="홈"
              icon={<AiOutlineHome />}
              subMenu={null}
              menuLink="/"
            />
            <NavigationMenuMain
              title="등록된 클럽 리스트"
              icon={<HiOutlineUserGroup />}
              subMenu={null}
              menuLink="/clubs"
            />
          </>
          {myInformation !== 'no-user-info' && (
            <>
              <SeparateLine />
              <NavigationMenuMain
                title="내 정보 관리"
                icon={<AiOutlineProfile />}
                subMenu={[
                  { menuName: '프로필 관리', menuLink: '/users/profile' },
                  { menuName: '내 클럽 관리', menuLink: '/users/club' },
                ]}
                menuLink={null}
              />
              <SeparateLine />
              {myInformation.clubId ? (
                <>
                  <NavigationMenuMain
                    title="클럽 홈"
                    icon={<SiGroupon />}
                    subMenu={null}
                    menuLink="/club/club-name"
                  />
                  <NavigationMenuMain
                    title="클럽 게시판"
                    icon={<AiOutlineUnorderedList />}
                    subMenu={[
                      { menuName: '자기소개', menuLink: '/club/club-name/members-introduce' },
                      { menuName: '자유 게시판', menuLink: '/club/club-name/free-board' },
                      { menuName: '타임어택', menuLink: '/club/club-name/time-attack' },
                    ]}
                    menuLink={null}
                  />
                  {(myInformation.rating === 'master' || myInformation.rating === 'manager') && (
                    <NavigationMenuMain
                      title="클럽 운영진 메뉴"
                      icon={<SiGoogletagmanager />}
                      subMenu={[
                        { menuName: '클럽 가입신청자 관리', menuLink: '/club/club-name/management/application-users' },
                        { menuName: '클럽 가입공지 작성', menuLink: '/club/club-name/management/application-notice' },
                        { menuName: '테스트표 작성', menuLink: '/club/club-name/management/test' },
                        { menuName: '클럽원 관리', menuLink: '/club/club-name/management/members' },
                      ]}
                      menuLink={null}
                    />
                  )}
                </>
              ) : (
                <>
                  <NavigationMenuMain
                    title="클럽 등록하기 (마스터)"
                    icon={<BiAddToQueue />}
                    subMenu={null}
                    menuLink="/club/register"
                  />
                  <NavigationMenuMain
                    title="클럽 가입하기 (클럽원)"
                    icon={<RiSendPlaneLine />}
                    subMenu={null}
                    menuLink="/club/join"
                  />
                </>
              )}
            </>
          )}
        </>
      )}
    </NavMenuWrapper>
  );
}

export default NavigationMenu;
