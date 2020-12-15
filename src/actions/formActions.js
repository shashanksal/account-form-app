import {
	TYPE_STORE_FORM_EDIT_MODE,
	TYPE_STORE_ACCOUNT_DATA,
} from './actionTypes';

export const storeFormEditState = (state) => {
	return {
		type: TYPE_STORE_FORM_EDIT_MODE,
		payload: state,
	};
};

export const storeAccountData = (data) => {
	return {
		type: TYPE_STORE_ACCOUNT_DATA,
		payload: data,
	};
};
