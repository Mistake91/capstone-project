import Image from "next/image";
import styled from "styled-components";

import BG1 from "../images/Maps/achievement_BG_1.png";
import BG2 from "../images/Maps/achievement_BG_2.png";
import LockedAV from "../images/Globals/lockedAchievement.png";
import UnlockedAV from "../images/Globals/UnlockedAchievement.png";

export default function achievementPage({ achievements }) {
  const unlockedAchievements = Object.values(achievements).filter(
    (achievement) => achievement.unlocked === true
  );
  const lockedAchievements = Object.values(achievements).filter(
    (achievement) => achievement.unlocked === false
  );

  return (
    <>
      <StyledBGDiv>
        <Image src={BG2} alt="Background" />
      </StyledBGDiv>
      <StyledFrame>
        <Image src={BG1} alt="Background" />
      </StyledFrame>
      <StyledSection>
        <ul>
          {Object.values(unlockedAchievements).map((achievement) => (
            <StyledLi key={achievement.id}>
              <StyledDiv>
                <Image src={UnlockedAV} alt="lockedAchievement" />
                <StyledP>{achievement.name}</StyledP>
              </StyledDiv>
            </StyledLi>
          ))}
          {Object.values(lockedAchievements).map((achievement) => (
            <StyledLi key={achievement.id}>
              <StyledDiv>
                <Image src={LockedAV} alt="lockedAchievement" />
                <StyledP>{achievement.name}</StyledP>
              </StyledDiv>
            </StyledLi>
          ))}
        </ul>
      </StyledSection>
    </>
  );
}
const StyledLi = styled.li`
  list-style: none;
  margin-top: 5px;
`;
const StyledSection = styled.section`
  grid-column: 1/11;
  grid-row: 4/25;
  padding: 50px 0;
  margin: 10px 0 0 45px;
  text-align: center;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const StyledBGDiv = styled.div`
  z-index: -1;
  position: fixed;
`;
const StyledFrame = styled.div`
  z-index: 99;
  position: fixed;
  pointer-events: none;
`;
const StyledP = styled.p`
  position: absolute;
  width: 100px;
  right: 25%;
  left: 25%;
  font-size: 12px;
`;
const StyledDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  left: 10%;
`;
