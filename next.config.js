const path = require('path');

module.exports = {
	reactStrictMode: false,
	swcMinify: true,
	poweredByHeader: false,

	//
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
		localeDetection: false,
	},

	// sass
	sassOptions: {
		includePaths: [path.join(__dirname, 'assets/scss')],
	},

	// public environment
	env: {
		WEBSITE_URL: 'https://thelandlord.biz',
		WEBSITE_TITLE: 'The Landlord Token - $LNDLRD',
		WEBSITE_SLOGAN: 'Crypto Pubs & Beers',
		WEBSITE_DESCRIPTION:
			'The Landlord ($LNDLRD) is much more than a BEP-20 token. It has 3 fantastic protocols, passive income, real world utilities, and utility driven NFTs and more.',
		WEBSITE_IMAGE: 'https://thelandlord.biz/img/meta/website.jpg',

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
		SOCIAL_FACEBOOK: '',

		LINK_BSCSCAN: 'https://bscscan.com/token/0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694',
		LINK_COINGEKO: 'https://www.coingecko.com/en/coins/the-landlord',
		LINK_TOKPIE: 'https://tokpie.com/view_exchange/lndlrd-usdt/',
		LINK_WATCHER: 'https://watcher.guru/coin/the-landlord',
		LINK_NOMICS: 'https://nomics.com/assets/lndlrd-the-landlord',
		LINK_PANCAKESWAP: 'https://pancakeswap.finance/swap?outputCurrency=0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694',
		LINK_BOGGED: 'https://charts.bogged.finance/?c=bsc&t=0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694',
		LINK_POOCOIN: 'https://poocoin.app/tokens/0xd6da6491a6663b1d413715f4fd8edd74a4b47694',
		LINK_BOGGED_SWAP: 'https://app.bogged.finance/bsc/swap?tokenIn=BNB&tokenOut=0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694',
		LINK_POOCOIN_SWAP: 'https://poocoin.app/tokens/0xd6da6491a6663b1d413715f4fd8edd74a4b47694',

		SHILL_API: 'https://earn.thelandlord.biz/api/board/official',
		SHILL_URL: 'https://earn.thelandlord.biz',

		FORM_ID: 'x',
		COINGECKO_PRICE: 'https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses=0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694&vs_currencies=usd',

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
};
