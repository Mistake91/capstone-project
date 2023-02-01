import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";

import { Grid } from "@/components/homeStyles";
import Inventar from "./inventory";

export default function Layout({ children, inventar }) {
  const router = useRouter();
  const [inventoryState, setInventoryState] = useState(false);

  function worldmapButton() {
    if (location.pathname === "/worldmap") {
      router.back();
    } else {
      location.pathname = "/worldmap";
    }
  }

  return (
    <Grid>
      {children}
      <WorldmapButton onClick={worldmapButton} />
      <InventoryButton
        onClick={() => {
          setInventoryState(!inventoryState);
        }}
      />
      {inventoryState === true ? <Inventar inventar={inventar} /> : ""}
    </Grid>
  );
}

const WorldmapButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 25%;
  grid-column: 2;
  grid-row: 1;
  margin-top: 25px;
`;

const InventoryButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 25%;
  grid-column: 2;
  grid-row: 13;
  margin-top: 25px;
`;
