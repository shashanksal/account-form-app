/**
 * Native date convert to DD Mon YYYY format
 * @param {Date} date Date to be converted
 */
export const dateConvert = (date) => {
	return date.toLocaleDateString('en-GB', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	});
};

/**
 * Return whether email is valid
 * @param {String} email String email
 */
export const validateEmail = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

/**
 * Return whether number is valid and follows E.164 format
 * @param {String} number  string number
 */
export const validateAUNumber = (number) => {
	const re = /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/;
	return re.test(number);
};
