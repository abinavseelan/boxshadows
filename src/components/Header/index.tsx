import React from 'react';

import { Container } from 'Src/styles/common';

import {
  Header,
} from './styles';

import Logo from 'Src/assets/logo.svg';

import Svg from 'Src/components/Svg';

import { COLORS } from 'Src/styles/theme';

const HeaderComponent = () => (
  <Header>
    <Container>
      <Svg
        inline
        width='120px'
        src={Logo}
        color={COLORS.primary}
      />
    </Container>
  </Header>
);

export default HeaderComponent;
