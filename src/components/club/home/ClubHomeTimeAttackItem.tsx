import React from 'react';
import Link from 'next/link';
import { BsFillPlayFill, BsDot } from 'react-icons/bs';
import styled from 'styled-components';

const Item = styled.div`
  width: calc(100% / 5 - 20px);
  margin-right: calc(100px / 4);

  &:last-child {
    display: none;
    margin-right: 0;
  }

  @media (min-width: 1600px) {
    width: calc(100% / 6 - 20px);
    margin-right: calc(120px / 5);

    &:last-child {
      display: block;
    }
  }
`;

const TimeAttackLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
`;

const VideoThumbnail = styled.img`
  object-fit: cover;
  width: 100%;
  height: 135px;
  border-radius: 3px;
`;

const VideoTitle = styled.span`
  display: -webkit-box;
  overflow: hidden;
  margin-top: 5px;
  font-weight: 400;
  color: #32353B;
  font-size: 0.9rem;
  height: 2.4rem;
  line-height: 1.2rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  text-overflow: ellipsis;
`;

const PostedUserNickname = styled.span`
  display: block;
  color: #8f96a5;
  margin-top: 10px;
  font-size: 0.8rem;
`;

const ViewCountAndPostedDate = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: #8f96a5;
  font-size: 0.8rem;
`;

const ViewCountIcon = styled.i`
  position: relative;
  top: 1px;
  margin-right: 3px;
`;

const DotIcon = styled.i`
  position: relative;
  top: 2px;
  margin: 0 2px;
`;

interface IClubHomeTimeAttackItem {
  timeAttack: {
    id: number,
    videoThumbnailLink: string,
    videoTitle: string,
    postedUserId: number,
    postedUserNickname: string,
    viewCount: string,
    postedDate: string,
    link: string
  }
}

function ClubHomeTimeAttackItem({ timeAttack }: IClubHomeTimeAttackItem) {
  return (
    <Item>
      <Link href={timeAttack.link}>
        <TimeAttackLink>
          <VideoThumbnail src={timeAttack.videoThumbnailLink} alt={timeAttack.videoTitle} title={timeAttack.videoTitle} />
          <VideoTitle>
            {timeAttack.videoTitle}
          </VideoTitle>
          <PostedUserNickname>
            {timeAttack.postedUserNickname}
          </PostedUserNickname>
          <ViewCountAndPostedDate>
            <ViewCountIcon>
              <BsFillPlayFill />
            </ViewCountIcon>
            {timeAttack.viewCount}
            <DotIcon>
              <BsDot />
            </DotIcon>
            {timeAttack.postedDate}
          </ViewCountAndPostedDate>
        </TimeAttackLink>
      </Link>
    </Item>
  );
}

export default ClubHomeTimeAttackItem;
