import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html{
  scroll-behavior: smooth;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  background-color: ${props => props.theme.bg_clr};
  line-height: 1.6;
}
a{
  text-decoration: none;
}
ul{
  list-style: none;
}
img{
  height:100%;
  width:100%;
}
`