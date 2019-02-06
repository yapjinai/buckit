import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import authorizeFn from './Authorize'

// Redux
import { connect } from 'react-redux'

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <div>
          <h2>Your profile</h2>
          <br />
          Username: {this.props.user.username}
          <br />
          Display name: {this.props.user.display_name}
          <br />
          Email: {this.props.user.email}
        </div>
      </div>
    );
  }

  /////////////
}

///////////////
// redux
///////////////

const mapStateToProps = (state) => {
  return ({
    user: state.usersReducer.user
  })
}

const connectedProfile = connect(
  mapStateToProps
)(Profile)

export default authorizeFn(connectedProfile);
