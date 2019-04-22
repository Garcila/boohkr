import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Search from './pages/Search';
import Detail from './pages/Detail';
import Saved from './pages/Saved';
import NotFound from './pages/NotFound';
import Landing from './pages/Landing';

import styled from 'styled-components';

const AppSt = styled.div`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* fallback for old browsers */
  background: #1fa2ff;
  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, #a6ffcb, #12d8fa, #1fa2ff);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, #a6ffcb, #12d8fa, #1fa2ff);
`;

export default function App() {
  return (
    <AppSt>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/search/:id' component={Detail} />
          <Route exact path='/saved' component={Saved} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </AppSt>
  );
}
