import Styled from 'styled-components';

import { BORDER_RADIUS, FONT, SPACING } from 'Src/styles/theme';
import { LabelText } from '../Label';

export const ColorPreview = Styled.div`
  background-color: ${(props: { color: string }) => props.color};
  height: 30px;
  width: 30px;
  border-radius: ${BORDER_RADIUS.rounded};
  position: relative;
`;

export const Container = Styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  ${ColorPreview} {
    margin-right: 8px;
  }

`;

export const PickerContainer = Styled.div`
  ${(props: { open: boolean }) => `
    display: ${props.open ? 'block' : 'none'};
  `}
  top: 36px;
  left: 36px;
  position: absolute;
`;
