import { combineReducers } from 'redux';

import rAccount from './rAccount';
import rForm from './rForm';
import rTempFormData from './rTempFormData';
import rErrorHandler from './rErrorHandler';

const appReducer = combineReducers({
	rAccount,
	rForm,
	rTempFormData,
	rErrorHandler,
});

export default appReducer;
