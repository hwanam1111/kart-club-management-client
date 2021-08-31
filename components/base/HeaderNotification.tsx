import React from 'react';
import styled from 'styled-components';

import useOpenSlide from '../../hooks/useOpenSlide';

const HeaderNotificationOverlay = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const HeaderNotificationWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  height: 100vh;
  width: 400px;
  overflow-y: auto;
  box-shadow: 0 1px 9px -3px rgb(0 0 0 / 5%);
`;

interface HeaderNotificationParams {
  onClose: () => void
}

function HeaderNotification({ onClose }: HeaderNotificationParams) {
  const openSlide = useOpenSlide('right', 0.3);

  return (
    <HeaderNotificationOverlay>
      <HeaderNotificationWrapper {...openSlide} />
    </HeaderNotificationOverlay>
  );
}

export default HeaderNotification;
