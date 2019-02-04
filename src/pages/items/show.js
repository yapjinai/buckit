import React from 'react';

const Item = (item) => {
  return (
    <div className="Item">
      {item.description}
    </div>
  );
}

export default Item;
