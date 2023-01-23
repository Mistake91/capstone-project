import { useState } from "react";

import {
  Workstation1,
  Workstation2,
  Workstation3,
  WorkstationDiv,
  Character,
} from "../components/homeStyles";

export default function HomePage() {
  const [row, setRow] = useState(9);
  const [column, setColumn] = useState(2);

  return (
    <WorkstationDiv>
      <Character row={row} column={column} />
      <Workstation1 onClick={() => positionHandler(9, 3)} />
      <Workstation2 onClick={() => positionHandler(9, 4)} />
      <Workstation3 onClick={() => positionHandler(7, 3)} />
    </WorkstationDiv>
  );

  function positionHandler(row, column) {
    setRow(row);
    setColumn(column);
  }
}
