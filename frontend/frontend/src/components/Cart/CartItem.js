import React from 'react';

function CartItem({ item, removeFromCart }) {
  const { name, price } = item;

  return (
    <div>
      <p>{name} - ${price.toFixed(2)}</p>
      <button onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  );
}

export default CartItem;
