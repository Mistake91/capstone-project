import styled from "styled-components";
import { useRouter } from "next/router";

export default function Layout({ materials }) {
  const router = useRouter();

  function worldmapButton() {
    if (location.pathname === "/worldmap") {
      router.back();
    } else {
      location.pathname = "/worldmap";
    }
  }

  return (
    <>
      <WorldmapButton onClick={worldmapButton} />
      <MaterialList>
        <li>Coal: {materials[0].coal}</li>
        <li>Iron: {materials[1].iron}</li>
      </MaterialList>
    </>
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
const MaterialList = styled.ul`
  list-style: none;
  grid-column: 2;
  grid-row: 13;
  margin: 0;
  padding: 0;
`;
