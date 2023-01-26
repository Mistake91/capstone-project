import { useState } from "react";

import { Workstation, Character } from "../components/homeStyles";

export default function Ironmine() {
  const [characterPosition, setCharacterPositon] = useState({
    row: 9,
    column: 2,
  });

  return (
    <>
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
  }
}
