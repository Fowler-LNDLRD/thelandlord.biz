import { useState } from 'react';
import Link from 'next/link';
import HeadTag from '../components/HeadTag';

const Buy = () => {
	const [wallet, setWallet] = useState(null);
	const [device, setDevice] = useState(null);

	const goBack = () => {
		if (device) {
			setDevice(null);
		} else if (wallet) {
			setWallet(null);
		}
	};

	return (
		<>
			<HeadTag title={`How to buy`} />
			<section className="page page-buy container">
				<h1 className="page-title  mb-1 text-center">How To Buy</h1>

				<div className="text-center mb-3">
					<h1 className={`page-title page-buy-title mb-1 text-center`}>{wallet || device ? `with ${wallet} ${device ? 'on ' + device : ''}` : 'Landlord Token'}</h1>

					{(wallet || device) && (
						<button className="btn btn-link text-muted" onClick={() => goBack()}>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1" viewBox="0 0 16 16">
								<path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
							</svg>
							Back
						</button>
					)}
				</div>

				{!wallet && (
					<div className="buy-options buy-card text-center">
						<h2 className="buy-card-title mb-3">What wallet do you have ?</h2>
						<div className="mb-2">
							<button onClick={() => setWallet('TrustWallet')} className="btn btn-primary me-2">
								TrustWallet
							</button>
							<button onClick={() => setWallet('MetaMask')} className="btn btn-warning text-white">
								MetaMask
							</button>
						</div>
						<button onClick={() => setWallet('NoWallet')} className="btn btn-link text-muted">
							I do not have a wallet
						</button>
					</div>
				)}

				{wallet && !device && (
					<div className="buy-options buy-card text-center">
						<h2 className="buy-card-title mb-3">What device your {wallet} is on?</h2>
						<div className="mb-2">
							<button onClick={() => setDevice('Android')} className="btn btn-primary">
								Android
							</button>
							<button onClick={() => setDevice('iOS')} className="btn btn-primary mx-2">
								iOS
							</button>
							<button onClick={() => setDevice('Browser')} className="btn btn-primary">
								Browser
							</button>
						</div>
					</div>
				)}

				{wallet && device && (
					<div className="buy-options buy-card text-center">
						<h2 className="buy-card-title mb-3">Hello People who do not know how to buy!</h2>
					</div>
				)}
			</section>
		</>
	);
};
export default Buy;
