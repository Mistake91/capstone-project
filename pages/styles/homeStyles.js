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
export const SmelterStation = styled.div`
  width: 125px;
  height: 200px;
  grid-row: 4;
  grid-column: 4;
  margin-left: 10px;
`;
export const AnvilStation = styled.div`
  width: 100px;
  height: 50px;
  grid-row: 20;
  grid-column: 6;
`;
