import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import history from './routerHistory';
import SuspenseWithChunkError from './components/SuspenseWithChunkError';
import ResetCSS from 'ResetCSS';
import GlobalStyle from './style/Global';
import PageLoader from './components/Loader/PageLoader';
import Menu from './components/Menu';
import Home from 'views/Home';

function App() {
  return (
    <Router history={history}>
      <ScrollToTop>
        <ResetCSS />
        <GlobalStyle />
        <Menu>
          <SuspenseWithChunkError fallback={<PageLoader />}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </SuspenseWithChunkError>
        </Menu>
      </ScrollToTop>
    </Router>
  );
}

export default App;
