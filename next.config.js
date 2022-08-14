const path = require('path');

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'assets/scss')],
	},

	i18n: {
		locales: ['en', 'de'],
		defaultLocale: 'en',
	},
};
