import styled from "styled-components";
import Image from "next/image";
import icon_placeholder from "../images/icon_placeholder.png";
import { useState } from "react";

export default function Sell({ inventory, setInventory }) {
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
    <StyledSection>
      <h1>what you wanna sell?</h1>
      <StyledUL>
        {Object.values(filteredInventory).map((item) => (
          <StyledLi
            key={item.id}
            onClick={() => {
              setChoosen(true);
              setChoosenItem(item);
            }}
          >
            <Image src={icon_placeholder} alt="" width={25} height={25} />
            <p>{item.name}</p>
            <p>{item.amount}</p>
          </StyledLi>
        ))}
      </StyledUL>
    </StyledSection>
  ) : (
    <StyledSection>
      <h1>how much {choosenItem.name} you wanna sell?</h1>
      <Styledbutton
        type="button"
        onClick={() => {
          sellItem(1);
        }}
      >
        1
      </Styledbutton>
      <Styledbutton
        type="button"
        onClick={() => {
          sellItem(5);
        }}
      >
        5
      </Styledbutton>
      <Styledbutton
        type="button"
        onClick={() => {
          sellItem(10);
        }}
      >
        10
      </Styledbutton>
      <p>worth : {choosenItem.worth}</p>
      <p>dwarfis : {inventory.dwarfi.amount}</p>
      <Styledbutton
        type="button"
        onClick={() => {
          setChoosen(false);
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
