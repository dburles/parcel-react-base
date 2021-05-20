import { Router } from '@reach/router';
import { MysticalProvider } from 'mystical';
import theme from '../theme.js';
import NotFound from './NotFound.js';
import Page from './Page.js';

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
