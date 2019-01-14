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
        <form>
          <input
            id='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </form>
      </div>
    );
  }

  ///////////////////////

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

}

export default Login;
