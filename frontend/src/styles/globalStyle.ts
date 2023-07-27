import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root {
    font-size: 60%;
    font-family: 'Inter'
  }

  /* font-size: 16px;
  1rem = 10px
  */

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%; // root font-size: 10px;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    border: none;
    list-style: none;
    text-decoration: none;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }
`;
