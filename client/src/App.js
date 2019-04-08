import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Search from './pages/Search';
import Detail from './pages/Detail';
import Saved from './pages/Saved';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/search/:id' component={Detail} />
          <Route exact path='/saved' component={Saved} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
