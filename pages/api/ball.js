const axios = require('axios');
var WAValidator = require('multicoin-address-validator');

const fetchPrice = async () => {
	try {
		const { data: response } = await axios.get(process.env.COINGECKO_PRICE);
		const data = response && response['0xd6da6491a6663b1d413715f4fd8edd74a4b47694']?.usd;
		return data;
	} catch (error) {
		return null;
	}
};

const fetchWallet = async (wallet) => {
	try {
		const { data: response } = await axios.get(
			`https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694&address=${wallet}&tag=latest&apikey=P27GHAUQ5R3DBZD2CNIWSGBNVK4MR57YH5`
		);
		return response;
	} catch (error) {
		return null;
	}
};

const handler = async (req, res) => {
	try {
		// method must be get
		if (req.method !== 'GET') return res.status(401).json({ message: 'Something went wrong!' });

		// if no wallet
		if (!req.query.wallet || req.query.wallet === '') return res.status(400).json({ message: 'Please add your wallet!' });

		var valid = WAValidator.validate(req.query.wallet, 'BNB');
		if (!valid) return res.status(400).json({ message: `Not a valid BSC wallet address!` });

		// fetch wallet
		const wallet = await fetchWallet(req.query.wallet);

		// if wallet is empty
		if (!wallet && wallet?.result === '0') return res.status(400).json({ message: `You don't have $LNDLRD in your wallet!` });

		// get balance
		const balance = Math.floor(Number(wallet.result) / 1e18);

		// get price
		const price = await fetchPrice();
		if (!price) return res.status(500).json({ message: 'Can not get the price!' });

		return res.status(200).json({ price, balance });
	} catch (err) {
		console.log('ball', err);
		return res.status(500).json({ message: 'Something went wrong!' });
	}
};

export default handler;
