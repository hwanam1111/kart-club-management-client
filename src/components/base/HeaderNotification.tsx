import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';

const HeaderNotificationOverlay = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const NotificationWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  height: 100vh;
  width: 400px;
  overflow-y: auto;
  box-shadow: 0 1px 9px -3px rgb(0 0 0 / 5%);
`;

const NotificationHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  min-height: 70px;
  padding: 0 2.25rem;
  border-bottom: 1px solid #eff2f5;
`;

const HeaderTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
`;

const CloseBtn = styled.button`
  color: #a1a5b7;
  font-size: 1.2rem;
  padding: 5px;
  display: flex;
  align-items: center;
  transition: .2s;

  &:hover {
    color: #00a3ff;
    background-color: #f1faff;
  }
`;

export interface HeaderNotificationParams {
  onClose: () => void,
  slideAnimation: {
    ref: any,
    style: {
      transform: string
    }
  },
}

function HeaderNotification({ onClose, slideAnimation }: HeaderNotificationParams) {
  return (
    <HeaderNotificationOverlay>
      <NotificationWrapper {...slideAnimation}>
        <NotificationHeader>
          <HeaderTitle>최근 알람</HeaderTitle>
          <CloseBtn type="button" onClick={onClose}>
            <AiOutlineClose />
          </CloseBtn>
        </NotificationHeader>
      </NotificationWrapper>
    </HeaderNotificationOverlay>
  );
}

export default HeaderNotification;
