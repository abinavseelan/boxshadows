import React from 'react';

import Svg from 'Src/components/Svg';
import RangeSlider from 'Src/components/RangeSlider';
import ColorPicker from 'Src/components/ColorPicker';
import Toggle from 'Src/components/Toggle';

import BoxShadowsIcon from 'Src/assets/box-shadows.svg';

import { IBoxShadowOptions, IBoxShadowProps, IBoxShadowState } from './types';

import { Container, FullWidthContainer } from 'Src/styles/common';

import { COLORS, FONT } from 'Src/styles/theme';

import { EditorControls, HeadingContainer, PreviewSpace } from './styles';

import { parseInput, validateInput } from 'Src/utils/input';
import Preview from 'Src/components/Preview';

class BoxShadows extends React.Component<IBoxShadowProps, IBoxShadowState> {
  constructor(props: IBoxShadowProps) {
    super(props);
    this.state = {
      blur: 27,
      color: 'rgba(50,50,93,.25)',
      inset: false,
      offsetX: 0,
      offsetY: 13,
      previewColor: COLORS.white,
      spread: -5,
    };
  }

  public handleInputChange = (e: React.SyntheticEvent) => {
    const { target } = e;
    const  { name } = target as HTMLInputElement;

    if (validateInput(target as HTMLInputElement)) {
      this.setState((prevState: IBoxShadowState) => ({
        ...prevState,
        [name]: parseInput(target as HTMLInputElement),
      }));
    }
  }

  public handleColorChange = (name: string, color: any) => {
    this.setState((prevState: IBoxShadowState) => ({
      ...prevState,
      [name]: color.hex,
    }));
  }

  public render() {
    const {
      previewColor,
      ...boxShadowOptions
    } = this.state;
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
              editable
              boxShadow={this.generateBoxShadow({ ...boxShadowOptions })}
              backgroundColor={previewColor}
             />
          </PreviewSpace>
        </FullWidthContainer>

        <EditorControls>
          <div className='row'>
            <RangeSlider
              min={-200}
              max={200}
              name='offsetX'
              value={this.state.offsetX}
              onChange={this.handleInputChange}
              label='Horizontal Length'
            />

            <RangeSlider
              min={0}
              max={200}
              name='blur'
              value={this.state.blur}
              onChange={this.handleInputChange}
              label='Blur'
            />
          </div>
          <div className='row'>
            <RangeSlider
              min={-200}
              max={200}
              name='offsetY'
              value={this.state.offsetY}
              onChange={this.handleInputChange}
              label='Vertical Length'
            />

            <RangeSlider
              min={0}
              max={40}
              name='spread'
              value={this.state.spread}
              onChange={this.handleInputChange}
              label='Spread'
            />
          </div>

          <div className='row'>
            <ColorPicker
              value={this.state.color}
              label='Shadow Color'
              name='color'
              onChange={this.handleColorChange}
            />
            <ColorPicker
              value={this.state.previewColor}
              label='Box Color'
              name='previewColor'
              onChange={this.handleColorChange}
            />
            <Toggle
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

  private generateBoxShadow = (options: IBoxShadowOptions) => {
    const {
      blur,
      color,
      inset,
      offsetX,
      offsetY,
      spread,
    } = options;

    return `${inset ? 'inset' : ''} ${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color}`;
  }
}

export default BoxShadows;
