import React, { useRef } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import Link from 'next/link';
import styled from 'styled-components';

import NavigationMenuSub from './NavigationMenuSub';
import useNavigationToggleMenu from '../../hooks/useNavigationToggleMenu';

interface NavigationMenuMainProps {
  title: string,
  icon: any,
  subMenu: Array<{menuName: string, menuLink: string}> | null,
  menuLink: string | null
}

const MenuListWrapper = styled.li`
  position: relative;
  background-color: #fff;

`;

const MainMenuLink = styled.a`
  color: #7e8299;
  display: flex;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  font-weight: 500;
  transition: color .3s ease;

  &:hover {
    color: var(--main-color);
  }
`;

const SubMenuToggleBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  transition: color .3s ease;

  &:hover {
    color: var(--main-color);
  }

  ${(props : { menuOpendStatus: boolean }) => (props.menuOpendStatus ? `
    color: var(--main-color);
  ` : `
    color: #7e8299;
  `)}
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
  const menuArrowRef = useRef<HTMLSpanElement>(null);
  const [openSlide, subMenuOpend, setSubMenuOpend, setSubMenuClosed] = useNavigationToggleMenu(0.5, false, menuArrowRef);

  return (
    <MenuListWrapper>
      {subMenu ? (
        <>
          <SubMenuToggleBtn type="button" onClick={subMenuOpend ? setSubMenuClosed : setSubMenuOpend} menuOpendStatus={subMenuOpend}>
            <MenuIcon>{icon}</MenuIcon>
            <MenuName>{title}</MenuName>
            <MenuArrow ref={menuArrowRef}>
              <BiChevronDown />
            </MenuArrow>
          </SubMenuToggleBtn>
          {subMenuOpend && (
            <NavigationMenuSub
              subMenu={subMenu}
              slideAnimation={openSlide}
            />
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
