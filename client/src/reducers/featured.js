import { RECEIVE_DATA } from "../actions";

export default function featured(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.data.featured;
    default:
      return state;
  }
}