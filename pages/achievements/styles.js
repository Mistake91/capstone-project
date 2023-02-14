import styled from "styled-components";

export const StyledLi = styled.li`
  list-style: none;
  margin-top: 5px;
`;
export const StyledSection = styled.section`
  grid-column: 1/11;
  grid-row: 4/25;
  padding: 50px 0;
  margin: 10px 45px 0 45px;
  text-align: center;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const StyledBGDiv = styled.div`
  z-index: -1;
  position: fixed;
`;
export const StyledFrame = styled.div`
  z-index: 99;
  position: fixed;
  pointer-events: none;
`;
export const StyledP = styled.p`
  position: absolute;
  width: 100px;
  right: 25%;
  left: 25%;
  font-size: 12px;
`;
export const StyledDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  left: 10%;
`;
