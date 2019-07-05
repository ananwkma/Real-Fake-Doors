export const RECEIVE_DATA = "RECEIVE_DATA";
export const ADD_TO_CART = "ADD_TO_CART";
export const RECEIVE_CART = "RECEIVE_CART";

export function handleReceiveData() {
  return dispatch => {
    return getDoorsData().then(result => {
      dispatch(receiveDataAction(result));
    })
  }
}

const getDoorsData = () => {
  // return fetch('http://35.236.21.220:3005/')
  return fetch('http://localhost:3000/')
    .then(res => {
      return res.text();
    }).then(resText => {
      return JSON.parse(resText);
    })
  ;
};

export function handleAddToCart(curDoor, color) {
  const { id, price, size, name } = curDoor;
  const dictId = id + '-' + size + '-' + color;

  return dispatch => {
    // return fetch('http://35.236.21.220:3005/cart', {
    return fetch('http://localhost:3000/cart', {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ dictId: dictId, price: price, id: id, name: name }), // body data type must match "Content-Type" header
    }).then(res => {
      return res.text();
    }).then(res => {
      dispatch(addToCartAction(res));
    })
  }
}

export function handleReceiveCart() {
  return dispatch => {
    // return fetch('http://35.236.21.220:3005/getCart') 
    return fetch('http://localhost:3000/getCart') 
      .then(res => {
        return res.text();
      }).then(res => {
        return JSON.parse(res);
      }).then(res => {
        dispatch(receiveCartAction(res));
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

function receiveCartAction (cart) {
  return {
    type: RECEIVE_CART,
    cart: cart,
  }
}