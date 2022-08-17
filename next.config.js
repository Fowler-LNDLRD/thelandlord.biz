const path = require('path');

module.exports = {
	reactStrictMode: false,
	swcMinify: true,
	poweredByHeader: false,
	optimizeFonts: false,
	pageExtensions: ['jsx', 'js'],

	sassOptions: {
		includePaths: [path.join(__dirname, 'assets/scss')],
	},
};
