import React from 'react';
import { SketchPicker } from 'react-color';

import { IColorPickerProps, IColorPickerState } from './types';

import {
  ColorPreview,
  Container,
  PickerContainer,
} from './styles';

class ColorPicker extends React.Component<IColorPickerProps, IColorPickerState> {
  private colorPicker: React.RefObject<HTMLDivElement>;

  constructor(props: IColorPickerProps) {
    super(props);

    this.state = {
      open: false,
    };

    this.colorPicker = React.createRef();
  }

  public togglePicker = (e) => {
    const { target } = e;
    const { current } = this.colorPicker;

    if (current && current.contains(target)) {
      return;
    }

    this.setState((prevState: IColorPickerState) => ({
      ...prevState,
      open: !prevState.open,
    }), () => {
      if (this.state.open) {
        document.addEventListener('click', this.togglePicker);
      } else {
        document.removeEventListener('click', this.togglePicker);
      }
    });
  }

  public handleColorChange = (color) => {
    this.props.onChange(this.props.name, color);
  }

  public render() {
    const {value, label, inline = false} = this.props;

    return (
      <Container inline={inline}>
        <ColorPreview color={value} onClick={this.togglePicker}>
          <PickerContainer open={this.state.open} ref={this.colorPicker}>
            <SketchPicker
              width={250}
              color={value}
              onChangeComplete={this.handleColorChange}
            />
          </PickerContainer>
        </ColorPreview>
        <label>{label}</label>
      </Container>
    );
  }
}

export default ColorPicker;
