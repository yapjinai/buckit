import React, { Component } from 'react';

const apiUrl = 'http://localhost:3000'

class Home extends Component {
  render() {
    this.fetchUsers()

    return (
      <div className="Home">
        Home
      </div>
    );
  }

  ///////////////////////

  fetchUsers = () => {
    fetch(`${apiUrl}/api/v1/users`)
    .then(r => r.json())
    .then(console.log)
  }
}

export default Home;
