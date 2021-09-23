import React from 'react';
import styled from 'styled-components';

import ModalTemplate from '../../common/modal/ModalTemplate';

const QuestionModal = styled.div`
  margin-top: 50px;
  width: 600px;
`;

const VerifyMasterReason = styled.div`
  font-size: 1.05rem;
  color: #a1a5b7;

  & > p {
    line-height: 1.6;

    & > b {
      font-weight: 900;
      font-size: 1.1rem;
    }
  }
`;

const SampleImage = styled.img`
  margin-top: 30px;
  width: 500px;
  height: 450px;
  border-radius: 5px;
`;

interface ClubRegisterFormVerifyMasterQuestionModalProps {
  modalAnimation: {
    ref: any,
  },
  onCloseModal: () => void,
}

function ClubRegisterFormVerifyMasterQuestionModal({ modalAnimation, onCloseModal }: ClubRegisterFormVerifyMasterQuestionModalProps) {
  return (
    <>
      <ModalTemplate title="마스터 검증" modalAnimation={modalAnimation} onCloseModal={onCloseModal}>
        <QuestionModal>
          <VerifyMasterReason>
            <p>내가 운영하는 클럽이 아님에도, 신청을 하는 것을 방지하기 위해 마스터 검증이 필요합니다.</p>
            <p>만약, 내가 운영하는 클럽이 아님이 확인될 시 클럽 소유권이 박탈 될 수 있습니다.</p>
            <p><b>검증을 위해 아래와 같은 화면을 업로드해주세요!</b></p>
          </VerifyMasterReason>
          <SampleImage src="/static/sample_verify_master_image.jpg" alt="마스터 검증 샘플 이미지" title="마스터 검증 샘플 이미지" />
        </QuestionModal>
      </ModalTemplate>
    </>
  );
}

export default ClubRegisterFormVerifyMasterQuestionModal;
