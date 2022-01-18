import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import NavMenu from './components/partials/NavMenu';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import Home from './components/Home';
import Registration from './components/ConferenceRegistration';
import Demographics from './components/DemographicsGet';
import Login from './components/auth/login';


//used for testing
import Restaurants from './components/Restaurants';




function App() {

  return (
    <>
      <NavMenu />
      <Header />
      <Switch>

        <Route exact path={['/', '/home']}>
          <Home />
        </Route>

        <Route path='/Registration'>
          <Registration />
        </Route>

        <Route path='/Demographics'>
          <Demographics />
        </Route>

        <Route path='/Login'>
          <Login />
        </Route>

        <Route path='/Restaurants'>
          <Restaurants />
        </Route>

      </Switch>
      <Footer />
    </>
  );
}

export default App;
