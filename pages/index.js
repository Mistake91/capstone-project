import { useState } from "react";

import {
  Workstation,
  WorkstationDiv,
  Character,
} from "../components/homeStyles";

export default function HomePage() {
  const [characterPosition, setCharacterPositon] = useState({
    row: 9,
    column: 2,
  });

  return (
    <WorkstationDiv>
      <Character
        row={characterPosition.row}
        column={characterPosition.column}
      />
      <Workstation onClick={() => positionHandler(9, 3)} row={9} column={3} />
      <Workstation onClick={() => positionHandler(9, 4)} row={9} column={4} />
      <Workstation onClick={() => positionHandler(7, 3)} row={7} column={3} />
    </WorkstationDiv>
  );

  function positionHandler(row, column) {
    setCharacterPositon({ row, column });
  }
}
