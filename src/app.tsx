import React from 'react';
import { Router } from '@reach/router';
import { hot } from 'react-hot-loader';

import HomePage from './pages/Home';

import Header from 'Src/components/Header';

import { GlobalStyle } from 'Src/styles/global';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <Router>
          <HomePage path='/' />
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
