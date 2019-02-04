import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './css/App.css';

import Nav from './pages/components/Nav';
import Home from './pages/public/Home';
// import Login from './pages/public/Login';
import CreateAccount from './pages/public/CreateAccount';
import NotFound from './pages/public/NotFound'

import Profile from './pages/Profile';
import Items from './pages/items/index';

// Redux
import { connect } from 'react-redux'
import {
  authenticatingUser,
  authenticatedUser,
  setCurrentUser,
} from './actions'

const apiUrl = 'http://localhost:3000'
// import './App.css';

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem('jwt') && !this.props.loggedIn) {
      this.fetchCurrentUser()
    }
  }

  render() {
    return (
      <div className={`container ${this.props.loggedIn ? 'loggedIn' : 'loggedOut'}`}>
        <div className="App">
          <BrowserRouter>
            <>
              <Nav />
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/createAccount' component={CreateAccount}/>
                <Route exact path='/profile' component={Profile}/>
                <Route path='/items' render={routerProps => <Items {...routerProps} />} />

                <Route component={NotFound} />
              </Switch>
            </>
          </BrowserRouter>
        </div>
      </div>
    );
  }
  ////////////////////////

  fetchCurrentUser = () => {
    this.props.authenticatingUser()
    fetch(`${apiUrl}/api/v1/profile`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(response => response.json())
    .then((JSONResponse) => {
      this.props.setCurrentUser(JSONResponse.user)
    })
    .then(this.props.authenticatedUser)
  }

}

//////////////
// Redux
//////////////

const mapStateToProps = (state) => {
  return {
    loggedIn: state.usersReducer.loggedIn,
    // authenticatingUser: state.usersReducer.authenticatingUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticatingUser: () => dispatch(authenticatingUser()),
    authenticatedUser: () => dispatch(authenticatedUser()),
    setCurrentUser: (userObj) => dispatch(setCurrentUser(userObj)),
  }
}

const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


export default connectedApp;
