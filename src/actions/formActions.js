import {
	TYPE_STORE_FORM_EDIT_MODE,
	TYPE_STORE_ACCOUNT_DATA,
	TYPE_STORE_FNAME_TEMP,
	TYPE_STORE_LNAME_TEMP,
	TYPE_STORE_EMAIL_TEMP,
	TYPE_STORE_DOB_TEMP,
	TYPE_STORE_BIO_TEMP,
	TYPE_STORE_PHONE_TEMP
} from "./actionTypes";

export const storeFormEditState = state => {
	return {
		type: TYPE_STORE_FORM_EDIT_MODE,
		payload: state
	};
};

export const storeAccountData = data => {
	return {
		type: TYPE_STORE_ACCOUNT_DATA,
		payload: data
	};
};

export const storeTempFData = data => {
	return {
		type: TYPE_STORE_FNAME_TEMP,
		payload: data
	};
};

export const storeTempLData = data => {
	return {
		type: TYPE_STORE_LNAME_TEMP,
		payload: data
	};
};

export const storeTempEmail = data => {
	return {
		type: TYPE_STORE_EMAIL_TEMP,
		payload: data
	};
};

export const storeTempDob = data => {
	return {
		type: TYPE_STORE_DOB_TEMP,
		payload: data
	};
};

export const storeTempBio = data => {
	return {
		type: TYPE_STORE_BIO_TEMP,
		payload: data
	};
};

export const storeTempPhone = data => {
	return {
		type: TYPE_STORE_PHONE_TEMP,
		payload: data
	};
};
