import {
	TYPE_STORE_FNAME_ERROR_FLAG,
	TYPE_STORE_LNAME_ERROR_FLAG,
	TYPE_STORE_EMAIL_ERROR_FLAG,
	TYPE_STORE_DOB_ERROR_FLAG,
	TYPE_STORE_BIO_ERROR_FLAG,
	TYPE_STORE_PHONE_ERROR_FLAG
} from "../actions/actionTypes";

import { combineReducers } from "redux";

const fNameFlag = (state = false, action) => {
	switch (action.type) {
		case TYPE_STORE_FNAME_ERROR_FLAG:
			return action.payload;
		default:
			return state;
	}
};

const lNameFlag = (state = false, action) => {
	switch (action.type) {
		case TYPE_STORE_LNAME_ERROR_FLAG:
			return action.payload;
		default:
			return state;
	}
};

const emailFlag = (state = false, action) => {
	switch (action.type) {
		case TYPE_STORE_EMAIL_ERROR_FLAG:
			return action.payload;
		default:
			return state;
	}
};

const dobFlag = (state = false, action) => {
	switch (action.type) {
		case TYPE_STORE_DOB_ERROR_FLAG:
			return action.payload;
		default:
			return state;
	}
};

const phoneFlag = (state = false, action) => {
	switch (action.type) {
		case TYPE_STORE_PHONE_ERROR_FLAG:
			return action.payload;
		default:
			return state;
	}
};

const bioFlag = (state = false, action) => {
	switch (action.type) {
		case TYPE_STORE_BIO_ERROR_FLAG:
			return action.payload;
		default:
			return state;
	}
};

const rErrorHandler = combineReducers({
	fNameFlag,
	lNameFlag,
	emailFlag,
	phoneFlag,
	dobFlag,
	bioFlag
});

export default rErrorHandler;
