import styled from "styled-components";

export const Workstation = styled.button`
  width: 75px;
  height: 50px;
  border: 2px dashed black;
  border-radius: 25px;
  background-color: transparent;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
`;

export const WorkstationDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  column-gap: 4%;
  grid-template-columns: 1fr repeat(4, 20%) 1fr;
  grid-template-rows: repeat(13, 50px);
`;

export const Character = styled.div`
  height: 80px;
  width: 50px;
  background-color: red;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  margin-left: 13px;
`;
