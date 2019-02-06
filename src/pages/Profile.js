import React, { Component } from 'react';
import authorizeFn from './Authorize'

// Redux
import { connect } from 'react-redux'

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <div>
          <h2>Welcome, {this.props.user.display_name}!</h2>
          <br />
          username: {this.props.user.username}
          <br />
          email: {this.props.user.email}
        </div>
        <div>
          {this.props.user.items.length ? this.renderTodos() : <h2>'You have nothing to do!'</h2>}
        </div>
      </div>
    );
  }

  /////////////

  renderTodos = () => {
    return(
      <>
        <h2>Your to-dos:</h2>
        <ul>
          {this.props.user.items.map(i => <li key={i.id}>{i.description}</li>)}
        </ul>
      </>
    )
  }
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
