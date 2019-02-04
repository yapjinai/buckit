import React, { Component } from 'react';
import { Redirect } from 'react-router'

// Redux
import { connect } from 'react-redux'
import {
  // loginUser,
  setCurrentUser
} from '../../actions'

const apiUrl = 'http://localhost:3000'

class Login extends Component {
  state = {
    username: '',
    password: '',
    email: ''
  }

  render() {
    return this.props.loggedIn ? <Redirect to="/profile" /> :
    this.renderLogin();
  }

  renderLogin() {
    return (
      <div className="Login">
        Create an account
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
            id='email'
            type='text'
            placeholder='email'
            value={this.state.email}
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
    this.loginUser(this.state.username, this.state.password, this.state.email)
    this.setState({ username: '', password: '', email: '' })
  }
  ////////////////////

  loginUser = () => {
    fetch(`${apiUrl}/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email
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

///////////////////
// redux
///////////////////

const mapStateToProps = (state) => {
  return ({
  loggedIn: state.usersReducer.loggedIn
})}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentUser: (userObj) => dispatch(setCurrentUser(userObj)),
})


const connectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)


export default connectedLogin;
