import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Smeltery({
  inventory,
  stopWorking,
  smelterIron,
  smelterGold,
}) {
  const [material, setMaterial] = useState(null);

  useEffect(() => {
    if (material) {
      const interval = setInterval(() => {
        if (
          material === "iron" &&
          inventory.coal.amount > 0 &&
          inventory.ironore.amount > 0
        ) {
          smelterIron();
        } else if (
          material === "gold" &&
          inventory.coal.amount > 0 &&
          inventory.goldore.amount > 0
        ) {
          smelterGold();
        } else {
          stopWorking(9, 3);
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [material, inventory, smelterGold, smelterIron, stopWorking]);

  return (
    <StyledSection>
      <h1>which ore you wanna smelt?</h1>
      <StyledButton
        onClick={() => {
          setMaterial("iron");
        }}
      >
        IRON
      </StyledButton>
      <StyledButton
        onClick={() => {
          setMaterial("gold");
        }}
      >
        GOLD
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
