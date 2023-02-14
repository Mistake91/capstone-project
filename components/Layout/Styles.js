import styled from "styled-components";

export const StyledButton = styled.div`
  z-index: 99;
  width: 70px;
  height: 25px;
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
  margin: ${(props) => props.margin};
`;
export const Grid = styled.div`
  position: fixed;
  width: 375px;
  height: 668px;
  display: grid;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(26, 25px);
`;
export const GridDiv = styled.div`
  display: flex;
  justify-content: center;
`;
