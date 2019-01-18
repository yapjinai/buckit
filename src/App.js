import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Nav from './pages/public/Nav';
import Home from './pages/public/Home';
import Login from './pages/public/Login';

import Profile from './pages/Profile';
import Items from './pages/Items';

// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <>
            <Nav />
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/items' component={Items}/>
          </>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
