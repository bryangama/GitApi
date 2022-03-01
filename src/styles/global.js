import {createGlobalStyle} from 'styled-components';


export  default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    font-size: 14px;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: rgb(0, 0, 0);
    font-size: 14px;
    font-family: Arial, Helverica, sans-serif;
  }

  button {
    cursor: pointer;
  }


`;