import React from 'react';
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div className="Item">
      <h2>{item ? item.description: null}</h2>

      <Link to='/items'>Back</Link>
    </div>
  );
}

export default Item;
