const path = require('path');

module.exports = {
	// public environment
	env: {
		WEBSITE_URL: 'https://thelandlord.biz',
		WEBSITE_TITLE: 'The Landlord Token',
		WEBSITE_SLOGAN: 'Crypto Pubs & Beers',
		WEBSITE_DESCRIPTION:
			'The Landlord ($LNDLRD) is much more than a BEP-20 token. It has 3 fantastic protocols, passive income, fantastic real world utilities, and utility driven NFTs and much more.',
		WEBSITE_IMAGE: 'https://thelandlord.biz/img/meta/website.jpg',

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
