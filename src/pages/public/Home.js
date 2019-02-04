import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'
import {
  // loginUser,
  // setCurrentUser
} from '../../actions'

// const apiUrl = 'http://localhost:3000'

class Home extends Component {
  render() {
    return this.props.loggedIn ?
      this.loggedInHome() :
      this.loggedOutHome()
  }

  ///////////////////////

  loggedInHome = () => {
    return (
      <div className="Home">You are logged in.</div>
    )
  }

  loggedOutHome = () => {
    return (
      <div className="Home">
      You are logged out. <Link to='/createAccount'>Create an account?</Link>
      </div>
    )
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
})


const connectedHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)


export default connectedHome;
