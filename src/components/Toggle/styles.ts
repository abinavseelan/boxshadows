import Styled from 'styled-components';

import { BORDER_RADIUS, COLORS, FONT, SPACING } from 'Src/styles/theme';

export const Container = Styled.div`
  margin: ${SPACING.large} ${(props: { inline: boolean }) => `
    ${props.inline ? SPACING.large : 0}
  `};

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  label {
    font-size: ${FONT.heading3};
    margin-left: ${SPACING.default};
  }

  input[type='checkbox'] {
    position: absolute;
    cursor: pointer;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 25px;
    opacity: 0;

    &:checked {
      ~.toggle {
        .switch {
          transform: translateX(20px);
        }
      }
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
    background-color: ${COLORS.boxShadowTheme};

    transition: all 0.15s ease-out;
    transform: translateX(0);
  }
`;
