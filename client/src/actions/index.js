export const RECEIVE_DATA = "RECEIVE_DATA";

export const getDoorsData = () => {
  return fetch('http://35.236.21.220:3005/')
    .then(res => {
      return res.text();
    }).then(resText => {
      return JSON.parse(resText);
    })
  ;
};

export function handleReceiveData() {
  return dispatch => {
    return getDoorsData().then(result => {
      dispatch(receiveDataAction(result));
    })
  }
}

function receiveDataAction (data) {
  return {
    type: RECEIVE_DATA,
    data: data,
  }
}