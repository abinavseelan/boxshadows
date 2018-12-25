import React from 'react';

import { IRangeSliderProps } from './types';

import { Container as RangeSliderContainer } from './styles';

const RangeSlider = ({
  value,
  onChange,
  name,
  min,
  max,
  label,
}: IRangeSliderProps) => (
  <RangeSliderContainer>
    <span className='label-text'>{label}</span>
    <div>
      <input
        type='range'
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
      <span className='value-indicator'>
        {value}
      </span>
    </div>
  </RangeSliderContainer>
);

export default RangeSlider;
