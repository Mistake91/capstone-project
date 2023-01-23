import styled from "styled-components";

export const Workstation1 = styled.button`
  width: 75px;
  height: 50px;
  border: 2px dashed black;
  border-radius: 25px;
  background-color: transparent;
  grid-row: 5;
  grid-column: 3;
`;

export const Workstation2 = styled.button`
  width: 75px;
  height: 50px;
  border: 2px dashed black;
  border-radius: 25px;
  background-color: transparent;
  grid-row: 5;
  grid-column: 6;
`;

export const Workstation3 = styled.button`
  width: 75px;
  height: 50px;
  border: 2px dashed black;
  border-radius: 25px;
  background-color: transparent;
  grid-row: 2;
  grid-column: 4;
`;

export const WorkstationDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 4% 20% 4% 20% 4% 20% 4% 20% 4%;
  grid-template-rows: 267px 50px 50px 50px 50px 50px 50px 50px 50px;
`;

export const Character = styled.div`
  height: 80px;
  width: 50px;
  background-color: red;
  grid-row: 5;
  grid-column: 2;
  margin-left: 13px;
  &.ws_one {
    grid-column: 3;
  }
  &.ws_two {
    grid-column: 6;
  }
  &.ws_three {
    grid-row: 2;
    grid-column: 4;
  }
`;
