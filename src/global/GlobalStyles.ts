import { createGlobalStyle } from 'styled-components';
import STYLES from '../constants/styles';
const GlobalStyles = createGlobalStyle`


*, 
 *::after,
 *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: 'Jost', sans-serif;
}

@media screen and (max-width: 850px) {
    
  html {
    font-size: 58.5%;
  }
}

@media screen and (max-width: 600px) {
    
    html {
      font-size: 55.5%;
    }
  }



body {
  background-color: ${STYLES.colors.colorwhiteSecondary};
  min-height: 100vh;
  margin-bottom: 4rem;
}

button, input, textarea {
  font-family: inherit;
  color: ${STYLES.colors.colorGrayAccent};
  font-size: 1.4rem;
}


`;

export default GlobalStyles;
