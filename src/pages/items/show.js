import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import TodoToggle from './TodoToggle'

// Redux
import { connect } from 'react-redux'
import {
  addTodo,
  removeTodo
} from '../../actions'

const apiUrl = 'http://localhost:3000'

class Item extends Component {
  render() {
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
          item={this.props.item}
          onList={!!this.props.user.items.find(i => i.id === this.props.item.id)}
          toggleTodo={this.toggleTodo}
        />

        <br />

        <div>
          <Link to='/items'>Back</Link>
        </div>
      </>
    )
  }

  ///////////////

  // todoToggle functions:

  toggleTodo = (item) => {
    let newItems = [...this.props.user.items]

    if (this.props.user.items.find(i => i.id === item.id)) {
      this.props.removeTodo(item)

      // fetch(`${apiUrl}/api/v1/todos/`, {
      //   method: 'DELETE',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Accept': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     todo: {
      //       user_id: this.props.user.id,
      //       item_id: item.id
      //     }
      //   })
      // })
    }
    else {
      this.props.addTodo(item)

      // fetch(`${apiUrl}/api/v1/todos`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Accept': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     todo: {
      //       user_id: this.props.user.id,
      //       item_id: item.id
      //     }
      //   })
      // })
    }

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

const mapDispatchToProps = (dispatch) => ({
  addTodo: (itemObj) => dispatch(addTodo(itemObj)),
  removeTodo: (itemObj) => dispatch(removeTodo(itemObj)),
})

const connectedItem = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Item)

export default connectedItem;
