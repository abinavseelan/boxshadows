import { createGlobalStyle } from 'styled-components';

import { FONT, FONT_WEIGHT } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-weight: ${FONT_WEIGHT.default};
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: ${FONT.base};
    margin: 0;
    min-height: 100vh;
  }
`;