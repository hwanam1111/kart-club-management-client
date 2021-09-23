import React, { useCallback, useEffect, useRef } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import useModalToggle from '../../../hooks/modal/useModalToggle';

import { resetClubMasterVerifyImageUpload, clubMasterVerifyImageUploadAsync } from '../../../store/actions/club';
import { RootState } from '../../../store/reducers';
import ClubRegisterFormVerifyMasterQuestionModal from './ClubRegisterFormVerifyMasterQuestionModal';

const ClubRegisterFormVerifyMasterWrapper = styled.div`
  margin-top: 30px;
`;

const QuestionButton = styled.button`
  font-size: 0.9rem;
  color: #181c32;
  font-weight: 600;
  margin-left: 3px;

  & > svg {
    font-size: 0.9rem;
    margin-left: 7px;
    position: relative;
    top: 2px;
  }
`;

const AddImageButton = styled.button`
  position: relative;
  display: block;
  margin-top: 10px;
  height: 450px;
  border: 1px solid #eee;
  width: 100%;
  border-radius: 5px;
  z-index: 0;
`;

const ImageThumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  z-index: -1;
  pointer-events: none;
`;

const AddImageButtonText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  padding: 7px 12px;
  border-radius: 12px;
  background-color: #fff;

  & > svg {
    position: relative;
    top: 2px;
    margin-right: 3px;
  }
`;

interface ClubRegisterFormVerifyMasterProps {
  setImageFile: (imageUrl: string) => void,
}

function ClubRegisterFormVerifyMaster({ setImageFile }: ClubRegisterFormVerifyMasterProps) {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state: RootState) => state.club.clubMasterVerifyImageUpload);

  const imageFileRef = useRef(null);

  const onClickAddImageBtn = useCallback(() => {
    imageFileRef.current.click();
  }, []);

  const onChangeImageFile = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files.length > 0) {
      const imageFormData = new FormData();
      Array.from(evt.target.files).forEach((file) => {
        imageFormData.append('image', file);
      });

      dispatch(clubMasterVerifyImageUploadAsync.request(imageFormData));
    }
  }, []);

  useEffect(() => {
    if (data) {
      setImageFile(data.imageUrl);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: 'error',
        text: '서버에러가 발생하였습니다.\n잠시후 다시 이용해주세요.',
      });

      dispatch(resetClubMasterVerifyImageUpload());
    }
  }, [error]);

  const [modalAnimation, isLModalOpend, setModalOpend, setModalClosed] = useModalToggle(0.4, false);

  return (
    <>
      <ClubRegisterFormVerifyMasterWrapper>
        <QuestionButton type="button" onClick={setModalOpend}>
          클럽 마스터 증명
          <BsQuestionCircle />
        </QuestionButton>
        <AddImageButton type="button" onClick={onClickAddImageBtn}>
          {data?.imageUrl && (
            <ImageThumbnail src={data?.imageUrl} alt="클럽 마스터 증명 이미지" title="클럽 마스터 증명 이미지" />
          )}
          <AddImageButtonText>
            <AiOutlinePlus />
            증명 할 사진 첨부하기
          </AddImageButtonText>
        </AddImageButton>
        <input type="file" ref={imageFileRef} onChange={onChangeImageFile} accept=".jpg, .jpeg, .png" hidden />
      </ClubRegisterFormVerifyMasterWrapper>
      {isLModalOpend && (
        <ClubRegisterFormVerifyMasterQuestionModal
          modalAnimation={modalAnimation}
          onCloseModal={setModalClosed}
        />
      )}
    </>
  );
}

export default ClubRegisterFormVerifyMaster;
