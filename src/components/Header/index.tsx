import React from 'react';
import { Link } from '@reach/router';

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
      <Link to='/'>
        <Svg
          inline
          width='120px'
          src={Logo}
          color={COLORS.primary}
        />
      </Link>
    </Container>
  </Header>
);

export default HeaderComponent;
