import styled from "styled-components";

export default function Smeltery({ inventar, setInventar, stopWorking }) {
  let choosedMaterial = "";

  function working() {
    clearInterval(window.interval);
    window.interval = setInterval(() => {
      if (
        choosedMaterial === "iron" &&
        inventar[0].amount > 0 &&
        inventar[1].amount > 0
      ) {
        setInventar(
          inventar,
          inventar[0].amount--,
          inventar[1].amount--,
          inventar[3].amount++
        );
      } else if (inventar[0].amount > 0 && inventar[2].amount > 0) {
        setInventar(
          inventar,
          inventar[0].amount--,
          inventar[2].amount--,
          inventar[4].amount++
        );
      } else {
        stopWorking(9, 3);
      }
    }, 3000);
  }

  return (
    <>
      <StyledSection>
        <h1>which ore you wanna smelt?</h1>
        <StyledButton
          onClick={() => {
            working();
            choosedMaterial = "iron";
          }}
        >
          IRON
        </StyledButton>
        <StyledButton
          onClick={() => {
            choosedMaterial = "gold";
            working();
          }}
        >
          GOLD
        </StyledButton>
      </StyledSection>
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
