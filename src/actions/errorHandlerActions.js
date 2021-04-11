import {
	TYPE_STORE_FNAME_ERROR_FLAG,
	TYPE_STORE_LNAME_ERROR_FLAG,
	TYPE_STORE_EMAIL_ERROR_FLAG,
	TYPE_STORE_DOB_ERROR_FLAG,
	TYPE_STORE_BIO_ERROR_FLAG,
	TYPE_STORE_PHONE_ERROR_FLAG
} from "./actionTypes";

export const storeFDataErrorFlag = data => {
	return {
		type: TYPE_STORE_FNAME_ERROR_FLAG,
		payload: data
	};
};

export const storeLDataErrorFlag = data => {
	return {
		type: TYPE_STORE_LNAME_ERROR_FLAG,
		payload: data
	};
};

export const storeEmailErrorFlag = data => {
	return {
		type: TYPE_STORE_EMAIL_ERROR_FLAG,
		payload: data
	};
};

export const storeDobErrorFlag = data => {
	return {
		type: TYPE_STORE_DOB_ERROR_FLAG,
		payload: data
	};
};

export const storeBioErrorFlag = data => {
	return {
		type: TYPE_STORE_BIO_ERROR_FLAG,
		payload: data
	};
};

export const storePhoneErrorFlag = data => {
	return {
		type: TYPE_STORE_PHONE_ERROR_FLAG,
		payload: data
	};
};
