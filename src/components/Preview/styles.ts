import Styled from 'styled-components';

import {BORDER_RADIUS, COLORS, FONT, FONT_WEIGHT, SPACING } from 'Src/styles/theme';
import { IPreviewProps } from './types';

export const PreviewBox = Styled.div`
  ${(props: IPreviewProps) => `
    box-shadow: ${props.boxShadow || 'none'};
    background: ${props.backgroundColor || COLORS.white} ${props.gradient || 'none'};
    width: ${props.width || '350px'};
    height: ${props.height || '350px'};
  `}

  border-radius: ${BORDER_RADIUS.default};
  position: relative;
  overflow: hidden;

  .controls {
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    bottom: 0;
    padding: 10px;
    background-color: ${COLORS.white};
  }

  .copy, .edit {
    display: inline-block;
    padding: 5px;
    text-align: center;
    font-size: ${FONT.regular};
    margin-left: ${SPACING.medium};
    cursor: pointer;
  }
`;

export const Copied = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255,255,255,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${FONT.heading3};
  opacity: 0;
  transition: opacity 0.15s ease-out;

  ${(props) => props.copied ? `
    opacity: 1;
  ` : ''}
`;
