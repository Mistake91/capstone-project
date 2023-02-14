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
} from "./BuyAndSell.styles";

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
