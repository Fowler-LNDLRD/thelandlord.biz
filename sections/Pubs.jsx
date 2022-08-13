import LinkArrow from '../components/LinkArrow';

const Pubs = () => {
	return (
		<section className="pubs section">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6 text-center text-md-start pe-0 pe-md-3 mb-3 mb-md-0">
						<h2 className="section-title">Landlord Pubs</h2>

						<p className="section-desc">
							Landlord Pubs will be launched initially in the UK and then rolled out worldwide. These will be driven by the $LNDLRD point of sale system providing
							fast, reliable, and cheap crypto payments.
						</p>
						<p className="section-desc">
							All Landlord pubs will accept crypto payments and encourage $LNDLRD holders to pay with their tokens to receive discounted drinks. Holders will also be
							able to purchase NFTs that unlock additional drink discounts and special offers.
						</p>
						<p className="section-desc mb-0">
							Landlord Pubs will use cutting edge technology throughout and help drive crypto mass adoption. Profits will be used to buyback and burn tokens and add
							to liquidity.
						</p>

						{/* <LinkArrow href="/" dir="right" className="link link-brand">
							About Landlord Pubs
						</LinkArrow> */}
					</div>

					<div className="col-md-6 d-center text-md-block">
						<img className="pubs-img" src="/files/img/coaster.png" />
					</div>
				</div>
			</div>
		</section>
	);
};
export default Pubs;
