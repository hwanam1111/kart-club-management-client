import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
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
  position: relative;
  padding: 100px 50px;
  border-radius: 7px;
  background-color: #fff;
  text-align: center;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
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

const ModalTitle = styled.h3`
  color: #181c32;
  font-size: 1.7rem;
  font-weight: 600;
`;

interface ModalTemplateProps {
  title: string,
  onCloseModal: () => void,
  children: React.ReactNode
}

function ModalTemplate({ title, onCloseModal, children }: ModalTemplateProps) {
  return (
    <ModalOverlay>
      <ModalWrppaer>
        <CloseBtn type="button" onClick={onCloseModal}>
          <AiOutlineClose />
        </CloseBtn>
        <ModalTitle>{title}</ModalTitle>
        {children}
      </ModalWrppaer>
    </ModalOverlay>
  );
}

export default ModalTemplate;
