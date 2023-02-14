import styled from "styled-components";

export const StyledSection = styled.section`
  z-index: 1;
  grid-column: 3;
  grid-row: 2;
  text-align: center;
`;
export const StyledButtonDiv = styled.div`
  z-index: 2;
  width: 100px;
  height: 50px;
  margin-left: ${(props) => props.marginleft};
  grid-column: ${(props) => props.column};
  grid-row: 6;
`;
export const StyledXDiv = styled.div`
  z-index: 2;
  grid-column: 8;
  grid-row: 1;
  margin: 10px 0 0 10px;
`;
export const StyledbackP = styled.div`
  z-index: 2;
  font-size: 10px;
  margin: 13px 0 0 0;
  grid-row: 6;
  grid-column: 5;
  margin-left: 10px;
  pointer-events: none;
`;
export const StyledBackDiv = styled.div`
  z-index: 1;
  grid-row: 6;
  grid-column: 5;
  margin-left: 6px;
  width: 100px;
  height: 50px;
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
export const NeedP = styled.p`
  z-index: 3;
  width: 75px;
  grid-row: 5;
  margin-left: ${(props) => props.marginleft};
  grid-column: ${(props) => props.column};
  font-size: 8px;
  text-align: center;
`;
export const StyledP = styled.p`
  z-index: 3;
  grid-row: 6;
  font-size: 7px;
  pointer-events: none;
  margin: ${(props) => props.margin};
  grid-column: ${(props) => props.column};
`;
