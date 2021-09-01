import React from 'react';
import { AiOutlineProfile } from 'react-icons/ai';
import styled from 'styled-components';

import NavigationMenuMain from './NavigationMenuMain';

const NavMenuWrapper = styled.ul`
  height: calc(100% - 80px);
  padding: 20px 0 30px 0;
  overflow-y: auto;
`;

function NavigationMenu() {
  return (
    <NavMenuWrapper>
      <NavigationMenuMain
        title="내 정보 관리"
        icon={<AiOutlineProfile />}
        subMenu={[
          { menuName: '프로필 관리', menuLink: '/users/profile' },
          { menuName: '클럽 관리', menuLink: '/users/club' },
        ]}
        menuLink={null}
      />
      <NavigationMenuMain
        title="등록된 클럽 목록"
        icon={<AiOutlineProfile />}
        subMenu={null}
        menuLink="/clubs"
      />
      <NavigationMenuMain
        title="테스트"
        icon={<AiOutlineProfile />}
        subMenu={null}
        menuLink="/clubs"
      />
      <NavigationMenuMain
        title="테스트2222"
        icon={<AiOutlineProfile />}
        subMenu={null}
        menuLink="/clubs"
      />
      <NavigationMenuMain
        title="리스트"
        icon={<AiOutlineProfile />}
        subMenu={[
          { menuName: '프로필 관리', menuLink: '/users/profile' },
          { menuName: '메뉴 3 2 12', menuLink: '/users/club' },
          { menuName: '메뉴 3 2 13', menuLink: '/users/club' },
          { menuName: '메뉴 3 2 1 4', menuLink: '/users/club' },
        ]}
        menuLink={null}
      />
      <NavigationMenuMain
        title="리스트입니다아"
        icon={<AiOutlineProfile />}
        subMenu={[
          { menuName: '메뉴1', menuLink: '/users/profile' },
        ]}
        menuLink={null}
      />
    </NavMenuWrapper>
  );
}

export default NavigationMenu;
