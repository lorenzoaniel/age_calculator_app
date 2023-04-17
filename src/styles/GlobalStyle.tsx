import { createGlobalStyle } from "styled-components";
import "normalize.css";
import { device } from "./breakpoints";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif; //default
  }

  html {
    height: 100vh;
    font-size: 62.5%;
    body {
      height: 100%;
      background: ${(props) => props.theme.background.primary};
      display: flex;
      justify-content: center;
      padding: 0 1.6rem;

      @media ${device.laptop} {
        padding: 0;
      }

      #root {
        font-size: 1.6rem;
      }
    }
  }
`;
