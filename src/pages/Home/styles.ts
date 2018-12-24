import Styled from 'styled-components';
import { BORDER_RADIUS, COLORS, FONT, FONT_WEIGHT, SPACING } from 'Src/styles/theme';

export const HeroSection = Styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: ${SPACING.large} 0;

  h1 {
    font-size: ${FONT.heading1};
    font-weight: ${FONT_WEIGHT.bold};
    margin: ${SPACING.default} 0;
  }

  h2 {
    margin: ${SPACING.medium} 0;
    font-size: ${FONT.heading2};
  }
`;

export const PageCTA = Styled.div`
  ${(props: { color: string }) => `
    background-color: ${COLORS[`${props.color}Theme`]};
  `}

  height: 200px;
  margin: 90px ${SPACING.xLarge};
  padding: ${SPACING.default};
  position: relative;

  border-radius: ${BORDER_RADIUS.default};

  .heading {
    margin: ${SPACING.medium} ${SPACING.large};
  }

  h2 {
    font-size: ${FONT.heading2};
    color: ${COLORS.white};
    font-weight: ${FONT_WEIGHT.bold};
    margin: 0 ${SPACING.default};
    display: inline-block;
    vertical-align: bottom;
  }

  h3 {
    font-size: ${FONT.heading3};
    font-weight: ${FONT_WEIGHT.default};
    margin: ${SPACING.default} 0;
    color: ${COLORS.white};
  }

  &:hover {
    cursor: pointer;
    .btn {
      transform: translateX(5px);
    }
  }

  .btn {
    position: absolute;
    right: ${SPACING.large};
    bottom: ${SPACING.large};

    transition: all 0.15s ease-out;
  }
`;
