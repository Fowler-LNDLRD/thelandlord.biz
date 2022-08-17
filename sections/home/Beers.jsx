/* eslint-disable @next/next/no-img-element */

import LinkArrow from '../../components/LinkArrow';

const Beers = () => {
	return (
		<section className="beers section section-brand">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6 text-center text-md-start mb-5 mb-md-0">
						<img className="beers-img" src="/img/home/beer.png" alt="Landlord Beers" />
					</div>
					<div className="col-md-6 ps-0 ps-md-2 text-center text-md-start">
						<h2 className="section-title">Landlord Beers</h2>
						<p className="section-desc mb-1">
							We have formed a partnership with Crafty Brewery in the UK to release the first Landlord craft beer REKT which is an amazing Pilsner. This will be
							available in several stores in the UK.
						</p>
						<p className="section-desc mb-1">
							Additional partnerships in other countries will be established and additional beers will be launched and sold via the online store as well as bars
							across the world.
						</p>

						<p className="section-desc mb-2">Profits will be used to buy back and burn $LNDLRD tokens and may be added to liquidity as well.</p>
						<LinkArrow href="/" dir="right" className="link link-dark">
							About Landlord Beers
						</LinkArrow>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Beers;
