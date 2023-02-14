import styled from "styled-components";

export const StyledUL = styled.ul`
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 180px;
  grid-column: 3;
  margin: 8px 0 0 20px;
  height: 88px;
  grid-row: 4;
  list-style: none;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const StyledLi = styled.li`
  width: 30px;
  display: flex;
  flex-direction: column;
  font-size: 8px;
  gap: 5px;
  align-items: center;
`;
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
export const StyledDiv = styled.div`
  z-index: 2;
  height: 50px;
  grid-row: 6;
  grid-column: ${(props) => props.column};
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
  font-size: 10px;
  pointer-events: none;
  text-align: center;
  grid-row: 6;
  width: ${(props) => props.width};
  grid-column: ${(props) => props.column};
  margin: ${(props) => props.margin};
`;
export const StyledWorthP = styled.p`
  z-index: 3;
  font-size: 10px;
  width: 200px;
  grid-row: 5;
  grid-column: 4;
  margin-top: 10px;
`;
