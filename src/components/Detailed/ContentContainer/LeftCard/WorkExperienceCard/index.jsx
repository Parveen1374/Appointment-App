import React from "react";
import ContainerTemplate from "../../../../ContainerTemplate";
import styled from "styled-components";

const WorkExperienceCard = () => {
  return (
    <ContainerTemplate text={"My Work Experience"}>
      <ExperienceYears>I HAVE BEEN IN PRACTICE FOR : 7+ YEARS</ExperienceYears>
      <HorizontalRule></HorizontalRule>
      <WorkExperienceContainer>
        <ExperienceItem>
          <ExperienceImage src="/assets/expLogo.png" alt="experience" />
          <ExperienceHeadCont>
            <ExperienceTitle>Midtown Medical Clinic</ExperienceTitle>
            <ExperiencePosition>Senior Doctor</ExperiencePosition>
          </ExperienceHeadCont>
          <ExperienceYear>2016 - Present</ExperienceYear>
        </ExperienceItem>
        <ExperienceItem>
          <ExperienceImage src="/assets/expLogo.png" alt="experience" />
          <ExperienceHeadCont>
            <ExperienceTitle>Midtown Medical Clinic</ExperienceTitle>
            <ExperiencePosition>Senior Doctor</ExperiencePosition>
          </ExperienceHeadCont>
          <ExperienceYear>2010 - 2015</ExperienceYear>
        </ExperienceItem>
      </WorkExperienceContainer>
    </ContainerTemplate>
  );
};

export default WorkExperienceCard;

const ExperienceYears = styled.div`
  font-size: 15px;
  color: #3a643b;
  font-weight: bold;
  margin-bottom: 20px;
`;

const HorizontalRule = styled.hr`
  border: 0;
  border-top: 1px solid #e8e8e8;
  margin: 0;
  width: 70%;
  margin-bottom: 20px;
`;

const WorkExperienceContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  width: 90%;
  border-radius: 10px;
`;

const ExperienceItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
`;

const ExperienceImage = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 10px;
`;

const ExperienceHeadCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ExperienceTitle = styled.p`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

const ExperiencePosition = styled.p`
  font-size: 13px;
  color: #666;
`;

const ExperienceYear = styled.p`
  font-size: 12px;
  color: #999;
  margin-left: auto;
  font-weight: bold;
  text-align: left;
  width: 100px;
`;
