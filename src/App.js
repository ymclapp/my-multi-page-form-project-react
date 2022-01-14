import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from 'react-router-dom';
import './App.css';

import NavMenu from './components/partials/NavMenu';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import Home from './components/Home';
import Registration from './components/Registration';




function App() {

  return (
    <>
      <NavMenu />
      <Header />
      <Switch>

        <Route path={['/', '/home']}>
          <Home />
        </Route>

        <Route path='/Registration'>
          <Registration />
        </Route>

      </Switch>
      <Footer />
    </>
  );
}

export default App;
