import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import FieldButton from "../images/Globals/FieldButton.png";
import TextField from "../images/Globals/TextField.png";
import XButton from "../images/Globals/XButton.png";

export default function Smeltery({
  inventory,
  stopWorking,
  setActivity,
  setAchievements,
  achievements,
  setInventory,
}) {
  const [material, setMaterial] = useState(null);
  const [enough, setEnough] = useState(true);
  const ironIngotAchievements = Object.values(achievements).filter(
    (achievement) => achievement.material === "ironingot"
  );
  const goldIngotAchievements = Object.values(achievements).filter(
    (achievement) => achievement.material === "goldingot"
  );

  useEffect(() => {
    Object.values(ironIngotAchievements).map((achievement) => {
      if (inventory.ironingot.overallAmount === achievement.amount) {
        setAchievements(achievements, (achievement.unlocked = true));
      }
    });
    Object.values(goldIngotAchievements).map((achievement) => {
      if (inventory.goldingot.overallAmount === achievement.amount) {
        setAchievements(achievements, (achievement.unlocked = true));
      }
    });
    if (material) {
      const interval = setInterval(() => {
        if (
          material === "iron" &&
          inventory.coal.amount > 0 &&
          inventory.ironore.amount > 0
        ) {
          setInventory((prevInventory) => {
            const updatedInventory = {
              ...prevInventory,
              coal: {
                ...prevInventory.coal,
                amount: prevInventory.coal.amount - 1,
              },
              ironore: {
                ...prevInventory.ironore,
                amount: prevInventory.ironore.amount - 1,
              },
              ironingot: {
                ...prevInventory.ironingot,
                amount: prevInventory.ironingot.amount + 1,
                overallAmount: prevInventory.ironingot.overallAmount + 1,
              },
            };
            return updatedInventory;
          });
        } else if (
          material === "gold" &&
          inventory.coal.amount > 0 &&
          inventory.goldore.amount > 0
        ) {
          setInventory((prevInventory) => {
            const updatedInventory = {
              ...prevInventory,
              coal: {
                ...prevInventory.coal,
                amount: prevInventory.coal.amount - 1,
              },
              goldore: {
                ...prevInventory.goldore,
                amount: prevInventory.goldore.amount - 1,
              },
              goldingot: {
                ...prevInventory.goldingot,
                amount: prevInventory.goldingot.amount + 1,
                overallAmount: prevInventory.goldingot.overallAmount + 1,
              },
            };
            return updatedInventory;
          });
        }
      }, 3000);
      if (
        (material === "iron" && inventory.ironore.amount < 1) ||
        (material === "iron" && inventory.coal.amount < 1) ||
        (material === "gold" && inventory.goldore.amount < 1) ||
        (material === "gold" && inventory.coal.amount < 1)
      ) {
        setMaterial(null);
        setEnough(false);
        stopWorking(9, 5);
      }
      return () => clearInterval(interval);
    }
  }, [
    material,
    inventory,
    stopWorking,
    achievements,
    setAchievements,
    setInventory,
    ironIngotAchievements,
    goldIngotAchievements,
  ]);

  return (
    <>
      {enough === true ? (
        <>
          <StyledMainP>which ore do you want to smelt?</StyledMainP>
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
          <StyledP column={4} margin={"13px 0 0 3px"}>
            IRON
          </StyledP>
          <StyledButtonDiv
            column={4}
            onClick={() => {
              setMaterial("iron");
              setActivity("smelt");
            }}
          >
            <Image src={FieldButton} alt="IronButton" />
          </StyledButtonDiv>
          <StyledP column={6} margin={"13px 0 0 19px"}>
            GOLD
          </StyledP>
          <StyledButtonDiv
            column={6}
            marginleft={"15px"}
            onClick={() => {
              setMaterial("gold");
              setActivity("smelt");
            }}
          >
            <Image src={FieldButton} alt="GoldButton" />
          </StyledButtonDiv>
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
          <StyledP column={5} margin={"13px 0 0 10px"}>
            BACK
          </StyledP>
          <StyledButtonDiv
            column={5}
            marginleft={"6px"}
            onClick={() => setEnough(true)}
          >
            <Image src={FieldButton} alt="BackButton" />
          </StyledButtonDiv>
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
const StyledXDiv = styled.div`
  z-index: 2;
  grid-column: 8;
  grid-row: 1;
  margin: 10px 0 0 10px;
`;
const StyledButtonDiv = styled.div`
  z-index: 2;
  width: 100px;
  height: 50px;
  grid-column: ${(props) => props.column};
  grid-row: 6;
  margin-left: ${(props) => props.marginleft};
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
const StyledP = styled.p`
  z-index: 3;
  grid-row: 6;
  grid-column: ${(props) => props.column};
  font-size: 10px;
  margin: ${(props) => props.margin};
  pointer-events: none;
`;
