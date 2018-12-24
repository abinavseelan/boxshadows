import React from 'react';

import Svg from 'Src/components/Svg';

import BoxShadowsIcon from 'Src/assets/box-shadows.svg';

import { IBoxShadowProps, IBoxShadowState } from './types';

import { Container, FullWidthContainer } from 'Src/styles/common';

import { COLORS, FONT } from 'Src/styles/theme';

import { HeadingContainer, Preview, PreviewSpace } from './styles';

class BoxShadows extends React.Component<IBoxShadowProps, IBoxShadowState> {
  constructor(props: IBoxShadowProps) {
    super(props);

    this.state = {
      blur: 4,
      color: 'rgba(0, 0, 0, 0.25)',
      inset: false,
      offsetX: 0,
      offsetY: 4,
      previewColor: COLORS.boxShadowTheme,
      spread: 0,
    };
  }

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

        <FullWidthContainer>
          <PreviewSpace>
            <Preview
              offsetX={this.state.offsetX}
              offsetY={this.state.offsetY}
              previewColor={this.state.previewColor}
              color={this.state.color}
              blur={this.state.blur}
              spread={this.state.spread}
              inset={this.state.inset}
            />
          </PreviewSpace>
        </FullWidthContainer>
      </Container>
    );
  }
}

export default BoxShadows;
