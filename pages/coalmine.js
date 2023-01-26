import { useState } from "react";
import styled from "styled-components";

import { Workstation, Character } from "../components/homeStyles";

export default function Coalmine({ coal, setCoal }) {
  const [characterPosition, setCharacterPositon] = useState({
    row: 9,
    column: 2,
  });

  const [stopButton] = useState({
    visi: "hidden",
  });

  return (
    <>
      <StopWorkingButton
        row={characterPosition.row + 2}
        column={characterPosition.column}
        visi={stopButton.visi}
        onClick={() => {
          stopButton.visi = "hidden";
          stopWorking(9, 2);
        }}
      >
        STOP
      </StopWorkingButton>

      <Character
        row={characterPosition.row}
        column={characterPosition.column}
      />
      <Workstation
        row={3}
        column={3}
        onClick={() => {
          stopButton.visi = "visible";
          startWorking();
          positionHandler(3, 3);
        }}
      />
      <Workstation
        row={6}
        column={4}
        onClick={() => {
          stopButton.visi = "visible";
          startWorking();
          positionHandler(6, 4);
        }}
      />
      <Workstation
        row={9}
        column={3}
        onClick={() => {
          stopButton.visi = "visible";
          startWorking();
          positionHandler(9, 3);
        }}
      />
    </>
  );

  function positionHandler(row, column) {
    setCharacterPositon({ row, column });
  }

  function startWorking() {
    clearInterval(window.interval);
    window.interval = setInterval(() => {
      setCoal(coal++);
    }, 2000);
  }

  function stopWorking(row, column) {
    setCharacterPositon({ row, column });
    clearInterval(window.interval);
  }
}

const StopWorkingButton = styled.button`
  visibility: ${(props) => props.visi};
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
`;
