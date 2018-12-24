import Styled from 'styled-components';

import { BORDER_RADIUS, COLORS, FONT, FONT_WEIGHT, SPACING } from 'Src/styles/theme';

import { IBoxShadowPreviewProps } from './types';

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

export const Preview = Styled.div`
  height: 350px;
  width: 350px;
  border-radius: ${BORDER_RADIUS.default};
  ${(props: IBoxShadowPreviewProps) => `
    background-color: ${props.previewColor || COLORS.boxShadowTheme};
    box-shadow: ${props.inset ? 'inset' : ''} ${props.offsetX}px ${props.offsetY}px
      ${props.blur}px ${props.spread}px ${props.color};
  `}
`;
