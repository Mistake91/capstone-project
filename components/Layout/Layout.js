import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

import WorldmapButton from "../../images/Globals/WorldmapButton.png";
import Chest_Closed from "../../images/Globals/Chest_Closed.png";
import Chest_Open from "../../images/Globals/Chest_Open.png";
import Trophy from "../../images/Globals/Trophy.png";

import Inventory from "../Inventory/Inventory";
import { StyledButton, Grid, GridDiv } from "./styles";

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
