import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
  }

  main {
    background-color: #F9F9F9;
    width: 100vw;
    min-height: 100vh;

    a {
      text-decoration: none;
    }

    h1 {
      color: #444345;
      font-family: "Noto Serif", serif;
      font-weight: 400;
    }
  }
`;
