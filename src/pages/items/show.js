import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'
import {

} from '../../actions'

class Item extends Component {
  render() {
    return (
      <div className="Item">
        {this.props.item ? this.itemLoaded() : null}
      </div>
    );
  }

  ////////////

  itemLoaded = () => {
    return (
      <>
        <h2>{this.props.item.description}</h2>

        <h3>People with this goal:</h3>
        <ul>
          {this.props.item.users.map(u => <li>{u.display_name}</li>)}
        </ul>

        <Link to='/items'>Back</Link>
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

const mapDispatchToProps = (dispatch, ownProps) => ({
//
})

const connectedItem = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Item)

export default connectedItem;
