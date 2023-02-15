import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import IdleAnimation from "@/components/IdleAnimation";
import Buy from "@/components/Buy";
import Sell from "@/components/Sell";
import Market_BG from "../images/Maps/Mine_Market_BG.png";
import BuyVendor from "../images/Globals/Vendor_Buy.png";
import SellVendor from "../images/Globals/Vendor_Sell.png";
import Back from "../images/Character/Back.png";

export default function Market({
  inventory,
  setInventory,
  setActivity,
  activity,
}) {
  const [characterPosition, setCharacterPositon] = useState({
    row: 18,
    column: 5,
  });
  return (
    <>
      <StyledDiv>
        <Image src={Market_BG} alt="Background" />
      </StyledDiv>
      {characterPosition.row === 13 && characterPosition.column === 7 && (
        <Sell
          inventory={inventory}
          setInventory={setInventory}
          setCharacterPositon={setCharacterPositon}
          setActivity={setActivity}
        />
      )}
      {characterPosition.row === 13 && characterPosition.column === 3 && (
        <Buy
          inventory={inventory}
          setInventory={setInventory}
          setCharacterPositon={setCharacterPositon}
          setActivity={setActivity}
        />
      )}

      <CharacterDiv
        row={characterPosition.row}
        column={characterPosition.column}
      >
        {activity === "vendor" ? (
          <Image src={Back} alt="Character" />
        ) : (
          <IdleAnimation />
        )}
      </CharacterDiv>
      <Vendor
        row={10}
        column={2}
        onClick={() => {
          positionHandler(13, 3);
          setActivity("vendor");
        }}
      >
        <Image src={BuyVendor} alt="Buy" />
      </Vendor>
      <Vendor
        row={10}
        column={6}
        onClick={() => {
          positionHandler(13, 7);
          setActivity("vendor");
        }}
      >
        <Image src={SellVendor} alt="Sell" />
      </Vendor>
    </>
  );

  function positionHandler(row, column) {
    setCharacterPositon({ row, column });
  }
}
const StyledDiv = styled.div`
  z-index: -1;
  position: fixed;
`;
const CharacterDiv = styled.div`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  z-index: 2;
`;
const Vendor = styled.div`
  width: 137px;
  height: 146px;
  margin-left: 7px;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
`;
