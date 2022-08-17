import Link from 'next/link';
import HeadTag from '../components/HeadTag';
import { initEmbr, mount, unmount, getEmbr } from '../components/EmberScript';
import { useState, useEffect } from 'react';

const Buy = () => {
	const [showSteps, setShowSteps] = useState(false);
	useEffect(() => {
		const isEmbr = getEmbr();
		initEmbr();
		mount({
			type: 'CheckoutEmbed',
			options: {
				checkoutId: '01GAM5ASBK0EKDJ2P4KMFE60DY',
				selector: '#checkout',
			},
		});
	}, []);

	return (
		<>
			<HeadTag title={`How To Buy`} />
			<section className="page page-buy container">
				<h1 className="page-title text-center">Buy Landlord Token</h1>
				<p className="page-desc text-center mb-3">Swap $BNB for $LNDLRD</p>

				<div className={`row justify-content-center mb-3 ` + (showSteps ? 'd-none' : 'd-flex')}>
					<div className="col-md-5">
						<div id="checkout">
							<div className="spinner-border m-auto d-block text-brand" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
					</div>
				</div>

				<p className="page-desc text-center">
					<button type="button" className="btn btn-link" onClick={() => setShowSteps(!showSteps)}>
						{showSteps ? 'I have a wallet' : `I don't have a wallet`}
					</button>
				</p>

				{showSteps && (
					<div className="row justify-content-center">
						<div className="col-md-8 ps-3">
							<div className="buy-steps">
								<div className="buy-step">
									<div className="buy-step-title">
										<span>#1</span> Create a wallet
									</div>
									<div className="buy-step-desc">
										Download TrustWallet and follow the steps to make your wallet. Always remember to keep the 12-word seed phrase a secret. Do not share it
										with anyone ever! We will never ask you for your seed phrase, ever.
									</div>
								</div>
								<div className="buy-step">
									<div className="buy-step-title">
										<span>#2</span> Purchase $BNB
									</div>
									<div className="buy-step-desc">You can buy BNB from TrustWallet app or other exchanges like Binance.</div>
								</div>
								<div className="buy-step">
									<div className="buy-step-title">
										<span>#3</span> Swap $BNB for $LNDLRD
									</div>
									<div className="buy-step-desc">Use PancakeSwap to $Swap BNB for $LNDLRD.</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</section>
		</>
	);
};
export default Buy;
