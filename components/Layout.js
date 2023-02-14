import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import WorldmapButton from "../images/Globals/WorldmapButton.png";
import Chest_Closed from "../images/Globals/Chest_Closed.png";
import Chest_Open from "../images/Globals/Chest_Open.png";
import Trophy from "../images/Globals/Trophy.png";

import Inventory from "./Inventory";

export default function Layout({ children, inventory }) {
  const router = useRouter();
  const [inventoryState, setInventoryState] = useState(false);

  function worldmapButton() {
    if (location.pathname === "/worldmap/worldmap") {
      router.back();
    } else {
      location.pathname = "/worldmap/worldmap";
    }
  }
  function achievementButton() {
    if (location.pathname === "/achievements/achievements") {
      router.back();
    } else {
      location.pathname = "/achievements/achievements";
    }
  }
  return (
    <GridDiv>
      <Grid>
        {children}
        <StyledButton
          column={1}
          row={1}
          margin={"25px 0 0 20px"}
          onClick={worldmapButton}
        >
          <Image src={WorldmapButton} alt="Worldmap" />
        </StyledButton>
        <StyledButton
          column={9}
          row={1}
          margin={"25px 0 0 20px"}
          onClick={achievementButton}
        >
          <Image src={Trophy} alt="Achievements" />
        </StyledButton>

        <StyledButton
          column={1}
          row={25}
          margin={"15px 0 0 20px"}
          onClick={() => {
            setInventoryState(!inventoryState);
          }}
        >
          {!inventoryState ? (
            <Image src={Chest_Closed} alt="Inventory" />
          ) : (
            <Image src={Chest_Open} alt="Inventory" />
          )}
        </StyledButton>
        {inventoryState && <Inventory inventory={inventory} />}
      </Grid>
    </GridDiv>
  );
}

const StyledButton = styled.div`
  z-index: 99;
  width: 70px;
  height: 25px;
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
  margin: ${(props) => props.margin};
`;
const Grid = styled.div`
  position: fixed;
  width: 375px;
  height: 668px;
  display: grid;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(26, 25px);
`;
const GridDiv = styled.div`
  display: flex;
  justify-content: center;
`;
