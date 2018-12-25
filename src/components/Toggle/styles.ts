import Styled from 'styled-components';

import { BORDER_RADIUS, COLORS, FONT, SPACING } from 'Src/styles/theme';
import { LabelText } from 'Src/styles/common';

export const Container = Styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${LabelText} {
    margin-left: ${SPACING.default};
  }

  input[type='checkbox'] {
    height: 25px;
    opacity: 0;

    &:checked ~.toggle .switch {
      transform: translateX(20px);
      background-color: ${COLORS.boxShadowTheme};
    }
  }

  .toggle {
    width: 50px;
    height: 25px;
    border-radius: 16px;
    padding: 0 8px;
    background-color: ${COLORS.background};

    display: flex;
    align-items: center;
  }

  .switch {
    height: 15px;
    width: 15px;
    border-radius: ${BORDER_RADIUS.rounded};
    background-color: ${COLORS.alternateBackground};

    transition: all 0.15s ease-out;
    transform: translateX(0);
  }
`;
