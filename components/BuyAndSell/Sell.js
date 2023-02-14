import Image from "next/image";
import { useState } from "react";

import FieldButton from "../../images/Globals/FieldButton.png";
import TextField from "../../images/Globals/TextField.png";
import XButton from "../../images/Globals/XButton.png";
import {
  StyledUL,
  StyledLi,
  StyledSection,
  StyledMainP,
  StyledXDiv,
  StyledP,
  StyledDiv,
  StyledWorthP,
} from "./Styles";

export default function Sell({
  inventory,
  setInventory,
  setCharacterPositon,
  setActivity,
}) {
  const filteredInventory = Object.values(inventory).filter(
    (item) => item.amount > 0 && item.id !== "99"
  );

  const [choosen, setChoosen] = useState(false);
  const [choosenItem, setChoosenItem] = useState("");

  function sellItem(amount) {
    if (inventory[choosenItem.identifier].amount >= amount) {
      setInventory((prevInventory) => {
        const updatedInventory = {
          ...prevInventory,
          [choosenItem.identifier]: {
            ...prevInventory[choosenItem.identifier],
            amount: prevInventory[choosenItem.identifier].amount - amount,
          },
          dwarfi: {
            ...prevInventory.dwarfi,
            amount:
              prevInventory.dwarfi.amount +
              inventory[choosenItem.identifier].worth * amount,
          },
        };
        return updatedInventory;
      });
    }
  }
  return !choosen ? (
    <>
      <StyledMainP>what do you want to sell?</StyledMainP>
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
        {Object.values(filteredInventory).map((item) => (
          <StyledLi
            key={item.id}
            onClick={() => {
              setChoosen(true);
              setChoosenItem(item);
            }}
          >
            <Image src={item.icon} alt="" width={20} height={20} />
            <p>{item.amount}</p>
          </StyledLi>
        ))}
      </StyledUL>
    </>
  ) : (
    <>
      <StyledMainP>
        how much {choosenItem.name} do you want to sell?
      </StyledMainP>
      <StyledXDiv
        onClick={() => {
          setChoosen("");
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
          sellItem(1);
        }}
      >
        <Image src={FieldButton} alt="SellButton" />
      </StyledDiv>
      <StyledP column={5} margin={"12px 0 0 28px"}>
        5
      </StyledP>
      <StyledDiv
        column={5}
        marginleft={"9px"}
        onClick={() => {
          sellItem(5);
        }}
      >
        <Image src={FieldButton} alt="SellButton" />
      </StyledDiv>
      <StyledP column={6} margin={"12px 0 0 38px"}>
        10
      </StyledP>
      <StyledDiv
        column={6}
        marginleft={"25px"}
        onClick={() => {
          sellItem(10);
        }}
      >
        <Image src={FieldButton} alt="SellButton" />
      </StyledDiv>
      <StyledWorthP>worth : {choosenItem.worth}</StyledWorthP>
    </>
  );
  function stopWorking(row, column) {
    setCharacterPositon({ row, column });
  }
}
