import React from "react";
import styled from "styled-components";
import ContainerTemplate from "../../../../ContainerTemplate";

const SpecializeInContent = [
  {
    id: 1,
    imgUrl: "/assets/specialize/specialize_1.png",
    title: "Women's Health",
  },
  {
    id: 2,
    imgUrl: "/assets/specialize/specialize_2.png",
    title: "Skin Care",
  },
  {
    id: 3,
    imgUrl: "/assets/specialize/specialize_3.png",
    title: "Immunity",
  },
  {
    id: 4,
    imgUrl: "/assets/specialize/specialize_4.png",
    title: "Hair Care",
  },
];

const SpecializeIn = () => {
  return (
    <ContainerTemplate text={"I Specialize In"}>
      <SpecializeInContainer>
        {SpecializeInContent.map((item) => (
          <SpecializationCard key={item.id}>
            <SpecializationImage src={item.imgUrl} alt={item.title} />
            <SpecializationTitle>{item.title}</SpecializationTitle>
          </SpecializationCard>
        ))}
      </SpecializeInContainer>
    </ContainerTemplate>
  );
};

export default SpecializeIn;

const SpecializeInContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
  border-radius: 10px;
`;

const SpecializationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;
`;

const SpecializationImage = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
`;

const SpecializationTitle = styled.p`
  font-size: 12px;
  color: #333;
  text-align: center;
  margin: 0;
  font-weight: bold;
  width: 100%;
`;
