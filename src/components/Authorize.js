import React, { Component } from 'react';
import {
  fetchCurrentUser,
} from '../actions'

const authorizeFn = (wrappedComponent) => {
  class AuthorizedComponent extends Component {
    componentDidMount() {
          if (localStorage.getItem('jwt') && !this.props.loggedIn) {
            this.props.fetchCurrentUser()
          }
          // if i have a token but don't know who it belongs to, ask the server for that user's data
        }


    render() {
      return (

      );
    }
  }
}


export default authorizeFn;
