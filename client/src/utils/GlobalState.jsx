import { createContext, useContext, useReducer } from "react";
import { reducer } from './reducers'

const CartContext = createContext();
const { Provider } = CartContext;

const CartProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    cart: [],
    cartOpen: false,

  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

