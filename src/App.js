import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Nav from './components/Nav';

import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Items from './components/Items';

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
