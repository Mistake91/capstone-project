import styled from "styled-components";

export const WMLink = styled.a`
  width: 100px;
  height: 60px;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  margin-left: 50px;
`;

export const StyledDiv = styled.div`
  z-index: -1;
  position: fixed;
`;
