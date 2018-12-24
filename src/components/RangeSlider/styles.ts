import Styled from 'styled-components';

import { BORDER_RADIUS, COLORS, FONT, FONT_WEIGHT, SPACING } from 'Src/styles/theme';

export const Container = Styled.div`
  margin: ${SPACING.default} ${(props: { inline: boolean}) => `
    ${props.inline ? SPACING.medium : 0}
  `};

  label {
    font-size: ${FONT.heading3};
  }

  input[type='range'] {
    -webkit-appearance: none;
    width: 300px;
    height: 5px;
    background-color: ${COLORS.background};
    border-radius: ${BORDER_RADIUS.default};
    outline: none;
    padding: 0;
    margin: 0;

    &::-webkit-slider-thumb {
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: ${BORDER_RADIUS.rounded};
      background-color: ${COLORS.boxShadowTheme};
      cursor: pointer;
    }
  }

  span {
    display: inline-block;
    position: relative;
    width: 60px;
    color: ${COLORS.white};
    background-color: ${COLORS.boxShadowTheme};
    padding: ${SPACING.default} 18px;
    margin-left: ${SPACING.default};
    text-align: center;
    font-weight: ${FONT_WEIGHT.bold};

    &:after {
      position: absolute;
      top: 12px;
      left: -7px;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-right: 7px solid ${COLORS.boxShadowTheme};
      border-bottom: 7px solid transparent;
      content: '';
    }
  }
`;
