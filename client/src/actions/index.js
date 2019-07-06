export const RECEIVE_DATA = "RECEIVE_DATA";
export const ADD_TO_CART = "ADD_TO_CART";
export const RECEIVE_CART = "RECEIVE_CART";

export function handleReceiveDataFake() {
  return dispatch => {
    return getDoorsDataTwo().then(result => {
      dispatch(receiveDataAction(result));
    })
  }
}

export function handleReceiveData() {
  return async (dispatch) => {
    const res = await getDoorsDataTwo();
    dispatch(receiveDataAction(res));
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

const getDoorsDataTwo = async () => {
  const res = await fetch('http://localhost:3000/');
  const text = await res.text();
  return JSON.parse(text);
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