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
