import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";

import Inventory from "./Inventory";

export default function Layout({ children, inventory }) {
  const router = useRouter();
  const [inventoryState, setInventoryState] = useState(false);

  function worldmapButton() {
    if (location.pathname === "/worldmap") {
      router.back();
    } else {
      location.pathname = "/worldmap";
    }
  }
  function achievementButton() {
    if (location.pathname === "/achievement") {
      router.back();
    } else {
      location.pathname = "/achievement";
    }
  }
  return (
    <Grid>
      {children}
      <WorldmapButton type="button" onClick={worldmapButton}>
        Worldmap
      </WorldmapButton>
      <AchievementButton type="button" onClick={achievementButton}>
        Achievement
      </AchievementButton>
      <InventoryButton
        type="button"
        onClick={() => {
          setInventoryState(!inventoryState);
        }}
      >
        Inventory
      </InventoryButton>
      {inventoryState ? <Inventory inventory={inventory} /> : null}
    </Grid>
  );
}

const WorldmapButton = styled.button`
  width: 70px;
  height: 25px;
  border-radius: 25%;
  grid-column: 2;
  grid-row: 1;
  margin-top: 25px;
`;

const InventoryButton = styled.button`
  width: 70px;
  height: 25px;
  border-radius: 25%;
  grid-column: 2;
  grid-row: 13;
  margin-top: 25px;
`;

const AchievementButton = styled.button`
  width: 70px;
  height: 25px;
  border-radius: 25%;
  grid-column: 5;
  grid-row: 1;
  margin-top: 25px;
`;

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  column-gap: 4%;
  grid-template-columns: 1fr repeat(4, 20%) 1fr;
  grid-template-rows: repeat(13, 50px);
`;
