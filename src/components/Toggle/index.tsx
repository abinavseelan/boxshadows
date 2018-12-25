import React from 'react';

import { IToggleProps } from './types';

import { Container } from './styles';
import { LabelText } from 'Src/styles/common';

class Toggle extends React.Component<IToggleProps> {
  public render() {
    const { value, label, onChange, name } = this.props;

    return (
      <Container>
        <input type='checkbox' checked={value} name={name} onChange={onChange} />
        <div className='toggle'>
          <div className='switch' />
        </div>
        <LabelText>{label}</LabelText>
      </Container>
    );
  }
}

export default Toggle;
