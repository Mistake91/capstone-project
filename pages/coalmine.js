import { useState } from "react";

import { Workstation, Character } from "../components/homeStyles";

export default function Coalmine() {
  const [characterPosition, setCharacterPositon] = useState({
    row: 9,
    column: 2,
  });

  let klick = false;

  return (
    <>
      <button
        onClick={() => {
          klick = true;
          schnup(9, 2);
        }}
      />
      <Character
        row={characterPosition.row}
        column={characterPosition.column}
      />
      <Workstation
        row={3}
        column={3}
        onClick={() => {
          blub(9);
          positionHandler(3, 3);
        }}
      />
      <Workstation
        row={6}
        column={4}
        onClick={() => {
          blub(9);
          positionHandler(6, 4);
        }}
      />
      <Workstation
        row={9}
        column={3}
        onClick={() => {
          blub(9);
          positionHandler(9, 3);
        }}
      />
    </>
  );

  function positionHandler(row, column) {
    setCharacterPositon({ row, column });
  }

  function schnup(row, column) {
    setCharacterPositon({ row, column });
    clearInterval(window.interval);
  }

  function blub() {
    clearInterval(window.interval);
    window.interval = setInterval(() => {
      console.log("This will run every second!");
      return () => clearInterval(interval);
    }, 1000);
  }
}
