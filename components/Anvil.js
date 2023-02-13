import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Anvil({
  inventory,
  stopWorking,
  craftGoldArmor,
  craftGear,
}) {
  const [material, setMaterial] = useState(null);
  const [notEnough, setNotEnough] = useState(false);

  useEffect(() => {
    if (material) {
      const interval = setInterval(() => {
        if (material === "gear" && inventory.ironingot.amount >= 1) {
          craftGear();
        } else if (
          material === "goldarmor" &&
          inventory.goldingot.amount >= 5
        ) {
          craftGoldArmor();
        }
      }, 3000);
      if (
        (material === "gear" && inventory.ironingot.amount < 1) ||
        (material === "goldarmor" && inventory.goldingot.amount < 5)
      ) {
        setMaterial(null);
        setNotEnough(true);
        stopWorking(9, 4);
      }
      return () => clearInterval(interval);
    }
  }, [
    material,
    inventory,
    craftGear,
    craftGoldArmor,
    stopWorking,
    setNotEnough,
    notEnough,
  ]);

  return (
    <>
      <StyledSection>
        <h1>what you wanna craft?</h1>
        <StyledButton
          type="button"
          onClick={() => {
            setMaterial("gear");
          }}
        >
          GEAR
        </StyledButton>
        <StyledP>need 1x iron ingot for 2x gear</StyledP>
        <StyledButton
          type="button"
          onClick={() => {
            setMaterial("goldarmor");
          }}
        >
          GOLD BRACLET
        </StyledButton>
        <StyledP>need 5x gold ingot for 1x gold armor plate</StyledP>
      </StyledSection>
      {notEnough === true && (
        <StyledSection>
          <h2>I dont have enough materials</h2>
          <StyledButton type="button" onClick={() => setNotEnough(false)}>
            Back
          </StyledButton>
        </StyledSection>
      )}
    </>
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

const StyledP = styled.p`
  font-size: 10px;
`;
