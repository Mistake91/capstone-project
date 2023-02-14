import styled from "styled-components";

export const StyledInventory = styled.div`
  z-index: 3;
  grid-column: 1;
  grid-row: 16;
  margin: 0 40px;
`;
export const StyledSection = styled.section`
  z-index: 4;
  grid-column: 3/9;
  grid-row: 17/24;
  margin-bottom: 7px;
  margin-top: 10px;
  text-align: center;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const InventoryPlace = styled.li`
  margin: 10px 10px 0 10px;
  width: 50px;
`;
export const StyledP = styled.p`
  font-size: 20px;
  width: 100vw;
  margin: 20px 0 0 25px;
  grid-column: 5;
  color: #fffdd0;
  grid-row: 25;
`;
export const StyledMoney = styled.div`
  grid-column: 5;
  grid-row: 25;
  margin-top: 15px;
`;
export const StyledUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;
