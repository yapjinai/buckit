import React, { Component } from 'react';
import authorizeFn from './Authorize'

// Redux
import { connect } from 'react-redux'

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        Welcome, {this.props.user.display_name}!
        <br />
        username: {this.props.user.username}
        <br />
        email: {this.props.user.email}
      </div>
    );
  }
}

///////////////
// redux
///////////////

const mapStateToProps = (state) => {
  return ({
    user: state.UsersReducer.user
  })
}

const connectedProfile = connect(
  mapStateToProps
)(Profile)

export default authorizeFn(connectedProfile);
