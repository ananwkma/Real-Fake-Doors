export const RECEIVE_DATA = "RECEIVE_DATA";
export const ADD_TO_CART = "ADD_TO_CART";
export const RECEIVE_CART = "RECEIVE_CART";

export function handleReceiveData() {
  return async dispatch => {
    const res = await getDoorsData();
    dispatch(receiveDataAction(res));
  }
}

const getDoorsData = async () => {
  const res = await fetch('http://35.236.21.220:3005/');
  // const res = await fetch('http://localhost:3000/');
  const text = await res.text();
  return JSON.parse(text);
};

export function handleAddToCart(curDoor, color) {
  const { id, price, size, name } = curDoor;
  const dictId = id + '-' + size + '-' + color;

  return async dispatch => {
    const cart = await fetch('ttp://35.236.21.220:3005/cart', {
    // const cart = await fetch('http://localhost:3000/cart', {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ dictId: dictId, price: price, id: id, name: name }), // body data type must match "Content-Type" header
    })
    const res = await cart.text();
    dispatch(addToCartAction(res));
  }
}

export function handleReceiveCart() {
  return async dispatch => {
    const cart = await fetch('http://35.236.21.220:3005/getCart');
    // const cart = await fetch('http://localhost:3000/getCart');
    const res = await cart.text();
    const parsed = await JSON.parse(res);
    dispatch(receiveCartAction(parsed)); 
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