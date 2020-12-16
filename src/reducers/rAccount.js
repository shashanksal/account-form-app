import { TYPE_STORE_ACCOUNT_DATA } from '../actions/actionTypes';

const accountInitData = {
	first_name: 'Bruce',
	last_name: 'Banner',
	email: 'bruce.banner@marvel.com',
	phone: '0400000000',
	dob: new Date('13 May 1970'),
	bio:
		'Dr. Bruce Banner is a character in the Marvel Cinematic Universe (MCU) film franchise initially portrayed by Edward Norton and subsequently by Mark Ruffalo—based on the Marvel Comics character of the same name—known commonly by his alter ego, the Hulk. In the films, Banner is a renowned physicist who subjected himself to a gamma radiation experiment designed to replicate a World War II-era "super soldier" program.',
};

const rAccountData = (state = accountInitData, action) => {
	switch (action.type) {
		case TYPE_STORE_ACCOUNT_DATA:
			return action.payload;
		default:
			return state;
	}
};

export default rAccountData;
