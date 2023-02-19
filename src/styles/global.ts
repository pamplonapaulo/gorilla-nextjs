import { createGlobalStyle } from 'styled-components'
//import NeutraTextBold from '../../public/'
//import RobotoWoff2 from './fonts/roboto-condensed-v19-latin-regular.woff2'

const GlobalStyles = createGlobalStyle`

  /* @font-face {
    font-family: 'NeutraBold';
    src: url(${NeutraTextBold}) format('otf'),
        url(${RobotoWoff}) format('woff');
  } */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
