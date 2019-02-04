import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import authorizeFn from '../Authorize'

// Redux
import { connect } from 'react-redux'
import {
  setAllItems
} from '../../actions'

const apiUrl = 'http://localhost:3000'

class Items extends Component {
  render() {
    return (
      <div className="Items">
        All items

        <ul className="ItemsList">
          {this.displayItems()}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchItems();
  }

  /////////////////

  fetchItems = () => {
    fetch(`${apiUrl}/api/v1/items`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
    })
    .then(r => r.json())
    .then(this.props.setAllItems)
  }

  displayItems = () => {
    return (
      this.props.items.map(i => {
        return (
          <li>
            <Link to={`items/${i.id}`}>
              {i.description}
            </Link>
          </li>
        )
      })
    )
  }
}

///////////////
// redux
///////////////

const mapStateToProps = (state) => {
  return ({
    items: state.itemsReducer.items
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setAllItems: (items) => dispatch(setAllItems(items)),
})

const connectedItems = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Items)

export default authorizeFn(connectedItems);
