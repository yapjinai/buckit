import React, { Component } from 'react';
import authorizeFn from './Authorize'

class Items extends Component {
  render() {
    return (
      <div className="Items">
        Items
      </div>
    );
  }
}

export default authorizeFn(Items);
