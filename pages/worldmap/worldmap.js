import Image from "next/image";

import WorldMap from "../../images/Maps/Worldmap_BG.png";
import { WMLink, StyledDiv } from "./styles";

export default function Worldmap() {
  return (
    <>
      <StyledDiv>
        <Image src={WorldMap} alt="Background" />
      </StyledDiv>
      <WMLink row={5} column={1} href="/" />
      <WMLink row={14} column={1} href="/mines/coalmine" />
      <WMLink row={17} column={6} href="/mines/ironmine" />
      <WMLink row={22} column={2} href="/mines/goldmine" />
      <WMLink row={9} column={6} href="/market/market" />
    </>
  );
}
