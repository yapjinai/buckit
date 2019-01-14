import React, { Component } from 'react';

const apiUrl = 'http://localhost:3000'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  render() {
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
    const username = e.target.querySelector('#username').value
    const password = e.target.querySelector('#password').value

    fetch(`${apiUrl}/api/v1/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        }
      })
    })
    .then(r => r.json())
    .then(r => {
      console.log('console:', r)
    })

  }

}

export default Login;
