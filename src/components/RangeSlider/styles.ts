import Styled from 'styled-components';

import { BORDER_RADIUS, COLORS, FONT, FONT_WEIGHT, SPACING } from 'Src/styles/theme';

export const Container = Styled.label`
  input[type='range'] {
    -webkit-appearance: none;
    min-width: 200px;
    width: calc(100% - 75px);
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

    @media screen and (min-width: 480px) {
      width: 300px;
    }
  }

  .controls-container {
    display: flex;
    align-items: center;
  }

  .value-indicator {
    display: inline-flex;
    justify-content: center;
    position: relative;
    width: 60px;
    color: ${COLORS.white};
    background-color: ${COLORS.boxShadowTheme};
    padding: ${SPACING.default} 0;
    margin-left: ${SPACING.default};
    font-weight: ${FONT_WEIGHT.bold};

    &:after {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -7px;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-right: 7px solid ${COLORS.boxShadowTheme};
      border-bottom: 7px solid transparent;
      content: '';
    }

    & input {
      appearance: none;
      outline: none;
      background: none;
      border: none;
      color: white;
      display: inline;
      line-height: 17px;
      text-align: center;
      font-size: ${FONT.base};
      font-weight: ${FONT_WEIGHT.bold};
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
      display: none;
    }
  }
`;
