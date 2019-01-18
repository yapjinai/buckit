import React, { Component } from 'react';
import { Redirect } from 'react-router'

// Redux
import { connect } from 'react-redux'
import {
  // loginUser,
  setCurrentUser
} from '../actions'

const apiUrl = 'http://localhost:3000'

class Login extends Component {
  /////////////////////// Lifecycle methods

  state = {
    username: '',
    password: ''
  }

  render() {
    console.log(this.props);
    return this.props.loggedIn ? <Redirect to="/profile" /> :
    this.renderLogin();
  }

  renderLogin() {
    return (
      <div className="Login">
        Login
        <form
          id='loginForm'
          onSubmit={this.handleSubmit}
        >
          <input
            id='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            id='password'
            type='text'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input
            id='submit'
            type='submit'
            value='Log in'
          />
        </form>
      </div>
    );
  }

  ///////////////////////

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // this.props.loginUser(this.state.username, this.state.password)
    this.loginUser(this.state.username, this.state.password)
    this.setState({ username: '', password: '' })

    // .then(r => r.json())
    // .then(r => {
    //   console.log('console:', r)
    // })

  }
  ////////////////////

  loginUser = () => {
    fetch(`${apiUrl}/api/v1/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password
        }
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw response
      }
    })
    .then(jsonResponse => {
      localStorage.setItem('jwt', jsonResponse.jwt)
      this.props.setCurrentUser(jsonResponse.user)
    })
  }

}


const mapStateToProps = (state) => {
  console.log(state)
  return ({
  // authenticatingUser: state.authenticatingUser,
  // failedLogin: state.failedLogin,
  // error: state.error,
  loggedIn: state.UsersReducer.loggedIn
})}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentUser: (userObj) => dispatch(setCurrentUser(userObj)),
})


const connectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)


export default connectedLogin;
