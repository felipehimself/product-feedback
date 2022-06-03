import { createGlobalStyle } from 'styled-components';
import STYLES from '../constants/styles';
const GlobalStyles = createGlobalStyle`


*, *::after, *::before {
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
  font-family: Jost ,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
}


body {
  background-color: ${STYLES.colors.colorwhiteSecondary};
  min-height: 100vh;
}

button, input-security, textarea {
  font-family: inherit;
  
}


`;

export default GlobalStyles;
