import { RECEIVE_DATA } from "../actions";

export default function doors(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.data.doors;
    default:
      return state;
  }
}