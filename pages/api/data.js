import axios from 'axios';

// links
const burned_url = 'https://bscscan.com/token/0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694?a=0x000000000000000000000000000000000000dead';
const pinklock_url = 'https://bscscan.com/token/0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694?a=0x407993575c91ce7643a4d4ccacc9a98c36ee1bbe';
const pancakeswap_url = 'https://bscscan.com/token/0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694?a=0xfa1f2cf9fd3465b88889420918b6315b887127fe';

// supply
const supply = 100000000000;
const burned = 1127243701;
const circulating = supply - burned;

// locked
const pinklock = 15216982354;
const pancakeswap = 19025458948;
const locked = pinklock + pancakeswap;

// utilities
const trunc = (num) => {
	return Number(num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
};

const percent = (numA, numB) => {
	return trunc((numA / numB) * 100);
};

// API
const handler = async (req, res) => {
	if (req.method !== 'GET') return res.status(400).json({ status: 404, message: 'not allowed' });
	try {
		const data = {
			supply: supply,
			circulating: circulating,
			burned: {
				balance: burned,
				percentage: percent(burned, supply),
				url: burned_url,
			},
			pancakeswap: {
				balance: pancakeswap,
				percentage: percent(pancakeswap, supply),
				url: pancakeswap_url,
			},
			pinklock: {
				balance: pinklock,
				percentage: percent(pinklock, supply),
				url: pinklock_url,
			},
			locked: {
				balance: locked,
				percentage: percent(locked, supply),
			},
		};
		res.status(200).json(data);
	} catch (err) {
		console.log(err);
		res.status(400).json({ status: 404, message: err });
	}
};

export default handler;
