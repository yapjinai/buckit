import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux'
import {
  // loginUser,
  // setCurrentUser
} from '../../actions'

// const apiUrl = 'http://localhost:3000'

class Home extends Component {
  render() {
    return this.props.loggedIn ? this.loggedInHome : this.loggedOutHome
  }

  ///////////////////////

  loggedInHome = (
    <div className="Home">You are logged in.</div>
  )

  loggedOutHome = (
    <div className="Home">
      You are logged out.
    </div>
  )

}


///////////////////
// redux
///////////////////

const mapStateToProps = (state) => {
  console.log(state)
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
