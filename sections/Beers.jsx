import LinkArrow from '../components/LinkArrow';

const Beers = () => {
	return (
		<section className="beers section section-brand">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-6">
						<img className="beers-img" src="/files/img/beers/beer.png" />
					</div>
					<div className="col-6">
						<h2 className="section-title">Landlord Beers</h2>
						<p className="section-desc">
							We will create and sell some of the finest craft beers and ales. These will be available to purchase from the Online store with fiat or the crypto of
							your choice. Profits will be used to buy back and burn LNDLRD.
						</p>
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