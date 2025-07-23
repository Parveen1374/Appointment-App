import styled from "styled-components";
import ContainerTemplate from "../../../../ContainerTemplate";

const languages = ["English", "Hindi", "Telugu"];
const SelfIntro = () => (
  <ContainerTemplate
    text={
      <HeaderRow>
        <TitleText>A Little About Me</TitleText>
        <FollowButton>Follow +</FollowButton>
      </HeaderRow>
    }
  >
    <p>
      Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat.
      love to work with all my hospital staff and seniour doctors. Completed my
      graduation in Gynaecologist Medicine from the
    </p>
    <SessionModeBreak>
      <BreakLine />
      <SessionText>Read More</SessionText>
    </SessionModeBreak>
    <LanguageContainer>
      <h4>Language Spoken</h4>
      <LanguageListContainer>
        {languages.map((each) => (
          <LanguageTab>{each}</LanguageTab>
        ))}
      </LanguageListContainer>
    </LanguageContainer>
    <SocialLogo src="/assets/social_logo.png" alt="social" />
  </ContainerTemplate>
);
export default SelfIntro;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TitleText = styled.h3`
  font-size: 18px;
  color: #333;
  margin-right: 10px;
`;

const FollowButton = styled.button`
  padding: 6px 16px;
  background-color: #fff;
  color: gray;
  border: 2px solid gray;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold;
  margin-left: auto;
`;

const SessionModeBreak = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const SessionText = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin-left: 10px;
  text-decoration: underline;
`;

const BreakLine = styled.hr`
  border: 0;
  border-top: 1px solid #e8e8e8;
  margin: 0;
  width: 80%;
`;

const LanguageContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`;
const LanguageListContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

const LanguageTab = styled.li`
  list-style-type: none;
  border: 1px solid #2e37a40a;
  background-color: #2e37a40a;
  padding: 5px 10px;
  border-radius: 15px;
`;

const SocialLogo = styled.img`
  width: 190px;
  height: 40px;
  margin-top: 20px;
  cursor: pointer;
`;
