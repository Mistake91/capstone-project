import styled from "styled-components";

export const StyledSection = styled.section`
  z-index: 1;
  grid-column: 3;
  grid-row: 2;
  text-align: center;
`;
export const StyledXDiv = styled.div`
  z-index: 2;
  grid-column: 8;
  grid-row: 1;
  margin: 10px 0 0 10px;
`;
export const StyledButtonDiv = styled.div`
  z-index: 2;
  width: 100px;
  height: 50px;
  grid-column: ${(props) => props.column};
  grid-row: 6;
  margin-left: ${(props) => props.marginleft};
`;
export const StyledMainP = styled.p`
  z-index: 2;
  grid-column: 2;
  grid-row: 3;
  margin-left: 45px;
  width: 200px;
  text-align: center;
  font-size: 14px;
`;
export const StyledP = styled.p`
  z-index: 3;
  grid-row: 6;
  grid-column: ${(props) => props.column};
  font-size: 10px;
  margin: ${(props) => props.margin};
  pointer-events: none;
`;
