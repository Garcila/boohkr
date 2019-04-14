import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Search from './pages/Search';
import Detail from './pages/Detail';
import Saved from './pages/Saved';
import NotFound from './pages/NotFound';
import Landing from './pages/Landing';

import './App.css';

export default function App() {
  return (
    <div className='Container'>
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
    </div>
  );
}
