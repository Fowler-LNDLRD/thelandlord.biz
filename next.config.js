const path = require('path');

module.exports = {
	// public environment
	env: {
		WEBSITE_URL: 'https://thelandlord.pub',
		WEBSITE_TITLE: 'The Landlord Token',
		WEBSITE_SLOGAN: 'Crypto Pubs & Beers',
		WEBSITE_DESCRIPTION:
			'The Landlord ($LNDLRD) is much more than a BEP-20 token. It has 3 fantastic protocols, passive income, real world utilities, and utility driven NFTs and more.',
		WEBSITE_IMAGE: 'https://thelandlord.pub/img/meta/website.jpg',

		CONTRACT: '0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694',
		EMBR_API: '01GAM5ASBK0EKDJ2P4KMFE60DY',
		EMAIL: 'contact@thelandlord.biz',

		WHITEPAPER: '/pdf/The-Landlord-Whitepaper.pdf',
		AUDIT: '/pdf/The-Landlord-Audit.pdf',

		LIQUIDITY_LOCK: 'https://www.pinksale.finance/#/pinklock/detail/0xfa1F2cf9fd3465B88889420918B6315b887127fE?chain=BSC',
		TOKEN_LOCK: 'https://www.pinksale.finance/pinklock/record/1026448?chain=BSC',

		SOCIAL_TWITTER: 'https://twitter.com/Landlord_Token',
		SOCIAL_TELEGRAM: 'https://t.me/TheLandlordToken',
		SOCIAL_INSTAGRAM: 'https://instagram.com/thelandlordtoken',
		SOCIAL_YOUTUBE: 'https://youtube.com/channel/UCPc2NMZdFnDN5rV-_gbpQKg/videos',

		LINK_BSCSCAN: 'https://bscscan.com/token/0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694',
		LINK_COINGEKO: 'https://www.coingecko.com/en/coins/the-landlord',
		LINK_TOKPIE: 'https://tokpie.com/view_exchange/lndlrd-usdt/',
		LINK_WATCHER: 'https://watcher.guru/coin/the-landlord',
		LINK_NOMICS: 'https://nomics.com/assets/lndlrd-the-landlord',

		SHILL_API: 'https://landlord.army/api/board',
		SHILL_URL: 'https://earn.thelandlord.pub',

		FORM_ID: 'x',
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
