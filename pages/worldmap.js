import styled from "styled-components";

export default function Worldmap() {
  return (
    <>
      <WMLink row={4} column={2} href="/">
        home
      </WMLink>
      <WMLink row={8} column={3} href="/coalmine">
        coal
      </WMLink>
      <WMLink row={6} column={4} href="/ironmine">
        iron
      </WMLink>
      <WMLink row={11} column={4} href="/goldmine">
        gold
      </WMLink>
    </>
  );
}

const WMLink = styled.a`
  width: 50px;
  height: 50px;
  background-color: grey;
  border-radius: 25%;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  margin-left: 50px;
`;
