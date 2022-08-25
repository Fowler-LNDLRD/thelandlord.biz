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
		LINK_PANCAKESWAP: 'https://pancakeswap.finance/swap?outputCurrency=0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694',
		LINK_BOGGED: 'https://charts.bogged.finance/?c=bsc&t=0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694',

		SHILL_API: 'https://earn.thelandlord.pub/api/board/official',
		SHILL_URL: 'https://earn.thelandlord.pub',

		FORM_ID: 'x',

		INFO: {
			supply: '100 Billion',
			burned: '1.1 Billion',
			circulating: '98.9 Billion',
			liquidity: '18.9 Billion',
			pinklock: '15.2 Billion',
			locked: '34.1 Billion',

			burnedWallet: 'https://bscscan.com/token/0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694?a=0x000000000000000000000000000000000000dead',
			liquidityWallet: 'https://bscscan.com/token/0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694?a=0xfa1f2cf9fd3465b88889420918b6315b887127fe',
			pinklockWallet: 'https://bscscan.com/token/0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694?a=0x407993575c91ce7643a4d4ccacc9a98c36ee1bbe',
		},
	},

	reactStrictMode: false,
	swcMinify: true,
	poweredByHeader: false,

	sassOptions: {
		includePaths: [path.join(__dirname, 'assets/scss')],
	},
};
