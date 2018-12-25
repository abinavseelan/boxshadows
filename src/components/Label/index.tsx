import Styled from 'styled-components';

import { FONT, FONT_WEIGHT } from 'Src/styles/theme';

const styles = `
  font-size: ${FONT.heading3};
  display: inline-block;
  font-weight: ${FONT_WEIGHT.default};
  cursor: pointer;
`;

export const Label = Styled.label`${styles}`;
export const LabelText = Styled.span`${styles}`;

export default Label;
