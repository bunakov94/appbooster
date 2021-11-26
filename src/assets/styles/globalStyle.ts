import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #40a9ff;
    --dark-blue: #1261a2;
    --white: #fff;
    --black: #000;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: Avenir, sans-serif;
  }
`
