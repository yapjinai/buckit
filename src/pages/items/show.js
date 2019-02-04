import React from 'react';

const Item = (item) => {
  return (
    <div className="Item">
      An item:
      {item.id}
      {item.description}
    </div>
  );
}

export default Item;
