import React from 'react';
import Link from 'next/link';
import { BsDot } from 'react-icons/bs';
import styled from 'styled-components';

const NavigationMenuSubWrapper = styled.ul`

`;

const SubMenuItem = styled.li`
  /* color: var(--main-color);
  background-color: var(--main-color-light-bg); */
  color: #7e8299;
`;

const SubMenuLink = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 11px 15px;
`;

const DotIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 7px;
`;

const MenuName = styled.span`

`;

interface NavigationMenuSubProps {
  subMenu: Array<{menuName: string, menuLink: string}>
}

function NavigationMenuSub({ subMenu }: NavigationMenuSubProps) {
  return (
    <NavigationMenuSubWrapper>
      {subMenu.map((menu) => (
        <SubMenuItem key={menu.menuName}>
          <Link href={menu.menuLink}>
            <SubMenuLink>
              <DotIcon>
                <BsDot />
              </DotIcon>
              <MenuName>
                {menu.menuName}
              </MenuName>
            </SubMenuLink>
          </Link>
        </SubMenuItem>
      ))}
    </NavigationMenuSubWrapper>
  );
}

export default NavigationMenuSub;
