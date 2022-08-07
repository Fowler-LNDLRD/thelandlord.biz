import LinkArrow from '../components/LinkArrow';

const Pubs = () => {
	return (
		<section className="pubs">
			<div className="container">
				<div className="row">
					<div className="col-6 pb-5">
						<h2 className="pubs-title">Landlord Pubs</h2>
						<p className="pubs-desc pe-4">
							The Landlord Pubs will be created from the PUB Protocol and revitalise the pub industry by not just accepting crypto as payment but encouraging it.
							LNDLRD holders will be rewarded with discounted prices and special rewards. Landlord Pubs will use cutting edge technology throughout and set a new
							standard.
						</p>

						<div className="pubs-btns">
							<LinkArrow href="/" dir="right" className="link link-dark">
								About Landlord Pubs
							</LinkArrow>
						</div>
					</div>

					<div className="col-6">
						<img className="beers-slide-img" src="/files/img/beers/beer.png" />
					</div>
				</div>
			</div>
		</section>
	);
};
export default Pubs;
