import { useEffect } from 'react';
import ContractModal from '../../components/ContractModal';

const Hero = () => {
	const documentHeight = () => {
		if (window.innerHeight > 460 && window.innerHeight < 799 && window.innerWidth > 768) {
			const doc = document.getElementById('hero');
			doc.style.setProperty('--hero-height', `${window.innerHeight}px`);
		}
	};

	useEffect(() => {
		documentHeight();
		window.addEventListener('resize', documentHeight);
	}, []);

	return (
		<>
			<section className="hero" id="hero">
				<article className="container">
					<h1 className="hero-title">
						crypto <span>pubs &amp; beers</span>
					</h1>
					<p className="hero-desc">
						The Landlord ($LNDLRD) is much more than a BEP-20 token. It has 3 fantastic protocols, passive income, fantastic real world utilities, and utility driven
						NFT's and much more.
					</p>
					<a className="hero-btn btn btn-brand" href="/">
						How To Buy
					</a>

					<button className="hero-btn btn btn-dark ms-1" type="button" data-bs-toggle="modal" data-bs-target="#contractModal">
						Contract
					</button>
				</article>
				<div className="container hero-coin">
					<img className="hero-coin-img" src="/files/img/coin.png" alt="Landlord Token - $LNDLRD" />
				</div>
			</section>
			<ContractModal />
		</>
	);
};
export default Hero;