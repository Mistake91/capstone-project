import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";

import IdleAnimation from "@/components/IdleAnimation";
import MiningAnimation from "@/components/MiningAnimation";
import Mine_BG from "../images/Maps/Mine_Market_BG.png";
import Gold1 from "../images/Stones/Gold1.png";
import Gold2 from "../images/Stones/Gold2.png";
import Gold3 from "../images/Stones/Gold3.png";
import GameButton from "../images/Globals/Button.png";

export default function Goldmine({
  inventory,
  setInventory,
  achievements,
  setAchievements,
}) {
  const [characterPosition, setCharacterPositon] = useState({
    row: 16,
    column: 3,
  });
  const [isStopButtonVisible, setIsStopButtonVisible] = useState(false);
  const [isWorking, setIsWorking] = useState(null);
  const goldOreAchievements = Object.values(achievements).filter(
    (achievement) => achievement.material === "goldore"
  );
  useEffect(() => {
    Object.values(goldOreAchievements).map((achievement) => {
      if (inventory.goldore.overallAmount === achievement.amount) {
        setAchievements(achievements, (achievement.unlocked = true));
      }
    });
    if (isWorking) {
      const interval = setInterval(() => {
        setInventory((prevInventory) => {
          const updatedInventory = {
            ...prevInventory,
            goldore: {
              ...prevInventory.goldore,
              amount: prevInventory.goldore.amount + 1,
              overallAmount: prevInventory.goldore.overallAmount + 1,
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
    goldOreAchievements,
  ]);

  return (
    <>
      <StyledBGDiv>
        <Image src={Mine_BG} alt="Background" />
      </StyledBGDiv>
      {isStopButtonVisible && (
        <>
          <StyledDiv
            row={characterPosition.row + 4}
            column={characterPosition.column}
            marginleft={"10px"}
            onClick={() => {
              setIsStopButtonVisible(false);
              stopWorking(16, 3);
            }}
          >
            <Image src={GameButton} alt="Button" height={40} />
          </StyledDiv>
          <StyledP
            row={characterPosition.row + 4}
            column={characterPosition.column}
          >
            STOP
          </StyledP>
        </>
      )}

      <StyledDiv row={characterPosition.row} column={characterPosition.column}>
        {isWorking ? <MiningAnimation /> : <IdleAnimation />}
      </StyledDiv>

      <Deposit1
        onClick={() => {
          positionHandler(19, 6);
        }}
      >
        <Image src={Gold1} alt="Gold1" />
      </Deposit1>

      <Deposit2
        onClick={() => {
          positionHandler(12, 3);
        }}
      >
        <Image src={Gold2} alt="Gold2" />
      </Deposit2>

      <Deposit3
        onClick={() => {
          positionHandler(7, 6);
        }}
      >
        <Image src={Gold3} alt="Gold3" />
      </Deposit3>
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
export const StyledDiv = styled.div`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  margin-left: ${(props) => props.marginleft};
  z-index: 1;
`;
export const StyledBGDiv = styled.div`
  z-index: -1;
  position: fixed;
`;
export const StyledP = styled.p`
  margin: 15px 0 0 17px;
  font-size: 10px;
  pointer-events: none;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  z-index: 2;
`;
export const Deposit1 = styled.div`
  width: 125px;
  height: 100px;
  grid-row: 18;
  grid-column: 6;
  z-index: 0;
`;
export const Deposit2 = styled.div`
  width: 135px;
  height: 130px;
  grid-row: 10;
  grid-column: 3;
  z-index: 0;
`;
export const Deposit3 = styled.div`
  width: 130px;
  height: 130px;
  grid-row: 5;
  grid-column: 6;
  z-index: 0;
`;
