import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  padding: 0;
  margin: 0;
}

a{
  text-decoration: none;
  color: #333;
}

a:hover{
  border-bottom: solid 1px #333;
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Noto+Sans+JP&display=swap');

`;
