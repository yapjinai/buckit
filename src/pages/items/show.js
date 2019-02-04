import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import TodoToggle from './TodoToggle'

// Redux
import { connect } from 'react-redux'
import {

} from '../../actions'

class Item extends Component {
  render() {
    console.log(this.props.item)
    console.log(this.props.user)
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

        <TodoToggle
          onList={!!this.props.user.items.find(i => i.id === this.props.item.id)}
        />

        <br />

        <div>
          <Link to='/items'>Back</Link>
        </div>
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
