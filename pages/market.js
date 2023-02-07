import { useState } from "react";
import styled from "styled-components";

import { Station, Character } from "../components/Station";
import Sell from "../components/Sell";
import Buy from "../components/Buy";

export default function Market({ inventory, setInventory }) {
  const [characterPosition, setCharacterPositon] = useState({
    row: 9,
    column: 2,
  });
  const [isStopButtonVisible, setIsStopButtonVisible] = useState(false);

  return (
    <>
      {isStopButtonVisible && (
        <StyledStopButton
          row={characterPosition.row + 2}
          column={characterPosition.column}
          onClick={() => {
            setIsStopButtonVisible(false);
            stopWorking(9, 2);
          }}
        >
          STOP
        </StyledStopButton>
      )}
      {characterPosition.row === 8 && characterPosition.column === 4 && (
        <Sell inventory={inventory} setInventory={setInventory} />
      )}
      {characterPosition.row === 8 && characterPosition.column === 3 && (
        <Buy inventory={inventory} setInventory={setInventory} />
      )}

      <Character
        row={characterPosition.row}
        column={characterPosition.column}
      />
      <Station
        row={8}
        column={3}
        onClick={() => {
          positionHandler(8, 3);
        }}
      >
        BUY
      </Station>
      <Station
        row={8}
        column={4}
        onClick={() => {
          positionHandler(8, 4);
        }}
      >
        SELL
      </Station>
    </>
  );

  function positionHandler(row, column) {
    setCharacterPositon({ row, column });
    setIsStopButtonVisible(true);
  }

  function stopWorking(row, column) {
    setCharacterPositon({ row, column });
  }
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

const StyledStopButton = styled.button`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
`;
