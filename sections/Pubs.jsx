import LinkArrow from '../components/LinkArrow';

const Pubs = () => {
	return (
		<section className="pubs section-brand">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6">
						<h2 className="section-title">Landlord Pubs</h2>
						<p className="section-desc">
							The Landlord Pubs will be created from the PUB Protocol and revitalise the pub industry by not just accepting crypto as payment but encouraging it.
							LNDLRD holders will be rewarded with discounted prices and special rewards. Landlord Pubs will use cutting edge technology throughout and set a new
							standard.
						</p>

						<LinkArrow href="/" dir="right" className="link link-dark">
							About Landlord Pubs
						</LinkArrow>
					</div>

					<div className="col-md-6 text-end">
						<img className="pubs-img" src="/files/img/beers/beer.png" />
					</div>
				</div>
			</div>
		</section>
	);
};
export default Pubs;
