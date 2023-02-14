import Image from "next/image";

import InInventory from "../../images/Globals/InInventory.png";
import Dwarfi from "../../images/Globals/Dwarfi.png";
import {
  StyledInventory,
  StyledSection,
  InventoryPlace,
  StyledP,
  StyledMoney,
  StyledUL,
} from "./styles";

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
