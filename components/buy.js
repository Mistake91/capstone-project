import styled from "styled-components";
import Image from "next/image";
import icon_placeholder from "../images/icon_placeholder.png";
import { useState } from "react";

export default function Buy({ inventory, setInventory }) {
  const [choosedItem, setChoosedItem] = useState("");
  const [choosed, setChoosed] = useState(false);

  function buyItem(amount) {
    console.log(inventory.dwarfi.amount);
    console.log(choosedItem);
    console.log(amount * 2);
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
    <StyledSection>
      <h1>what you wanna buy?</h1>
      <StyledUL>
        <StyledLi
          onClick={() => {
            setChoosed(true);
            setChoosedItem("wood sticks");
          }}
        >
          <Image src={icon_placeholder} alt="" width={25} height={25} />
          <p>{inventory.woodstick.name}</p>
        </StyledLi>
      </StyledUL>
    </StyledSection>
  ) : (
    <StyledSection>
      <h1>how much you wanna buy?</h1>
      <Styledbutton
        onClick={() => {
          buyItem(1);
        }}
      >
        1
      </Styledbutton>
      <Styledbutton
        onClick={() => {
          buyItem(5);
        }}
      >
        5
      </Styledbutton>
      <Styledbutton
        onClick={() => {
          buyItem(10);
        }}
      >
        10
      </Styledbutton>
      <p>price : 2 dwarfis</p>
      <p>
        {inventory.dwarfi.name} : {inventory.dwarfi.amount}
      </p>
      <Styledbutton
        onClick={() => {
          setChoosed(false);
        }}
      >
        back
      </Styledbutton>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  grid-column: 2/6;
  grid-row: 2/7;
  background-color: red;
  border-radius: 10%;
  text-align: center;
  z-index: 1;
  display: flex;
  justify-content: center;
  text-align: center;
  column-gap: 50px;
  flex-wrap: wrap;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const StyledUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
`;
const StyledLi = styled.li`
  margin: 5px 10px 0 10px;
  width: 50px;
`;
const Styledbutton = styled.button`
  font-size: 10px;
  width: 50px;
  height: 50px;
`;
