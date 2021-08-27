import { createGlobalStyle } from 'styled-components'
import { Colors } from './Colors'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-color: ${Colors.lightGray};
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }
`