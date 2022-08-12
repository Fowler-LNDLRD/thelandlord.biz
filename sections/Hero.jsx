import { useEffect } from 'react';

const Hero = () => {
	const documentHeight = () => {
		const doc = document.getElementById('hero');
		doc.style.setProperty('--hero-height', `${window.innerHeight}px`);
	};

	useEffect(() => {
		documentHeight();
		window.addEventListener('resize', () => window.innerHeight > 460 && window.innerHeight < 800 && documentHeight());
	}, []);

	return (
		<section className="hero" id="hero">
			<article className="container">
				<h1 className="hero-title">
					crypto <span>pubs &amp; beers</span>
				</h1>
				<p className="hero-desc">
					The Landlord Token ($LNDLRD) is a BEP-20 token with 3 fantastic protocols. Together, it's tokenomics power-up one truly unique token and will really drive
					forward the Pub industry.
				</p>
				<a className="hero-btn btn btn-brand" href="/">
					How To Buy
				</a>

				<button className="hero-btn btn btn-link ms-1">Contract</button>
			</article>
			<div className="container hero-coin">
				<img className="hero-coin-img" src="/files/img/coin.png" alt="Landlord Token - $LNDLRD" />
			</div>
		</section>
	);
};
export default Hero;
