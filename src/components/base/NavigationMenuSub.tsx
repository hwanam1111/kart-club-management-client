import React from 'react';
import Link from 'next/link';
import { BsDot } from 'react-icons/bs';
import styled from 'styled-components';

const NavigationMenuSubWrapper = styled.ul`
  overflow-y: hidden;
`;

const SubMenuItem = styled.li`
  color: #7e8299;
  transition: color .15s ease;

  &:hover {
    color: var(--main-color);
  }
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
  subMenu: Array<{ menuName: string, menuLink: string }>,
  slideAnimation: {
    ref: any,
    style: {
      maxHeight: string
    }
  },
}

function NavigationMenuSub({ subMenu, slideAnimation }: NavigationMenuSubProps) {
  return (
    <NavigationMenuSubWrapper {...slideAnimation}>
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
