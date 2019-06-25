import { ADD_TO_CART } from "../actions";

export default function cart(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return action.cart;
    default:
      return state;
  }
}