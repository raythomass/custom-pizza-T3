import {
  ADD_TO_CART, 
  REMOVE_FROM_CART 
} from './actions';

  
  // The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
  export const reducer = (state, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cartOpen: true,
          cart: [...state.cart, action.cart],
        };
      
      case REMOVE_FROM_CART:
        
        return {
          ...state,
          // cartOpen: state.cart.length > 0,
          cart: state.cart.filter((pizza, index) => {
            return index !== action.index;
          }),
        };
   }
  };
  