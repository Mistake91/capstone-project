import styled from "styled-components";

import AchievementCard from "@/components/AchievementCard";

export default function achievementPage({ achievements }) {
  const unlockedAV = Object.values(achievements).filter(
    (achievement) => achievement.unlocked === true
  );
  const lockedAV = Object.values(achievements).filter(
    (achievement) => achievement.unlocked === false
  );

  return (
    <StyledSection>
      <ul>
        {Object.values(unlockedAV).map((achievement) => (
          <StyledUnlockedLi key={achievement.id}>
            <AchievementCard name={achievement.name} />
          </StyledUnlockedLi>
        ))}
        {Object.values(lockedAV).map((achievement) => (
          <StyledLockedLi key={achievement.id}>
            <AchievementCard name={achievement.name} />
          </StyledLockedLi>
        ))}
      </ul>
    </StyledSection>
  );
}

const StyledLockedLi = styled.li`
  border: solid black 3px;
  list-style: none;
  margin-top: 5px;
`;
const StyledUnlockedLi = styled.li`
  border: solid gold 3px;
  list-style: none;
  margin-top: 5px;
`;
const StyledSection = styled.section`
  grid-column: 1/6;
  grid-row: 3/13;
  margin: 0 45px;
  text-align: center;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
