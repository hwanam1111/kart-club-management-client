import React, { useState, useCallback } from 'react';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import Link from 'next/link';
import styled from 'styled-components';

import NavigationMenuSub from './NavigationMenuSub';

interface NavigationMenuMainProps {
  title: string,
  icon: any,
  subMenu: Array<{menuName: string, menuLink: string}> | null,
  menuLink: string | null
}

const MenuListWrapper = styled.li`
  /* margin-bottom: 30px; */

`;

const MainMenuLink = styled.a`
  /* color: var(--main-color); */
  color: #7e8299;
  display: flex;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  font-weight: 500;
`;

const SubMenuToggleBtn = styled.button`
  color: #7e8299;
  display: flex;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
`;

const MenuIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 8px;
  font-size: 1.45em;
`;

const MenuName = styled.span`
  font-size: 1.1em;
  flex-grow: 1;
  text-align: left;
`;

const MenuArrow = styled.span`
  font-size: 1em;
`;

function NavigationMenuMain({ title, icon, subMenu, menuLink }: NavigationMenuMainProps) {
  const [subMenuOpend, setSubMenuOpend] = useState(false);
  const onClickSubmenuToggleBtn = useCallback((): void => {
    setSubMenuOpend((prevData) => !prevData);
  }, []);

  return (
    <MenuListWrapper>
      {subMenu ? (
        <>
          <SubMenuToggleBtn type="button" onClick={onClickSubmenuToggleBtn}>
            <MenuIcon>{icon}</MenuIcon>
            <MenuName>{title}</MenuName>
            <MenuArrow><BiChevronDown /></MenuArrow>
          </SubMenuToggleBtn>
          {subMenuOpend && (
            <NavigationMenuSub subMenu={subMenu} />
          )}
        </>
      ) : (
        <Link href={menuLink}>
          <MainMenuLink>
            <MenuIcon>{icon}</MenuIcon>
            <MenuName>{title}</MenuName>
          </MainMenuLink>
        </Link>
      )}
    </MenuListWrapper>
  );
}

export default NavigationMenuMain;
