import LinkArrow from '../components/LinkArrow';

const Beers = () => {
	return (
		<section className="beers section section-brand">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6 mb-5 text-center text-md-start mb-md-0">
						<img className="beers-img" src="/files/img/beers/beer.png" />
					</div>
					<div className="col-md-6 ps-0 text-center text-md-start ps-md-1">
						<h2 className="section-title">Landlord Beers</h2>
						<p className="section-desc mb-2">
							We have formed a partnership with Crafty Brewery in the UK to release the first Landlord craft beer REKT which is an amazing Pilsner. will be available
							in several stores in the UK.
						</p>
						<p className="section-desc mb-2">
							Additional partnerships in other countries will be established and additional beers will be launched and sold via the online store as well as bars
							across the world. Which Profits will be used to buy back and burn LNDLRD Tokens.
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
