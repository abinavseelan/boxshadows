import React from 'react';

import { IRangeSliderProps } from './types';

import { Container as RangeSliderContainer } from './styles';
import { LabelText } from 'Src/styles/common';

const RangeSlider = ({
  value,
  onChange,
  name,
  min,
  max,
  label,
}: IRangeSliderProps) => (
  <RangeSliderContainer>
    <LabelText>{label}</LabelText>
    <div className='controls-container'>
      <input
        type='range'
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
      <span className='value-indicator'>
        <input
          type='number'
          name={name}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
        />
      </span>
    </div>
  </RangeSliderContainer>
);

export default RangeSlider;
