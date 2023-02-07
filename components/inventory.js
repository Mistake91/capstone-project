import styled from "styled-components";
import Image from "next/image";
import icon_placeholder from "../images/icon_placeholder.png";

export default function Inventory({ inventory }) {
  const filteredInventory = Object.values(inventory).filter(
    (item) => item.amount > 0
  );
  return (
    <StyledSection>
      <StyledUL>
        {Object.values(filteredInventory).map(
          (item) =>
            item.id != 99 && (
              <InventoryPlace key={item.id} row={item.row} column={item.column}>
                <Image src={icon_placeholder} alt="" width={40} height={40} />
                <StyledP>{item.name}</StyledP>
                <StyledP>{item.amount}</StyledP>
              </InventoryPlace>
            )
        )}
      </StyledUL>
      <p>
        {inventory.dwarfi.name} : {inventory.dwarfi.amount}
      </p>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  grid-column: 2/6;
  grid-row: 6/13;
  margin: 0 45px;
  background-color: brown;
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
  font-size: 10px;
`;

const StyledUL = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 20px;
  list-style: none;
`;
