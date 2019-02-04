import React, { Component } from 'react';
import { Redirect } from 'react-router'

// Redux
import { connect } from 'react-redux'
import {
  authenticatingUser,
  authenticatedUser,
  setCurrentUser,
} from '../actions'

const apiUrl = 'http://localhost:3000'

const authorizeFn = (WrappedComponent) => {
  class AuthorizedComponent extends Component {
    // componentDidMount() {
    //   if (localStorage.getItem('jwt') && !this.props.loggedIn) {
    //     this.fetchCurrentUser()
    //   }
    // }

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
          <Redirect to="/login" />
        )
      }
    }

    ////////////////////////
  //
  //   fetchCurrentUser = () => {
  //     this.props.authenticatingUser()
  //     fetch(`${apiUrl}/api/v1/profile`, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('jwt')}`
  //       }
  //     })
  //     .then(response => response.json())
  //     .then((JSONResponse) => {
  //       this.props.setCurrentUser(JSONResponse.user)
  //     })
  //     .then(this.props.authenticatedUser)
  //   }

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