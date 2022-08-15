const path = require('path');

module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	optimizeFonts: false,

	sassOptions: {
		includePaths: [path.join(__dirname, 'assets/scss')],
	},
};
