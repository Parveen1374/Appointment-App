import React from "react";
import ContainerTemplate from "../../../../ContainerTemplate";
import styled from "styled-components";

const CommentsCard = () => {
  return (
    <ContainerTemplate text={"Featured Reviews (102)"}>
      <CommentsContainer>
        <CommentItem>
          <Profile>
            <ProfileImage src="/assets/profileLogo.png" alt="profile" />
            <ProfileNameSpecialize>
              <ProfileName>Alicent Hightower</ProfileName>
              <ProfileSpecialize>Consulted for Skin Care</ProfileSpecialize>
            </ProfileNameSpecialize>
            <ProfileDate>20 January 2013</ProfileDate>
          </Profile>
          <RatingImages src="/assets/stars.png" alt="5 Star" />
          <CommentText>
            Might be bit early to confirm but yes I can see noticeable
            difference in my hairfall. will write again after using it for long
            periods
          </CommentText>
        </CommentItem>
        <CommentItem>
          <Profile>
            <ProfileImage src="/assets/profileLogo.png" alt="profile" />
            <ProfileNameSpecialize>
              <ProfileName>Alicent Hightower</ProfileName>
              <ProfileSpecialize>Consulted for Skin Care</ProfileSpecialize>
            </ProfileNameSpecialize>
            <ProfileDate>20 January 2013</ProfileDate>
          </Profile>
          <RatingImages src="/assets/stars.png" alt="5 Star" />
          <CommentText>
            Might be bit early to confirm but yes I can see noticeable
            difference in my hairfall. will write again after using it for long
            periods
          </CommentText>
        </CommentItem>
      </CommentsContainer>
    </ContainerTemplate>
  );
};

export default CommentsCard;

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  background-color: #f2f2f2;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
`;

const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

const ProfileNameSpecialize = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #333;
`;

const ProfileName = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;

const ProfileSpecialize = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0;
`;

const ProfileDate = styled.p`
  font-size: 12px;
  color: #999;
  margin-left: auto;
`;

const RatingImages = styled.img`
  width: 100px;
  height: 20px;
  object-fit: contain;
`;

const CommentText = styled.p`
  font-size: 13px;
  color: #555;
  margin: 0;
`;
