import styled from "styled-components";
import { useRouter } from "next/router";
import { Grid } from "@/components/homeStyles";

export default function Layout({ inventar, children }) {
  const router = useRouter();

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
      <InventarList>
        <li>Coal: {inventar[0].coal}</li>
        <li>Iron ore: {inventar[1].ironore}</li>
        <li>Gold ore: {inventar[2].goldore}</li>
        <li>Iron ingot: {inventar[3].ironingot}</li>
        <li>Gold ingot: {inventar[4].goldingot}</li>
      </InventarList>
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
const InventarList = styled.ul`
  list-style: none;
  grid-column-start: 2;
  width: 100px;
  grid-row: 12;
  margin: 0;
  padding: 0;
`;
