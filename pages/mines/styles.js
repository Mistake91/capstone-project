import styled from "styled-components";

export const StyledDiv = styled.div`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  margin-left: ${(props) => props.marginleft};
  z-index: 1;
`;
export const StyledBGDiv = styled.div`
  z-index: -1;
  position: fixed;
`;
export const StyledP = styled.p`
  margin: 15px 0 0 17px;
  font-size: 10px;
  pointer-events: none;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  z-index: 2;
`;
export const Deposit1 = styled.div`
  width: 125px;
  height: 100px;
  grid-row: 18;
  grid-column: 6;
  z-index: 0;
`;
export const Deposit2 = styled.div`
  width: 135px;
  height: 130px;
  grid-row: 10;
  grid-column: 3;
  z-index: 0;
`;
export const Deposit3 = styled.div`
  width: 130px;
  height: 130px;
  grid-row: 5;
  grid-column: 6;
  z-index: 0;
`;
