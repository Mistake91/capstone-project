import { useEffect, useState } from "react";
import Image from "next/image";

import FieldButton from "../../images/Globals/FieldButton.png";
import TextField from "../../images/Globals/TextField.png";
import XButton from "../../images/Globals/XButton.png";
import {
  StyledSection,
  StyledButtonDiv,
  StyledMainP,
  StyledXDiv,
  StyledP,
  StyledBackDiv,
  StyledbackP,
  NeedP,
} from "./Anvil.styles";
export default function Anvil({
  inventory,
  stopWorking,
  craftGoldArmor,
  craftGear,
  setActivity,
}) {
  const [material, setMaterial] = useState(null);
  const [enough, setEnough] = useState(true);

  useEffect(() => {
    if (material) {
      const interval = setInterval(() => {
        if (material === "gear" && inventory.ironingot.amount >= 1) {
          craftGear();
        } else if (
          material === "goldarmor" &&
          inventory.goldingot.amount >= 5
        ) {
          craftGoldArmor();
        }
      }, 3000);
      if (
        (material === "gear" && inventory.ironingot.amount < 1) ||
        (material === "goldarmor" && inventory.goldingot.amount < 5)
      ) {
        setMaterial(null);
        setEnough(false);
        stopWorking(20, 6);
      }
      return () => clearInterval(interval);
    }
  }, [material, inventory, craftGear, craftGoldArmor, stopWorking]);

  return (
    <>
      {enough === true ? (
        <>
          <StyledMainP>what do you want to craft?</StyledMainP>
          <StyledXDiv
            onClick={() => {
              stopWorking(16, 3);
            }}
          >
            <Image src={XButton} alt="XButton" />
          </StyledXDiv>
          <StyledSection>
            <Image src={TextField} alt="TextField" />
          </StyledSection>
          <StyledP column={4} margin={"15px 0 0 9px"}>
            GEAR
          </StyledP>
          <StyledButtonDiv
            column={4}
            onClick={() => {
              setMaterial("gear");
              setActivity("hammer");
            }}
          >
            <Image src={FieldButton} alt="GearButton" />
          </StyledButtonDiv>
          <StyledP column={6} margin={"11px 0 0 22px"}>
            GOLD ARMOR
          </StyledP>
          <StyledButtonDiv
            column={6}
            marginleft={"15px"}
            onClick={() => {
              setMaterial("goldarmor");
              setActivity("hammer");
            }}
          >
            <Image src={FieldButton} alt="GoldButton" />
          </StyledButtonDiv>
          <NeedP column={3} marginleft={"25px"}>
            1x iron <br />=<br /> 2x gear
          </NeedP>
          <NeedP column={6} marginleft={"5px"}>
            5x gold <br />=<br /> 1x armor
          </NeedP>
        </>
      ) : (
        <>
          <StyledMainP>I dont have enough materials</StyledMainP>
          <StyledXDiv
            onClick={() => {
              stopWorking(16, 3);
            }}
          >
            <Image src={XButton} alt="XButton" />
          </StyledXDiv>
          <StyledSection>
            <Image src={TextField} alt="TextField" />
          </StyledSection>
          <StyledbackP>BACK</StyledbackP>
          <StyledBackDiv onClick={() => setEnough(true)}>
            <Image src={FieldButton} alt="BackButton" />
          </StyledBackDiv>
        </>
      )}
    </>
  );
}
