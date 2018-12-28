import Styled, { css } from 'styled-components';

import { SPACING } from 'Src/styles/theme';
import { FONT, FONT_WEIGHT } from 'Src/styles/theme';

export const Container = Styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${SPACING.default};

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const FullWidthContainer = Styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  margin-left: -50vw;
`;

const labelStyles = css`
  font-size: ${FONT.heading3};
  display: inline-block;
  font-weight: ${FONT_WEIGHT.default};
  cursor: pointer;
`;

export const Label = Styled.label`${labelStyles}`;
export const LabelText = Styled.span`${labelStyles}`;

export const PresetsGrid = Styled.div`
  display: flex;
  flex-wrap: wrap;

  .col {
    padding: ${SPACING.large};
    text-align: center;

    h2 {
      margin: ${SPACING.large} 0;
    }
  }
`;
