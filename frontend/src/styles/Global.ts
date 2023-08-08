import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    outline:0;
    border: none;
    list-style: none;
    text-decoration: none;
  }

  body, html {
    width: 100vw;
    height: 100%;
    box-sizing: border-box;
    background-color: #f4f4f4;
  }

  button {
    cursor: pointer;
  }
`;
