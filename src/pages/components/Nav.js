import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Login from '../public/Login';

import {
  logOut
} from '../../actions'

// Redux
import { connect } from 'react-redux'

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <ul>
          <li><Link to='/'>Home</Link></li>

          {this.props.loggedIn ?
            this.loggedInNav() :
            this.loggedOutNav()}
        </ul>
      </nav>
    );
  }

  ////////////////////

  loggedInNav = () => {
    return (
      <>
      <li><Link to='/profile'>My Profile</Link></li>
      <li><Link to='/items'>Items</Link></li>
      <li>
      <Link
      to='/login'
      onClick={this.logOutUser}
      >
      Log out
      </Link>
      </li>
      </>

    )
  }

  loggedOutNav = () => {
    return (
      <li>
      You are logged out.
      <Login />
      </li>
    )
  }

  ////////////////////

  logOutUser = () => {
    localStorage.removeItem('jwt')
    this.props.logOut()
  }
}

///////////////
// redux
///////////////

const mapStateToProps = (state) => {
  return ({
    loggedIn: state.usersReducer.loggedIn,
    user: state.usersReducer.user
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logOut: () => dispatch(logOut())
  })
}

const connectedNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)

export default connectedNav;
