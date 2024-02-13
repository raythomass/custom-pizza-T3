import {ADD_TO_CART } from './actions';
  
  // The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
  export const reducer = (state, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cartOpen: true,
          cart: [...state.cart],
        };
    }
  };
  