export const RECEIVE_DATA = "RECEIVE_DATA";
export const ADD_TO_CART = "ADD_TO_CART";

export function handleReceiveData() {
  return dispatch => {
    return getDoorsData().then(result => {
      dispatch(receiveDataAction(result));
    })
  }
}

const getDoorsData = () => {
  // return fetch('http://35.236.21.220:3005/')
  return fetch('http://localhost:3000/', { headers: {'Content-Type': 'application/json' } })
    .then(res => {
      return res.text();
    }).then(resText => {
      return JSON.parse(resText);
    })
  ;
};

export function handleAddToCart(id, color) {
  return dispatch => {
    return fetch('http://localhost:3000/cart', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ id: id, color: color }), // body data type must match "Content-Type" header
    }).then(res => {
      return res.text();
    }).then(res => {
      dispatch(addToCartAction(res));
    })
  }
}

function receiveDataAction (data) {
  return {
    type: RECEIVE_DATA,
    data: data,
  }
}

function addToCartAction(cart) {
  return {
    type: ADD_TO_CART,
    cart: cart,
  }
}