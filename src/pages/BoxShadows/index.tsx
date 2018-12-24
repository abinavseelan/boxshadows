import React from 'react';

import Svg from 'Src/components/Svg';
import RangeSlider from 'Src/components/RangeSlider';
import ColorPicker from 'Src/components/ColorPicker';
import Toggle from 'Src/components/Toggle';

import BoxShadowsIcon from 'Src/assets/box-shadows.svg';

import { IBoxShadowProps, IBoxShadowState } from './types';

import { Container, FullWidthContainer } from 'Src/styles/common';

import { COLORS, FONT } from 'Src/styles/theme';

import { EditorControls, HeadingContainer, Preview, PreviewSpace } from './styles';

class BoxShadows extends React.Component<IBoxShadowProps, IBoxShadowState> {
  constructor(props: IBoxShadowProps) {
    super(props);

    this.state = {
      blur: 4,
      color: '#000',
      inset: false,
      offsetX: 0,
      offsetY: 4,
      previewColor: COLORS.boxShadowTheme,
      spread: 0,
    };
  }

  public handleInputChange = (e: React.SyntheticEvent) => {
    const { target } = e;
    const { value, name, type, checked } = target as HTMLInputElement;

    this.setState((prevState: IBoxShadowState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  public handleColorChange = (name: string, color: any) => {
    this.setState((prevState: IBoxShadowState) => ({
      ...prevState,
      [name]: color.hex,
    }));
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

        <EditorControls>
          <div className='row'>
            <RangeSlider
              min={0}
              max={200}
              name='offsetX'
              value={this.state.offsetX}
              onChange={this.handleInputChange}
              label='Horizontal Length'
              inline
            />

            <RangeSlider
              min={0}
              max={40}
              name='blur'
              value={this.state.blur}
              onChange={this.handleInputChange}
              label='Blur'
              inline
            />
          </div>
          <div className='row'>
            <RangeSlider
              min={0}
              max={200}
              name='offsetY'
              value={this.state.offsetY}
              onChange={this.handleInputChange}
              label='Vertical Length'
              inline
            />

            <RangeSlider
              min={0}
              max={40}
              name='spread'
              value={this.state.spread}
              onChange={this.handleInputChange}
              label='Spread'
              inline
            />
          </div>

          <div className='row'>
            <ColorPicker
              value={this.state.color}
              label='Shadow Color'
              name='color'
              onChange={this.handleColorChange}
              inline
            />
            <ColorPicker
              value={this.state.previewColor}
              label='Box Color'
              name='previewColor'
              onChange={this.handleColorChange}
              inline
            />
            <Toggle
              inline
              name='inset'
              value={this.state.inset}
              label='Inset'
              onChange={this.handleInputChange}
            />
          </div>
        </EditorControls>
      </Container>
    );
  }
}

export default BoxShadows;
