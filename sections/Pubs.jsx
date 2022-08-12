import LinkArrow from '../components/LinkArrow';

const Pubs = () => {
	return (
		<section className="pubs section">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6 text-center text-md-start pe-0 pe-md-3">
						<h2 className="section-title">Landlord Pubs</h2>
						<p className="section-desc">
							The Landlord Pubs will be created from the PUB Protocol and revitalise the pub industry by not just accepting crypto as payment but encouraging it.
							LNDLRD holders will be rewarded with discounted prices and special rewards. Landlord Pubs will use cutting edge technology throughout and set a new
							standard.
						</p>

						<LinkArrow href="/" dir="right" className="link link-brand">
							About Landlord Pubs
						</LinkArrow>
					</div>

					<div className="col-md-6 text-end d-none d-mb-block">
						<img className="pubs-img" src="/files/img/pub.jpg" />
					</div>
				</div>
			</div>
		</section>
	);
};
export default Pubs;
