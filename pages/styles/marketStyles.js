import styled from "styled-components";

export const StyledDiv = styled.div`
  z-index: -1;
  position: fixed;
`;
export const CharacterDiv = styled.div`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  z-index: 2;
`;
export const Vendor = styled.div`
  width: 137px;
  height: 146px;
  margin-left: 7px;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
`;
