import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


  html {
    font-size: 10px;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    background: ${({
      theme: {
        colors: { background },
      },
    }) => background};
    color: ${({
      theme: {
        colors: { textSecondary },
      },
    }) => textSecondary};
    font-family: Helvetica, Arial, sans-serif;
  }`;

export default GlobalStyle;
