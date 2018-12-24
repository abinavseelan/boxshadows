import React from 'react';

import { ISvgProps } from './types';

import {
  Container,
} from './styles';

const Svg = ({ inline = false, src, height, width, color, ...rest }: ISvgProps) => (
  <Container
    height={height}
    width={width}
    color={color}
    inline={inline}
    dangerouslySetInnerHTML={{ __html: src }}
    {...rest}
  />
);

export default Svg;
