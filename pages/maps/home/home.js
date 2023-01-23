import { useState } from "react";

import {
  Workstation1,
  Workstation2,
  Workstation3,
  WorkstationDiv,
  Character,
} from "../../../components/homeStyles";

export default function Home() {
  const [charClass, setCharClass] = useState("");

  return (
    <WorkstationDiv>
      <Character className={`${charClass}`} />
      <Workstation1 onClick={wsOneClick} />
      <Workstation2 onClick={wsTwoClick} />
      <Workstation3 onClick={wsThreeClick} />
    </WorkstationDiv>
  );

  function wsOneClick() {
    setCharClass((charClass) => "ws_one");
  }

  function wsTwoClick() {
    setCharClass((charClass) => "ws_two");
  }

  function wsThreeClick() {
    setCharClass((charClass) => "ws_three");
  }
}
