import social from '../data/social';

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

				<div className="hero-contract">
					<span className="hero-contract-title">Contract</span>
					<span className="hero-contract-code">0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694</span>
				</div>

				<div className="hero-btns d-flex align-items-center">
					<a href="/" className="btn btn-warning me-3">
						How To Buy
					</a>
					<a href="/" className="btn btn-dark">
						Whitepaper
					</a>

					<ul className="hero-social d-flex ms-4">
						{social?.map((item, index) => (
							<li className="hero-social-item" key={index}>
								<a className="hero-social-link" href={item.url} title={item.title}>
									{item?.icon}
								</a>
							</li>
						))}
					</ul>
				</div>
			</article>
		</section>
	);
};
export default Hero;
