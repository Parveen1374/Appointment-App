import React from "react";
import ContainerTemplate from "../../../../ContainerTemplate";
import styled from "styled-components";

const concerns = [
  { id: 1, concern: "Skin Treatment" },
  { id: 2, concern: "Pregnancy" },
  { id: 3, concern: "Period Doubts" },
  { id: 4, concern: "Endometriosis" },
  { id: 5, concern: "Pelvic Pain" },
  { id: 6, concern: "Ovarian Cysts" },
];

const ConcernsCard = () => {
  return (
    <ContainerTemplate text={"The Concerns I Treat"}>
      <ConcernsContainer>
        {concerns.map((concern) => (
          <ConcernItem key={concern.id}>{concern.concern}</ConcernItem>
        ))}
        <ConcernItemMore>+ 5 More</ConcernItemMore>
      </ConcernsContainer>
    </ContainerTemplate>
  );
};

export default ConcernsCard;

const ConcernsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  gap: 5px;
`;

const ConcernItem = styled.div`
  padding: 8px 11px;
  background-color: #f7f7f7;
  border-radius: 20px;
  color: #3a643b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #3a643b;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e8f5e9;
  }
`;

const ConcernItemMore = styled(ConcernItem)`
  background-color: transparent;
  border: 1px solid #3a643b;
  color: #3a643b;
  font-weight: bold;
  cursor: pointer;
  padding: 8px 11px;
`;
