import styled from "styled-components";

import { achievements } from "@/db";
import AchievementCard from "@/components/AchievementCard";

export default function achievementPage() {
  return (
    <StyledSection>
      <ul>
        {achievements.map((achievement) => (
          <StyledLi key={achievement.id}>
            <AchievementCard name={achievement.name} />
          </StyledLi>
        ))}
      </ul>
    </StyledSection>
  );
}

const StyledLi = styled.li`
  border: solid black 3px;
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
