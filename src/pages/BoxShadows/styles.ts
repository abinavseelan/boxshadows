import Styled from 'styled-components';

import { BORDER_RADIUS, COLORS, FONT, FONT_WEIGHT, SPACING } from 'Src/styles/theme';

import { Label } from 'Src/styles/common';

export const HeadingContainer = Styled.div`
  margin: ${SPACING.xLarge} 0;
  padding-bottom: ${SPACING.default};

  display: flex;

  h1 {
    font-size: ${FONT.heading2};
    margin: 0 ${SPACING.default};
    font-weight: ${FONT_WEIGHT.bold};
  }

  position: relative;

  &:after {
    position: absolute;
    bottom: 0;
    left: ${SPACING.medium};
    height: 5px;
    border-radius: ${BORDER_RADIUS.default};
    width: 100px;
    background-color: ${COLORS.boxShadowTheme};
    content: ' ';
  }
`;

export const PreviewSpace = Styled.div`
  background-color: ${COLORS.background};
  height: 520px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditorControls = Styled.div`
  margin: ${SPACING.xLarge} 0;

  .row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    label {
      margin: ${SPACING.medium} 0;
    }
  }
`;
