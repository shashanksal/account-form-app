import { TYPE_STORE_ACCOUNT_DATA } from '../actions/actionTypes';

const rAccountData = (state = {}, action) => {
	switch (action.type) {
		case TYPE_STORE_ACCOUNT_DATA:
			return action.payload;
		default:
			return state;
	}
};

export default rAccountData;
