import React from 'react';
import { Router } from '@reach/router';
import { hot } from 'react-hot-loader';
import Favicon from 'react-favicon';

import HomePage from './pages/Home';
import BoxShadows from './pages/BoxShadows';

import Header from 'Src/components/Header';

import { GlobalStyle } from 'Src/styles/global';

import favicon from 'Src/assets/favicon.png';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Favicon url={favicon} />
        <Header />
        <Router>
          <HomePage path='/' />
          <BoxShadows path='/box-shadows' />
        </Router>
      </React.Fragment>
    );
  }
}

let app = App;

if (__DEV__) {
  app = hot(module)(App);
}

export default app;
