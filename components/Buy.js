import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

import FieldButton from "../images/Globals/FieldButton.png";
import TextField from "../images/Globals/TextField.png";
import XButton from "../images/Globals/XButton.png";

export default function Buy({
  inventory,
  setInventory,
  setCharacterPositon,
  setActivity,
}) {
  const [choosedItem, setChoosedItem] = useState("");
  const [choosed, setChoosed] = useState(false);

  function buyItem(amount) {
    if (
      choosedItem === "wood sticks" &&
      inventory.dwarfi.amount >= amount * 2
    ) {
      setInventory((prevInventory) => {
        const updatedInventory = {
          ...prevInventory,
          woodstick: {
            ...prevInventory.woodstick,
            amount: prevInventory.woodstick.amount + amount,
          },
          dwarfi: {
            ...prevInventory.dwarfi,
            amount:
              prevInventory.dwarfi.amount - inventory.woodstick.price * amount,
          },
        };
        return updatedInventory;
      });
    }
  }

  return !choosed ? (
    <>
      <StyledMainP>what do you want to buy?</StyledMainP>
      <StyledXDiv
        onClick={() => {
          stopWorking(18, 5);
          setActivity("idle");
        }}
      >
        <Image src={XButton} alt="XButton" />
      </StyledXDiv>
      <StyledSection>
        <Image src={TextField} alt="TextField" />
      </StyledSection>

      <StyledUL>
        <StyledLi
          onClick={() => {
            setChoosed(true);
            setChoosedItem("wood sticks");
          }}
        >
          <Image src={inventory.woodstick.icon} alt="" width={25} height={25} />
        </StyledLi>
      </StyledUL>
    </>
  ) : (
    <>
      <StyledMainP>how much wood sticks do you want to buy?</StyledMainP>
      <StyledXDiv
        onClick={() => {
          setChoosed("");
        }}
      >
        <Image src={XButton} alt="XButton" />
      </StyledXDiv>
      <StyledSection>
        <Image src={TextField} alt="TextField" />
      </StyledSection>
      <StyledP column={3} margin={"12px 0 0 48px"}>
        1
      </StyledP>
      <StyledDiv
        column={3}
        marginleft={"30px"}
        onClick={() => {
          buyItem(1);
        }}
      >
        <Image src={FieldButton} alt="BuyButton" />
      </StyledDiv>
      <StyledP column={5} margin={"12px 0 0 28px"}>
        5
      </StyledP>
      <StyledDiv
        column={5}
        marginleft={"9px"}
        onClick={() => {
          buyItem(5);
        }}
      >
        <Image src={FieldButton} alt="BuyButton" />
      </StyledDiv>
      <StyledP column={6} margin={"12px 0 0 38px"}>
        10
      </StyledP>
      <StyledDiv
        column={6}
        marginleft={"25px"}
        onClick={() => {
          buyItem(10);
        }}
      >
        <Image src={FieldButton} alt="BuyButton" />
      </StyledDiv>
      <StyledWorthP>price:2 dwarfis</StyledWorthP>
    </>
  );
  function stopWorking(row, column) {
    setCharacterPositon({ row, column });
  }
}

const StyledUL = styled.ul`
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 180px;
  grid-column: 3;
  margin: 8px 0 0 20px;
  height: 88px;
  grid-row: 4;
  list-style: none;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const StyledLi = styled.li`
  width: 30px;
  display: flex;
  flex-direction: column;
  font-size: 8px;
  gap: 5px;
  align-items: center;
`;
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
const StyledDiv = styled.div`
  z-index: 2;
  height: 50px;
  grid-row: 6;
  grid-column: ${(props) => props.column};
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
  font-size: 10px;
  pointer-events: none;
  text-align: center;
  grid-row: 6;
  width: ${(props) => props.width};
  grid-column: ${(props) => props.column};
  margin: ${(props) => props.margin};
`;
const StyledWorthP = styled.p`
  z-index: 3;
  font-size: 10px;
  width: 200px;
  grid-row: 5;
  grid-column: 4;
  margin-top: 10px;
`;
