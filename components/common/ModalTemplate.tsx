import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 10000;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrppaer = styled.div`
  padding: 100px 50px;
  border-radius: 7px;
  background-color: #fff;
  text-align: center;
`;

const ModalTitle = styled.h3`
  color: #181c32;
  font-size: 1.7rem;
  font-weight: 600;
`;

interface ModalTemplateProps {
  title: string,
  children: React.ReactNode
}

function ModalTemplate({ title, children }: ModalTemplateProps) {
  return (
    <ModalOverlay>
      <ModalWrppaer>
        <ModalTitle>{title}</ModalTitle>
        {children}
      </ModalWrppaer>
    </ModalOverlay>
  );
}

export default ModalTemplate;
