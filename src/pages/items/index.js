import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import authorizeFn from '../Authorize'

import Item from './show'

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

        <Route exact path={this.props.match.url} render={this.ItemIndex}/>
        <Route path={`${this.props.match.url}/:id`} render={this.ItemShow}/>

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

  ItemIndex = () => {
    return (
      <div className="Items">
        <h2>All items</h2>

        <ul className="ItemsList">
          {this.displayItems()}
        </ul>
      </div>
    )
  }

  ItemShow = (props) => {
    let item = null;
    if (this.props.items.length) {
      item = this.props.items.find(i => {
        return i.id === parseInt(props.match.params.id)
      })
      // console.log(item);
    }
    return <Item item={item} />
  }

  displayItems = () => {
    return (
      this.props.items.map(i => {
        return (
          <li key={i.id}>
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

export default authorizeFn(withRouter(connectedItems));
