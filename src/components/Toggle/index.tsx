import React from 'react';

import { IToggleProps } from './types';

import { Container } from './styles';

class Toggle extends React.Component<IToggleProps> {
  public render() {
    const { value, label, inline = false, onChange, name } = this.props;

    return (
      <Container inline={inline}>
        <input type='checkbox' checked={value} name={name} onChange={onChange} />
        <div className='toggle'>
          <div className='switch' />
        </div>
        <label>
          {label}
        </label>
      </Container>
    );
  }
}

export default Toggle;
