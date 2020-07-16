import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    border: 0;
    margin: 0;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  body {
    background-color: #0f1923;
    color: #F5F5F5;
    font: 200 18px 'Roboto', sans-serif;
  }
`;

export default GlobalStyle 
