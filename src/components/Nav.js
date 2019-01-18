import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
      {this.props.loggedIn ? `Logged in as ${this.props.user.display_name}` : 'please log in'}
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/profile'>My Profile</Link></li>
          <li><Link to='/items'>Items</Link></li>
        </ul>
      </nav>
    );
  }
}

///////////////
// redux
///////////////

const mapStateToProps = (state) => {
  return ({
    loggedIn: state.UsersReducer.loggedIn,
    user: state.UsersReducer.user
  })
}

const connectedNav = connect(
  mapStateToProps
)(Nav)

export default connectedNav;
