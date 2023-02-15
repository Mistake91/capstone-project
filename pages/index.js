import Image from "next/image";
import styled from "styled-components";

import Home_Frame from "../images/Home/Home_Frame.png";

import Smeltery from "@/components/Smeltery";
import Anvil from "@/components/Anvil";
import IdleAnimation from "@/components/IdleAnimation";
import SmelterAnimation from "@/components/SmelterAnimation";
import SmeltAnimation from "@/components/SmeltAnimation";
import HammerAnimation from "@/components/HammerAnimation";

export default function HomePage({
  inventory,
  setInventory,
  craftGear,
  craftGoldArmor,
  activity,
  setActivity,
  characterPosition,
  setCharacterPositon,
  setAchievements,
  achievements,
}) {
  return (
    <>
      <StyledDiv>
        <Image src={Home_Frame} alt="Background" priority />
      </StyledDiv>
      {characterPosition.row === 9 && characterPosition.column === 5 && (
        <Smeltery
          inventory={inventory}
          setInventory={setInventory}
          stopWorking={stopWorking}
          setActivity={setActivity}
          setAchievements={setAchievements}
          achievements={achievements}
        />
      )}
      {characterPosition.row === 20 && characterPosition.column === 6 && (
        <Anvil
          inventory={inventory}
          setInventory={setInventory}
          stopWorking={stopWorking}
          craftGear={craftGear}
          craftGoldArmor={craftGoldArmor}
          setActivity={setActivity}
        />
      )}

      <CharacterDiv
        row={characterPosition.row}
        column={characterPosition.column}
      >
        {activity === "idle" ? (
          <IdleAnimation />
        ) : activity === "smelt" ? (
          <SmeltAnimation />
        ) : activity === "hammer" ? (
          <HammerAnimation />
        ) : (
          <IdleAnimation />
        )}
      </CharacterDiv>

      <SmelterStation
        onClick={() => {
          stopWorking(9, 5);
          positionHandler(9, 5, setCharacterPositon);
        }}
      >
        <SmelterAnimation />
      </SmelterStation>
      <AnvilStation
        row={20}
        column={6}
        onClick={() => {
          stopWorking(20, 6);
          positionHandler(20, 6, setCharacterPositon);
        }}
      />
    </>
  );

  function positionHandler(row, column) {
    setCharacterPositon({ row, column });
  }

  function stopWorking(row, column) {
    setCharacterPositon({ row, column });
    setActivity("idle");
  }
}
const StyledDiv = styled.div`
  z-index: -1;
  position: fixed;
`;
const CharacterDiv = styled.div`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  z-index: 2;
`;
const SmelterStation = styled.div`
  width: 125px;
  height: 200px;
  grid-row: 4;
  grid-column: 4;
  margin-left: 10px;
`;
const AnvilStation = styled.div`
  width: 100px;
  height: 50px;
  grid-row: 20;
  grid-column: 6;
`;
