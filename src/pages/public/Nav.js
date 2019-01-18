import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import {
  logOut
} from '../../actions'

// Redux
import { connect } from 'react-redux'

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
      {this.props.loggedIn ? `Logged in as ${this.props.user.display_name}` : 'please log in'}
        <ul>
        <li><Link to='/login'>Login</Link></li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/profile'>My Profile</Link></li>
          <li><Link to='/items'>Items</Link></li>
          <li>
            <Link
              to='/'
              onClick={this.logOutUser}
            >
              Log out
            </Link>
          </li>
        </ul>
      </nav>
    );
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
