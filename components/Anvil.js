import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Anvil({
  inventory,
  stopWorking,
  craftGoldArmorPlate,
  craftGear,
}) {
  const [material, setMaterial] = useState(null);

  useEffect(() => {
    if (material) {
      const interval = setInterval(() => {
        if (material === "gear" && inventory.ironingot.amount >= 1) {
          craftGear();
        } else if (
          material === "goldarmorplate" &&
          inventory.goldingot.amount >= 5
        ) {
          craftGoldArmorPlate();
        } else {
          stopWorking(9, 4);
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [material, inventory, craftGear, craftGoldArmorPlate, stopWorking]);

  return (
    <StyledSection>
      <h1>what you wanna craft?</h1>
      <StyledButton
        onClick={() => {
          setMaterial("gear");
        }}
      >
        GEAR
      </StyledButton>
      <StyledButton
        onClick={() => {
          setMaterial("goldarmorplate");
        }}
      >
        GOLD BRACLET
      </StyledButton>
    </StyledSection>
  );
}
const StyledSection = styled.section`
  grid-column: 2/6;
  grid-row: 2/7;
  background-color: red;
  border-radius: 10%;
  display: grid;
  text-align: center;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  margin: 0 auto 0 auto;
`;
