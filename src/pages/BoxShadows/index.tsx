import React from 'react';

import Svg from 'Src/components/Svg';

import BoxShadowsIcon from 'Src/assets/box-shadows.svg';

import { IBoxShadowProps } from './types';

import { Container } from 'Src/styles/common';

import { COLORS, FONT } from 'Src/styles/theme';

import { HeadingContainer } from './styles';

class BoxShadows extends React.Component<IBoxShadowProps> {
  public render() {
    return (
      <Container>
        <HeadingContainer>
          <Svg
            inline
            src={BoxShadowsIcon}
            height={FONT.heading2}
            width={FONT.heading2}
            color={COLORS.primary}
          />
          <h1>Box Shadows</h1>
        </HeadingContainer>
      </Container>
    );
  }
}

export default BoxShadows;
