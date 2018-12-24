import React from 'react';

import { IRangeSliderProps } from './types';

import { Container } from './styles';

const RangeSlider = ({
  value,
  onChange,
  name,
  min,
  max,
  label,
  inline = false,
}: IRangeSliderProps) => (
  <Container inline={inline}>
    <label>{label}</label>
    <div>
      <input
        type='range'
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
      <span>
        {value}
      </span>
    </div>
  </Container>
);

export default RangeSlider;
