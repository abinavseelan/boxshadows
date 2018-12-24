import Styled from 'styled-components';

import { BORDER_RADIUS, FONT, SPACING } from 'Src/styles/theme';

export const Container = Styled.div`
  margin: ${SPACING.default} ${(props: { inline: boolean }) => `
    ${props.inline ? SPACING.large : 0}
  `};

  display: flex;
  justify-content: center;
  align-items: center;

  label {
    font-size: ${FONT.heading3};
    margin-left: ${SPACING.default};
  }
`;

export const ColorPreview = Styled.div`
  background-color: ${(props: {color: string}) => props.color};
  height: 30px;
  width: 30px;
  border-radius: ${BORDER_RADIUS.rounded};
  position: relative;
  cursor: pointer;
`;

export const PickerContainer = Styled.div`
  ${(props: { open: boolean }) => `
    display: ${props.open ? 'block' : 'none'};
  `}
  top: 36px;
  left: 36px;
  position: absolute;
`;
