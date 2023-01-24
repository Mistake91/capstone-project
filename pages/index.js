import { useState } from "react";

import { Workstation, Character } from "../components/homeStyles";

export default function HomePage() {
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
      <Workstation row={9} column={3} onClick={() => positionHandler(9, 3)} />
      <Workstation row={9} column={4} onClick={() => positionHandler(9, 4)} />
      <Workstation row={7} column={3} onClick={() => positionHandler(7, 3)} />
    </>
  );

  function positionHandler(row, column) {
    setCharacterPositon({ row, column });
  }
}
