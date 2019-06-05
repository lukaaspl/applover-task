import styled, { createGlobalStyle } from "styled-components";

const theme = {
  viewport: {
    width: "1366px"
  },
  font: {
    primary: "Roboto, sans-serif"
  },
  color: {
    lightgray: "#a5a1a1"
  }
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }
`;

export default theme;
