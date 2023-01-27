import { useState } from "react";
import styled from "styled-components";

import { Workstation, Character } from "../components/homeStyles";

export default function Ironmine({ materials, setMaterials }) {
  const [characterPosition, setCharacterPositon] = useState({
    row: 9,
    column: 2,
  });

  const [isStopButtonVIsible, setIsStopButtonVIsible] = useState(false);

  return (
    <>
      {isStopButtonVIsible ? (
        <StyledButton
          row={characterPosition.row + 2}
          column={characterPosition.column}
          onClick={() => {
            setIsStopButtonVIsible(false);
            stopWorking(9, 2);
          }}
        >
          STOP
        </StyledButton>
      ) : (
        ""
      )}

      <Character
        row={characterPosition.row}
        column={characterPosition.column}
      />
      <Workstation
        row={3}
        column={3}
        onClick={() => {
          positionHandler(3, 3);
        }}
      />
      <Workstation
        row={6}
        column={4}
        onClick={() => {
          positionHandler(6, 4);
        }}
      />
      <Workstation
        row={9}
        column={3}
        onClick={() => {
          positionHandler(9, 3);
        }}
      />
    </>
  );

  function positionHandler(row, column) {
    setCharacterPositon({ row, column });
    setIsStopButtonVIsible(true);
    startWorking(materials);
  }

  function startWorking() {
    clearInterval(window.interval);
    window.interval = setInterval(() => {
      setMaterials(materials, materials[1].iron++);
    }, 2000);
  }

  function stopWorking(row, column) {
    setCharacterPositon({ row, column });
    clearInterval(window.interval);
  }
}

const StyledButton = styled.button`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
`;
