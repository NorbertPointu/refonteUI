import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import { initCache } from './plugins/indexedDB';
import ErrorTrapping from './components/error/ErrorTrapping';

// eslint-disable-next-line no-unused-vars
import useApi from './hooks/useApi';

initCache();

const App = () => {
  const routing = useRoutes(routes);

  return (
    <ErrorTrapping>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    </ErrorTrapping>
  );
};

export default App;
