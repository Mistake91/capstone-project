import Image from "next/image";
import styled from "styled-components";
// import { useRouter } from "next/router";

import WorldMap from "../images/Maps/Worldmap_BG.png";

export default function Worldmap() {
  // const router = useRouter();
  return (
    <>
      <StyledDiv>
        <Image src={WorldMap} alt="Background" />
      </StyledDiv>
      <WMLink
        row={5}
        column={1}
        onClick={() => {
          location.pathname = "/";
        }}
      />
      <WMLink
        row={14}
        column={1}
        onClick={() => {
          location.pathname = "/coalmine";
        }}
      />
      <WMLink
        row={17}
        column={6}
        onClick={() => {
          location.pathname = "/ironmine";
        }}
      />
      <WMLink
        row={22}
        column={2}
        onClick={() => {
          location.pathname = "/goldmine";
        }}
      />
      <WMLink
        row={9}
        column={6}
        onClick={() => {
          location.pathname = "/market";
        }}
      />
    </>
  );
}

const WMLink = styled.a`
  width: 100px;
  height: 60px;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  margin-left: 50px;
`;

const StyledDiv = styled.div`
  z-index: -1;
  position: fixed;
`;
