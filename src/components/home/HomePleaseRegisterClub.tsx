import React, { useCallback } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import Swal from 'sweetalert2';

const HomePleaseRegisterClubWrapper = styled.section`
  background-color: #fff;
  border-radius: 12px;
  text-align: center;
  flex: 1 0 auto;
`;

const PleaseRegisterClubTitle = styled.h1`
  margin-top: 70px;
  font-weight: 700;
  font-size: 2rem;
  color: #181c32;
`;

const PleaseRegisterClubContent = styled.div`
  color: #b5b5c3;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 50px;
`;

const PleaseRegisterClubButtonWrapper = styled.div`
  margin: 70px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  display: block;
  border-radius: 5px;
  padding: 10px 15px;
  color: #fff;
  background-color: var(--main-color);
  transition: background-color .2s;
  margin-right: 20px;

  &:hover {
    background-color: var(--main-color-bold);
  }

  &:last-child {
    margin-right: 0;
  }
`;

const RegisterClubAvatar = styled.img`
  margin-top: 100px;
  width: 500px;
  border: 0;
`;

function HomePleaseRegisterClub() {
  const onClickRegisterClubBtn = useCallback((): void => {
    Swal.fire({
      html: '클럽 등록은 클럽 마스터만 가능합니다.<br/><br/>현재 내가 카트라이더에서 클럽 마스터를 담당하고 있나요?<br/><br/>맞으시다면 클럽 등록하기 버튼을 눌러주세요!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '클럽 등록하기',
      cancelButtonText: '취소하기',
    }).then((result) => {
      if (result.isConfirmed) {
        Router.push('/club/register');
      }
    });
  }, []);

  const onClickJoinClubBtn = useCallback((): void => {
    Swal.fire({
      html: '현재 내가 카트라이더 클럽에 소속되어있나요?<br/><br/>만약 카트라이더 클럽에 소속되어있는데 이곳에 클럽이 없다면, 클럽 마스터에게 클럽을 등록하라고 해보세요!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '클럽 가입하기',
      cancelButtonText: '취소하기',
    }).then((result) => {
      if (result.isConfirmed) {
        Router.push('/club/join');
      }
    });
  }, []);

  return (
    <>
      <HomePleaseRegisterClubWrapper>
        <PleaseRegisterClubTitle>
          내가 소속된 클럽에 가입하거나, 클럽을 등록해봐요!
        </PleaseRegisterClubTitle>
        <PleaseRegisterClubContent>
          <p>내가 클럽의 마스터라면 내 클럽을 등록해봐요!</p>
          <p>내가 소속된 클럽이 존재하는지 확인해보고, 클럽이 있다면 클럽원들과 소통해봐요!</p>
        </PleaseRegisterClubContent>
        <PleaseRegisterClubButtonWrapper>
          <Button type="button" onClick={onClickRegisterClubBtn}>
            클럽 등록하기
          </Button>
          <Button type="button" onClick={onClickJoinClubBtn}>
            클럽 가입하기
          </Button>
        </PleaseRegisterClubButtonWrapper>
        <RegisterClubAvatar src="/static/community.png" alt="클럽 가입 아바타" title="클럽 가입 아바타" />
      </HomePleaseRegisterClubWrapper>
    </>
  );
}

export default HomePleaseRegisterClub;
