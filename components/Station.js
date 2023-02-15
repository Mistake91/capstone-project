import styled from "styled-components";

export const Station = styled.button`
  width: 75px;
  height: 50px;
  border: 2px dashed black;
  border-radius: 25px;
  background-color: transparent;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
`;
export const Character = styled.div`
  height: 80px;
  width: 50px;
  background-color: red;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  margin-left: 13px;
`;
