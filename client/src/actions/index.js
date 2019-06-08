import { getDoorsData } from '../DATA';

export const RECEIVE_DATA = "RECEIVE_DATA";

export function handleReceiveData() {
  return dispatch => {
    return getDoorsData().then(result => {
      let parsedResult = JSON.parse(result);
      dispatch(receiveDataAction(parsedResult));
    })
  }
}

function receiveDataAction (data) {
  return {
    type: RECEIVE_DATA,
    data: data,
  }
}