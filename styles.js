import { createGlobalStyle } from "styled-components";
import { Press_Start_2P } from "@next/font/google";

const PS2P = Press_Start_2P({ subsets: ["latin"], weight: ["400"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

  body {
    margin: 0;
    font-family: ${PS2P.style.fontFamily};
    background-color: #191716
  }
`;
