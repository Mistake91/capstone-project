import Image from "next/image";

import Home_Frame from "../images/Home/Home_Frame.png";

import Smeltery from "@/components/Smeltery/Smeltery";
import Anvil from "@/components/Anvil/Anvil";
import IdleAnimation from "@/components/Animations/IdleAnimation";
import SmelterAnimation from "@/components/Animations/SmelterAnimation";
import SmeltAnimation from "@/components/Animations/SmeltAnimation";
import HammerAnimation from "@/components/Animations/HammerAnimation";
import {
  StyledDiv,
  CharacterDiv,
  AnvilStation,
  SmelterStation,
} from "./styles";

export default function HomePage({
  inventory,
  setInventory,
  smelterIron,
  smelterGold,
  craftGear,
  craftGoldArmor,
  activity,
  setActivity,
  characterPosition,
  setCharacterPositon,
}) {
  return (
    <>
      <StyledDiv>
        <Image src={Home_Frame} alt="Background" />
      </StyledDiv>
      {characterPosition.row === 9 && characterPosition.column === 5 && (
        <Smeltery
          inventory={inventory}
          setInventory={setInventory}
          stopWorking={stopWorking}
          smelterIron={smelterIron}
          smelterGold={smelterGold}
          setActivity={setActivity}
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
