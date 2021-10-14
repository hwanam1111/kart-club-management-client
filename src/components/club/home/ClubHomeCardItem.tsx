import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 5px 5px 5px -5px rgb(0 0 0 / 21%);
  width: calc((100% / 3) - 20px);
  margin-right: 30px;
  
  &:last-child {
    margin-right: 0;
  }
`;

const CardTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--main-color-bold);
  border-bottom: 1px solid var(--main-color);
  padding-bottom: 15px;
`;

const CardBodyBlock = styled.ul`
  margin-top: 10px;
`;

const CardBodyItem = styled.li``;

const CardBodyItemLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
  padding: 10px 0;
`;

const CardBodyItemTitle = styled.span`
  display: inline-block;
  width: calc(100% - 100px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardBodyItemDate = styled.span`
  display: inline-block;
  width: 100px;
  text-align: right;
`;

const NoCardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 170px;
  font-size: 0.95rem;
  color: #8f96a5;
`;

interface IClubHomeCardItem {
  title: string,
  cardItemList: Array<{
    id: number,
    title: string,
    date: string,
    link: string
  }>
}

function ClubHomeCardItem({ title, cardItemList }: IClubHomeCardItem) {
  return (
    <Wrapper>
      <CardTitle>{title}</CardTitle>
      <CardBodyBlock>
        {cardItemList && (
          cardItemList.length > 0 ? (
            cardItemList.map((v) => (
              <CardBodyItem key={v.id}>
                <Link href={v.link}>
                  <CardBodyItemLink>
                    <CardBodyItemTitle>{v.title}</CardBodyItemTitle>
                    <CardBodyItemDate>{v.date}</CardBodyItemDate>
                  </CardBodyItemLink>
                </Link>
              </CardBodyItem>
            ))
          ) : (
            <NoCardItem>
              아직 작성된 게시글이 없습니다.
            </NoCardItem>
          )
        )}
      </CardBodyBlock>
    </Wrapper>
  );
}

export default ClubHomeCardItem;
