import { useEffect, useState } from "react";
import Image from "next/image";

import IdleAnimation from "@/components/IdleAnimation";
import MiningAnimation from "@/components/MiningAnimation";
import Mine_BG from "../images/Maps/Mine_Market_BG.png";
import Coal1 from "../images/Stones/Coal1.png";
import Coal2 from "../images/Stones/Coal2.png";
import Coal3 from "../images/Stones/Coal3.png";
import GameButton from "../images/Globals/Button.png";
import {
  Deposit1,
  Deposit2,
  Deposit3,
  StyledDiv,
  StyledBGDiv,
  StyledP,
} from "./goldmine";

export default function Coalmine({
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
        <Image src={Coal1} alt="Coal1" />
      </Deposit1>

      <Deposit2
        onClick={() => {
          positionHandler(12, 3);
        }}
      >
        <Image src={Coal2} alt="Coal2" />
      </Deposit2>

      <Deposit3
        onClick={() => {
          positionHandler(7, 6);
        }}
      >
        <Image src={Coal3} alt="Coal3" />
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
