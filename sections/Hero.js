const Hero = () => {
	return (
		<section className="hero">
			<article className="container">
				<h1 className="hero-title">
					<span>Worlds first</span> <span>crypto pubs</span>
				</h1>
				<p className="hero-desc">
					The Landlord Token(LNDLRD) drives the whole Landlord ecosystem. A BEP-20 token that incorporates 3 fantastic protocols into it's smart contract. Together, it's
					tokenomics power-up one truly unique token and will really drive forward the Pub industry.
				</p>

				<div className="hero-btns d-flex">
					<a href="/" className="btn btn-warning me-3">
						How To Buy
					</a>
					<a href="/" className="btn btn-dark">
						Whitepaper
					</a>
				</div>
			</article>
		</section>
	);
};
export default Hero;
