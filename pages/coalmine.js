import { useEffect, useState } from "react";
import styled from "styled-components";

import { Station, Character } from "@/components/Station";

export default function Coalmine({
  inventory,
  setInventory,
  achievements,
  setAchievements,
}) {
  const [characterPosition, setCharacterPositon] = useState({
    row: 9,
    column: 2,
  });
  const [isStopButtonVisible, setIsStopButtonVisible] = useState(false);
  const [isWorking, setIsWorking] = useState(null);
  const coalAchievements = Object.values(achievements).filter(
    (achievement) => achievement.material === "coal"
  );
  useEffect(() => {
    Object.values(coalAchievements).map((achievement) => {
      if (inventory.coal.overallAmount === achievement.amount) {
        setAchievements(achievements, (achievement.unlocked = true));
      }
    });
    if (isWorking) {
      const interval = setInterval(() => {
        setInventory((prevInventory) => {
          const updatedInventory = {
            ...prevInventory,
            coal: {
              ...prevInventory.coal,
              amount: prevInventory.coal.amount + 1,
              overallAmount: prevInventory.coal.overallAmount + 1,
            },
          };
          return updatedInventory;
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [
    inventory,
    isWorking,
    setInventory,
    achievements,
    setAchievements,
    coalAchievements,
  ]);
  return (
    <>
      {isStopButtonVisible && (
        <StyledButton
          type="button"
          row={characterPosition.row + 2}
          column={characterPosition.column}
          onClick={() => {
            setIsStopButtonVisible(false);
            stopWorking(9, 2);
          }}
        >
          STOP
        </StyledButton>
      )}

      <Character
        row={characterPosition.row}
        column={characterPosition.column}
      />
      <Station
        row={3}
        column={3}
        onClick={() => {
          positionHandler(3, 3);
        }}
      />
      <Station
        row={6}
        column={4}
        onClick={() => {
          positionHandler(6, 4);
        }}
      />
      <Station
        row={9}
        column={3}
        onClick={() => {
          positionHandler(9, 3);
        }}
      />
    </>
  );

  function positionHandler(row, column) {
    setCharacterPositon({ row, column });
    setIsStopButtonVisible(true);
    setIsWorking(inventory);
  }

  function stopWorking(row, column) {
    setCharacterPositon({ row, column });
    setIsWorking(false);
  }
}

const StyledButton = styled.button`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
`;
