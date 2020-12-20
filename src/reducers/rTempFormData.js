import {
	TYPE_STORE_FNAME_TEMP,
	TYPE_STORE_LNAME_TEMP,
	TYPE_STORE_EMAIL_TEMP,
	TYPE_STORE_DOB_TEMP,
	TYPE_STORE_BIO_TEMP,
	TYPE_STORE_PHONE_TEMP,
} from '../actions/actionTypes';

import { combineReducers } from 'redux';

const accountInitData = {
	first_name: 'Bruce',
	last_name: 'Banner',
	email: 'bruce.banner@marvel.com',
	phone: '0400000000',
	dob: new Date('31 May 1970'),
	bio:
		'Dr. Bruce Banner is a character in the Marvel Cinematic Universe (MCU) film franchise initially portrayed by Edward Norton and subsequently by Mark Ruffalo—based on the Marvel Comics character of the same name—known commonly by his alter ego, the Hulk. In the films, Banner is a renowned physicist who subjected himself to a gamma radiation experiment designed to replicate a World War II-era "super soldier" program.',
};

const tempFname = (state = accountInitData.first_name, action) => {
	switch (action.type) {
		case TYPE_STORE_FNAME_TEMP:
			return action.payload;
		default:
			return state;
	}
};

const tempLname = (state = accountInitData.last_name, action) => {
	switch (action.type) {
		case TYPE_STORE_LNAME_TEMP:
			return action.payload;
		default:
			return state;
	}
};

const tempEmail = (state = accountInitData.email, action) => {
	switch (action.type) {
		case TYPE_STORE_EMAIL_TEMP:
			return action.payload;
		default:
			return state;
	}
};

const tempDob = (state = accountInitData.dob, action) => {
	switch (action.type) {
		case TYPE_STORE_DOB_TEMP:
			return action.payload;
		default:
			return state;
	}
};

const tempPhone = (state = accountInitData.phone, action) => {
	switch (action.type) {
		case TYPE_STORE_PHONE_TEMP:
			return action.payload;
		default:
			return state;
	}
};

const tempBio = (state = accountInitData.bio, action) => {
	switch (action.type) {
		case TYPE_STORE_BIO_TEMP:
			return action.payload;
		default:
			return state;
	}
};

const rTempFormData = combineReducers({
	tempFname,
	tempLname,
	tempEmail,
	tempPhone,
	tempDob,
	tempBio,
});

export default rTempFormData;
