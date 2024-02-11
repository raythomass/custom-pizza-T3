import React from 'react';
import CartItem from './CartItem';

function Cart({ cartItems, removeFromCart, proceedToCheckout }) {
  // Calculate total price of items in cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                removeFromCart={removeFromCart}
              />
            ))}
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button onClick={proceedToCheckout}>Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
