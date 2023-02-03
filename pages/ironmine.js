import { useState, useEffect } from "react";
import styled from "styled-components";

import { Workstation, Character } from "../components/homeStyles";

export default function Ironmine({ inventory, setInventory }) {
  const [characterPosition, setCharacterPositon] = useState({
    row: 9,
    column: 2,
  });

  const [isStopButtonVisible, setIsStopButtonVisible] = useState(false);

  const [isWorking, setIsWorking] = useState(null);

  useEffect(() => {
    if (isWorking) {
      const interval = setInterval(() => {
        setInventory((prevInventory) => {
          const updatedInventory = {
            ...prevInventory,
            ironore: {
              ...prevInventory.ironore,
              amount: prevInventory.ironore.amount + 1,
            },
          };
          return updatedInventory;
        });
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [setInventory, isWorking]);

  return (
    <>
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
    setIsStopButtonVisible(true);
    setIsWorking(inventory);
  }

  function stopWorking(row, column) {
    setCharacterPositon({ row, column });
    setIsWorking(false);
  }
}

const StyledButton = styled.button`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
`;
