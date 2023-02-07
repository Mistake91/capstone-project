import styled from "styled-components";
import Image from "next/image";
import icon_placeholder from "../images/icon_placeholder.png";
import { useState } from "react";

export default function Sell({ inventory, setInventory }) {
  const filteredInventory = Object.values(inventory).filter(
    (item) => item.amount > 0
  );

  const [choosedItem, setChoosedItem] = useState("");

  function sellItem(amount) {
    if (choosedItem.name === "coal" && inventory.coal.amount >= amount) {
      setInventory((prevInventory) => {
        const updatedInventory = {
          ...prevInventory,
          coal: {
            ...prevInventory.coal,
            amount: prevInventory.coal.amount - amount,
          },
          dwarfi: {
            ...prevInventory.dwarfi,
            amount: prevInventory.dwarfi.amount + inventory.coal.worth * amount,
          },
        };
        return updatedInventory;
      });
    }
    if (choosedItem.name === "iron ore" && inventory.ironore.amount >= amount) {
      setInventory((prevInventory) => {
        const updatedInventory = {
          ...prevInventory,
          ironore: {
            ...prevInventory.ironore,
            amount: prevInventory.ironore.amount - amount,
          },
          dwarfi: {
            ...prevInventory.dwarfi,
            amount:
              prevInventory.dwarfi.amount + inventory.ironore.worth * amount,
          },
        };
        return updatedInventory;
      });
    }
    if (choosedItem.name === "gold ore" && inventory.goldore.amount >= amount) {
      setInventory((prevInventory) => {
        const updatedInventory = {
          ...prevInventory,
          goldore: {
            ...prevInventory.goldore,
            amount: prevInventory.goldore.amount - amount,
          },
          dwarfi: {
            ...prevInventory.dwarfi,
            amount:
              prevInventory.dwarfi.amount + inventory.goldore.worth * amount,
          },
        };
        return updatedInventory;
      });
    }
    if (
      choosedItem.name === "iron ingot" &&
      inventory.ironingot.amount >= amount
    ) {
      setInventory((prevInventory) => {
        const updatedInventory = {
          ...prevInventory,
          ironingot: {
            ...prevInventory.ironingot,
            amount: prevInventory.ironingot.amount - amount,
          },
          dwarfi: {
            ...prevInventory.dwarfi,
            amount:
              prevInventory.dwarfi.amount + inventory.ironingot.worth * amount,
          },
        };
        return updatedInventory;
      });
    }
    if (
      choosedItem.name === "gold ingot" &&
      inventory.goldingot.amount >= amount
    ) {
      setInventory((prevInventory) => {
        const updatedInventory = {
          ...prevInventory,
          goldingot: {
            ...prevInventory.goldingot,
            amount: prevInventory.goldingot.amount - amount,
          },
          dwarfi: {
            ...prevInventory.dwarfi,
            amount:
              prevInventory.dwarfi.amount + inventory.goldingot.worth * amount,
          },
        };
        return updatedInventory;
      });
    }
  }
  const [choosed, setChoosed] = useState(false);

  return !choosed ? (
    <StyledSection>
      <h1>what you wanna sell?</h1>
      <StyledUL>
        {Object.values(filteredInventory).map(
          (item) =>
            item.id != 99 && (
              <StyledLi
                key={item.id}
                onClick={() => {
                  setChoosed(true);
                  setChoosedItem(item);
                }}
              >
                <Image src={icon_placeholder} alt="" width={25} height={25} />
                <StyledP>{item.name}</StyledP>
                <StyledP>{item.amount}</StyledP>
              </StyledLi>
            )
        )}
      </StyledUL>
    </StyledSection>
  ) : (
    <StyledSection>
      <h1>how much you wanna sell?</h1>
      <Styledbutton
        onClick={() => {
          sellItem(1);
        }}
      >
        1
      </Styledbutton>
      <Styledbutton
        onClick={() => {
          sellItem(5);
        }}
      >
        5
      </Styledbutton>
      <Styledbutton
        onClick={() => {
          sellItem(10);
        }}
      >
        10
      </Styledbutton>
      <p>worth : {choosedItem.worth}</p>
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

const StyledP = styled.p`
  font-size: 10px;
`;

const Styledbutton = styled.button`
  font-size: 10px;
  width: 50px;
  height: 50px;
`;
