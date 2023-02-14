import Image from "next/image";

import BG1 from "../../images/Maps/achievement_BG_1.png";
import BG2 from "../../images/Maps/achievement_BG_2.png";
import LockedAV from "../../images/Globals/lockedAchievement.png";
import UnlockedAV from "../../images/Globals/UnlockedAchievement.png";

import {
  StyledLi,
  StyledSection,
  StyledBGDiv,
  StyledFrame,
  StyledP,
  StyledDiv,
} from "./styles";

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
