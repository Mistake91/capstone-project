import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import FieldButton from "../images/Globals/FieldButton.png";
import TextField from "../images/Globals/TextField.png";
import XButton from "../images/Globals/XButton.png";

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

const StyledSection = styled.section`
  z-index: 1;
  grid-column: 3;
  grid-row: 2;
  text-align: center;
`;
const StyledButtonDiv = styled.div`
  z-index: 2;
  width: 100px;
  height: 50px;
  margin-left: ${(props) => props.marginleft};
  grid-column: ${(props) => props.column};
  grid-row: 6;
`;
const StyledXDiv = styled.div`
  z-index: 2;
  grid-column: 8;
  grid-row: 1;
  margin: 10px 0 0 10px;
`;
const StyledbackP = styled.div`
  z-index: 2;
  font-size: 10px;
  margin: 13px 0 0 0;
  grid-row: 6;
  grid-column: 5;
  margin-left: 10px;
  pointer-events: none;
`;
const StyledBackDiv = styled.div`
  z-index: 1;
  grid-row: 6;
  grid-column: 5;
  margin-left: 6px;
  width: 100px;
  height: 50px;
`;
const StyledMainP = styled.p`
  z-index: 2;
  grid-column: 2;
  grid-row: 3;
  margin-left: 45px;
  width: 200px;
  text-align: center;
  font-size: 14px;
`;
const NeedP = styled.p`
  z-index: 3;
  width: 75px;
  grid-row: 5;
  margin-left: ${(props) => props.marginleft};
  grid-column: ${(props) => props.column};
  font-size: 8px;
  text-align: center;
`;
const StyledP = styled.p`
  z-index: 3;
  grid-row: 6;
  font-size: 7px;
  pointer-events: none;
  margin: ${(props) => props.margin};
  grid-column: ${(props) => props.column};
`;
