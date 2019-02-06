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
      <div className="Home">
        <div>
          <h2>Welcome{this.props.user.display_name ? `, ${this.props.user.display_name}` : null}!</h2>
        </div>
        <div>
          {this.props.user.items.length ? this.renderTodos() : <h2>You have nothing to do!</h2>}
        </div>

      </div>
    )
  }

  loggedOutHome = () => {
    return (
      <div className="Home">
      You are logged out. <Link to='/createAccount'>Create an account?</Link>
      </div>
    )
  }

  /////////////

  renderTodos = () => {
    return(
      <>
        <h2>Your to-dos:</h2>
        <ul>
          {this.props.user.items.map(this.renderTodo)}
        </ul>
      </>
    )
  }

  renderTodo = (item) => {
    return(
      <li key={item.id}>
        <Link to={`items/${item.id}`}>{item.description}</Link>
      </li>
    )
  }

}


///////////////////
// redux
///////////////////

const mapStateToProps = (state) => {
  return ({
  loggedIn: state.usersReducer.loggedIn,
  user: state.usersReducer.user
})}

const mapDispatchToProps = (dispatch, ownProps) => ({
})


const connectedHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)


export default connectedHome;
