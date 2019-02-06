import React, { Component } from 'react';
import { Redirect } from 'react-router'

// Redux
import { connect } from 'react-redux'
// import {
// } from '../actions'

// const apiUrl = 'http://localhost:3000'

const authorizeFn = (WrappedComponent) => {
  class AuthorizedComponent extends Component {
    render() {
      if (localStorage.getItem('jwt') && this.props.loggedIn) {
        return (
          <WrappedComponent />
        )
      }
      else if (localStorage.getItem('jwt') && (this.props.authenticatingUser || !this.props.loggedIn)) {
        // return <Loader active inline="centered" />
        console.log('LOADING');
        return null
      }
      else {
        return (
          <Redirect to="/" />
        )
      }
    }
  }

//////////////
// Redux
//////////////

  const mapStateToProps = (state) => {
    return {
      loggedIn: state.usersReducer.loggedIn,
      authenticatingUser: state.usersReducer.authenticatingUser
    }
  }

  return connect(
    mapStateToProps
  )(AuthorizedComponent)
}

export default authorizeFn
