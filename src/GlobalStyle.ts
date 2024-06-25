import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
    
  :root {
    --white: #fff;
    --gray: #e2e8f0;
    --lilac-900: #2e1d6a;
    --lilac-700: #805ad5;
  }

  button {
    cursor: pointer;
  } 
  
`;

export default GlobalStyle;
