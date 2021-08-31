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

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${Colors.mediumGray};
    border-radius: 50px;
  }

  body {
    background-color: ${Colors.lightGray};
  }
  
  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  #app {
    width: 100vw;
    height: 100%;
  }

  @media screen and (min-width: 780px) {
    height: 100vh;
    overflow: hidden;
  }
`