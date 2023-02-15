import Image from "next/image";
import styled from "styled-components";

import InInventory from "../images/Globals/InInventory.png";
import Dwarfi from "../images/Globals/Dwarfi.png";

export default function Inventory({ inventory }) {
  const filteredInventory = Object.values(inventory).filter(
    (item) => item.amount > 0 && item.id !== "99"
  );
  return (
    <>
      <StyledSection>
        <StyledUL>
          {Object.values(filteredInventory).map((item) => (
            <InventoryPlace key={item.id} row={item.row} column={item.column}>
              <Image src={item.icon} alt={item.name} width={40} height={40} />
              <p>{item.amount}</p>
            </InventoryPlace>
          ))}
        </StyledUL>
      </StyledSection>
      <StyledMoney>
        <Image src={Dwarfi} alt="Dwarfi" />
      </StyledMoney>
      <StyledP>:{inventory.dwarfi.amount} </StyledP>
      <StyledInventory>
        <Image src={InInventory} alt="Inventory" />
      </StyledInventory>
    </>
  );
}

const StyledInventory = styled.div`
  z-index: 3;
  grid-column: 1;
  grid-row: 16;
  margin: 0 40px;
`;
const StyledSection = styled.section`
  z-index: 4;
  grid-column: 3/9;
  grid-row: 17/24;
  margin-bottom: 7px;
  margin-top: 10px;
  text-align: center;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const InventoryPlace = styled.li`
  margin: 10px 10px 0 10px;
  width: 50px;
`;
const StyledP = styled.p`
  font-size: 20px;
  width: 100vw;
  margin: 20px 0 0 25px;
  grid-column: 5;
  color: #fffdd0;
  grid-row: 25;
`;
const StyledMoney = styled.div`
  grid-column: 5;
  grid-row: 25;
  margin-top: 15px;
`;
const StyledUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;
