import { combineReducers } from 'redux';

import rAccount from './rAccount';
import rForm from './rForm';

const appReducer = combineReducers({
	rAccount,
	rForm,
});

export default appReducer;
