import { combineReducers } from 'redux';
import doors from './doors';
import featured from './featured';
import cart from './cart';

export default combineReducers ({
	doors, featured, cart
})