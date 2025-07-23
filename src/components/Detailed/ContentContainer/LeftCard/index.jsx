import styled from "styled-components";
import SelfIntro from "./SelfIntroCard";
import SpecializeIn from "./SpecializeIn";
import ConcernsCard from "./ConcernsCard";
import WorkExperienceCard from "./WorkExperienceCard";
import CommentsCard from "./CommentsCard";

const LeftCard = () => (
  <LeftCardContainer>
    <SelfIntro />
    <SpecializeIn />
    <ConcernsCard />
    <WorkExperienceCard />
    <CommentsCard />
  </LeftCardContainer>
);
export default LeftCard;

const LeftCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  gap: 20px;
`;
