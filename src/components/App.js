import { Router } from '@reach/router';
import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import CounterButton from './CounterButton';
import NotFound from './NotFound';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CounterButton path="/" />
        <NotFound default />
      </Router>
    </ThemeProvider>
  );
};

export default App;
