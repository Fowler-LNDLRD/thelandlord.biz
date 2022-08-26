const { scan } = require('bsc-tokenholdings');
const axios = require('axios');

const fetchPrice = async () => {
	try {
		const { data: response } = await axios.get(process.env.COINGECKO_PRICE);
		const data = response && response['0xd6da6491a6663b1d413715f4fd8edd74a4b47694']?.usd;
		return data;
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

		// if wallet is valid
		const wallet = await scan(req.query.wallet, 'bnb');
		if (wallet.error_msg === 'Invalid wallet address') return res.status(400).json({ message: 'Invalid wallet address!' });

		// if they have LNDLRD
		if (!wallet.LNDLRD || !wallet.LNDLRD.balance) return res.status(400).json({ message: `You don't have $LNDLRD in your wallet!` });

		const balance = Math.floor(wallet.LNDLRD.balance.replaceAll(',', ''));
		const price = await fetchPrice();

		return res.status(200).json({ price, balance });
	} catch (err) {
		console.log('ball', err);
		return res.status(500).json({ message: 'Something went wrong!' });
	}
};

export default handler;
