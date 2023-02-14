import { useEffect, useState } from "react";
import Image from "next/image";

import IdleAnimation from "@/components/IdleAnimation";
import MiningAnimation from "@/components/MiningAnimation";
import Mine_BG from "../images/Maps/Mine_Market_BG.png";
import Iron1 from "../images/Stones/Iron1.png";
import Iron2 from "../images/Stones/Iron2.png";
import Iron3 from "../images/Stones/Iron3.png";
import GameButton from "../images/Globals/Button.png";
import {
  Deposit1,
  Deposit2,
  Deposit3,
  StyledDiv,
  StyledBGDiv,
  StyledP,
} from "./styles/mineStyles";

export default function Ironmine({
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
  const ironOreAchievements = Object.values(achievements).filter(
    (achievement) => achievement.material === "ironore"
  );
  useEffect(() => {
    Object.values(ironOreAchievements).map((achievement) => {
      if (inventory.ironore.overallAmount === achievement.amount) {
        setAchievements(achievements, (achievement.unlocked = true));
      }
    });
    if (isWorking) {
      const interval = setInterval(() => {
        setInventory((prevInventory) => {
          const updatedInventory = {
            ...prevInventory,
            ironore: {
              ...prevInventory.ironore,
              amount: prevInventory.ironore.amount + 1,
              overallAmount: prevInventory.ironore.overallAmount + 1,
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
    ironOreAchievements,
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
        <Image src={Iron1} alt="Iron1" />
      </Deposit1>

      <Deposit2
        onClick={() => {
          positionHandler(12, 3);
        }}
      >
        <Image src={Iron2} alt="Iron2" />
      </Deposit2>

      <Deposit3
        onClick={() => {
          positionHandler(7, 6);
        }}
      >
        <Image src={Iron3} alt="Iron3" />
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
