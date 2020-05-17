import { Router } from '@reach/router';
import { MysticalProvider } from 'mystical';
import React from 'react';
import theme from '../theme';
import NotFound from './NotFound';
import Page from './Page';

const App = () => {
  return (
    <MysticalProvider theme={theme}>
      <Router>
        <Page path="/" />
        <NotFound default />
      </Router>
    </MysticalProvider>
  );
};

export default App;
