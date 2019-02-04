import React, { Component } from 'react';
import { Redirect } from 'react-router'

// Redux
import { connect } from 'react-redux'
import {
  setCurrentUser
} from '../../actions'

const apiUrl = 'http://localhost:3000'

class Login extends Component {
  state = {
    username: '',
    display_name: '',
    password: '',
    email: ''
  }

  render() {
    return this.props.loggedIn ? <Redirect to="/profile" /> :
    this.renderLogin();
  }

  inputfield = (field) => {
    return (
      <input
        id={field}
        type='text'
        placeholder={field}
        value={this.state[field]}
        onChange={this.handleChange}
      />
    )
  }

  renderLogin() {
    return (
      <div className="Login">
        Create an account
        <form
          id='loginForm'
          onSubmit={this.handleSubmit}
        >
          {this.inputfield('username')}
          {this.inputfield('display_name')}
          <input
            id='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          {this.inputfield('email')}
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
    this.createAccount()
    this.setState({ username: '', password: '', display_name: '', email: '' })
  }
  ////////////////////

  createAccount = () => {
    fetch(`${apiUrl}/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          display_name: this.state.display_name,
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
