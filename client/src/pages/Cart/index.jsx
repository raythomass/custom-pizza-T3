import './cart.css'
import { useStoreContext } from "../../utils/GlobalState";

import { REMOVE_FROM_CART } from '../../utils/actions';

const Cart = () => {

    const [state, dispatch] = useStoreContext();
    const { cart } = state;

    function calculateTotal() {
        const totalCost = cart.reduce((acc, pizza) => acc + pizza.price, 0);
        return totalCost.toFixed(2);
    }

    const removeFromCart = (index) => {
        dispatch({
            type: REMOVE_FROM_CART,
            index,
        });
    };

    return (
        <>
            <main>
                <section className="cart-items">
                    <h2>Shopping Cart</h2>
                    {cart.map((pizza, index) => (
                        <div key={index} className="cart-item">
                            <h3>{pizza.name}</h3>
                            <p>${pizza.price}</p>
                            <button onClick={() => removeFromCart(index)} className="btn-remove">Remove</button>
                        </div>
                    ))}
                    <div id="total">
                        <h3>Total:</h3>
                        <p id="total-amount">${calculateTotal()}</p>
                    </div>
                    <button id="btn-proceed-to-checkout">Proceed to Checkout</button>
                </section>
            </main>
        </>
    )
}

export default Cart;
