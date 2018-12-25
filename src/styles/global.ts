import { createGlobalStyle } from 'styled-components';

import { COLORS, FONT, FONT_WEIGHT } from './theme';

/* tslint:disable:enable max-line-length  */
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-weight: ${FONT_WEIGHT.default};
    color: ${COLORS.primary};
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: ${FONT.base};
    margin: 0;
    padding: 0;
    min-height: 100vh;
    max-width: 100%;

    /*
      TODO: sadness due to vw including scrollbars
      @see: https://stackoverflow.com/questions/33606565/is-it-possible-to-calculate-the-viewport-width-vw-without-scrollbar
    */
    overflow-x: hidden;
  }
`;
/* tslint:enable max-line-length */
