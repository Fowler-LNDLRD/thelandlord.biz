const Protocols = () => {
	return (
		<section className="protocols">
			<div className="container">
				<h2 className="protocols-title d-none">Protocols</h2>
				<div className="row">
					<div className="col-md-4">
						<article className="protocols-item">
							<span className="protocols-percent">3%</span>
							<h3 className="protocols-title">
								Pub <span>Protocol</span>
							</h3>
							<p className="protocols-desc">
								3% will be used to drive all aspects of The Landlord ecosystem. These tokens will be automatically liquidated into BNB by the contract.
							</p>
						</article>
					</div>

					<div className="col-md-4">
						<article className="protocols-item">
							<span className="protocols-percent">3%</span>
							<h3 className="protocols-title">
								Pints <span>Protocol</span>
							</h3>
							<p className="protocols-desc">
								Automatically growing the liquidity by taking 3% of each transaction and putting it into the liquidity pool adding stability to the LNDLRD value.
							</p>
						</article>
					</div>

					<div className="col-md-4">
						<article className="protocols-item">
							<span className="protocols-percent">2%</span>
							<h3 className="protocols-title">
								Shots <span>Protocol</span>
							</h3>
							<p className="protocols-desc">
								Rewarding all LNDLRD holders with passive income. in BUSD every hour as long as you are holding at least $50 worth of $LNDLRD Tokens.
							</p>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Protocols;
