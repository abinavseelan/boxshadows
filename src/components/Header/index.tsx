import React from 'react';

import { Container } from 'Src/styles/common';

import {
  Header,
} from './styles';

import Logo from 'Src/assets/logo.svg';

const HeaderComponent = () => (
  <Header>
    <Container>
      <img src={Logo} />
    </Container>
  </Header>
);

export default HeaderComponent;
