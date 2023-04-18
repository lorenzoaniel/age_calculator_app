import { createGlobalStyle } from "styled-components";
import "normalize.css";
import { device } from "./breakpoints";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif; //default

    transition: font-size 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out;
  }

  html {
    height: 100vh;
    font-size: 62.5%;
    body {
      height: 100%;
      background: ${(props) => props.theme.background.primary};
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      padding: 0 1.6rem;

      @media ${device.laptop} {
        padding: 0;
      }

      #root {
        font-size: 1.6rem;
      }

      .attribution { font-size: 11px; text-align: center; }
      .attribution a { color: hsl(228, 45%, 44%); }
    }
  }
`;
