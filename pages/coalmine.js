import { useState } from "react";

import { Workstation, Character } from "../components/homeStyles";

export default function Worldmap() {
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
      <Workstation onClick={() => positionHandler(3, 3)} row={3} column={3} />
      <Workstation onClick={() => positionHandler(6, 4)} row={6} column={4} />
      <Workstation onClick={() => positionHandler(9, 3)} row={9} column={3} />
    </>
  );

  function positionHandler(row, column) {
    setCharacterPositon({ row, column });
  }
}
