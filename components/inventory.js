import styled from "styled-components";
import Image from "next/image";
import icon_placeholder from "../images/icon_placeholder.png";

export default function Inventar({ inventar }) {
  console.log(inventar);
  return (
    <Inventory>
      {inventar.map((item) => (
        <InventoryPlace key={item.id} row={item.row} column={item.column}>
          <Image src={icon_placeholder} alt="" width={40} height={40} />
          <StyledP>{item.name}</StyledP>
          <StyledP>{item.amount}</StyledP>
        </InventoryPlace>
      ))}
    </Inventory>
  );
}

const Inventory = styled.section`
  grid-column: 2/6;
  grid-row: 6/13;
  margin: 0 35px;
  background-color: brown;
  border-radius: 10%;
  display: grid;
  text-align: center;
  display: grid;
  gap: 4%;
  grid-template-columns: 1fr repeat(4, 20%) 1fr;
  grid-template-rows: 25px repeat(4, 60px);
`;

const InventoryPlace = styled.section`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
`;

const StyledP = styled.p`
  font-size: 10px;
`;
