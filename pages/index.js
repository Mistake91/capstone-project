import { useState } from "react";
import styled from "styled-components";

import { Station, Character } from "../components/Station";
import Smeltery from "../components/Smeltery";

export default function HomePage({
  inventory,
  setInventory,
  smelterIron,
  smelterGold,
}) {
  const [characterPosition, setCharacterPositon] = useState({
    row: 9,
    column: 2,
  });

  const [isStopButtonVisible, setIsStopButtonVisible] = useState(false);

  return (
    <>
      {characterPosition.row === 9 && characterPosition.column === 3 && (
        <Smeltery
          inventory={inventory}
          setInventory={setInventory}
          stopWorking={stopWorking}
          smelterIron={smelterIron}
          smelterGold={smelterGold}
        />
      )}

      {isStopButtonVisible && (
        <StyledButton
          row={characterPosition.row + 2}
          column={characterPosition.column}
          onClick={() => {
            setIsStopButtonVisible(false);
            stopWorking(9, 2);
          }}
        >
          STOP
        </StyledButton>
      )}

      <Character
        row={characterPosition.row}
        column={characterPosition.column}
      />
      <Station
        row={9}
        column={3}
        onClick={() => {
          positionHandler(9, 3, setCharacterPositon);
        }}
      >
        smelter
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

const StyledButton = styled.button`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
`;
