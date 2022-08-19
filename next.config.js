const path = require('path');

module.exports = {
	// public environment
	env: {
		CONTRACT: '0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694',
		EMAIL: 'contact@thelandlord.biz',
		EMBR_API: '01GAM5ASBK0EKDJ2P4KMFE60DY',
	},
	reactStrictMode: false,
	swcMinify: true,
	poweredByHeader: false,
	optimizeFonts: false,
	pageExtensions: ['jsx', 'js'],

	sassOptions: {
		includePaths: [path.join(__dirname, 'assets/scss')],
	},
};
