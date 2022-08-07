import LinkArrow from '../components/LinkArrow';

const Pos = () => {
	return (
		<section className="pos section section-dark">
			<div className="container">
				<div className="row justify-content-md-center align-items-center">
					<div className="col-9 text-center">
						<h2 className="section-title">Point of Sale System</h2>
						<p className="section-desc  text-center">
							The Landlord have started developing a unique and intuitive crypto <u>Point of Sale system</u>. This will allow bars, pubs, clubs and cafes to
							successfully take orders, manage inventory and accept payment in various types of crypto currency including $LNDLRD.
						</p>
						<LinkArrow href="/" dir="right" className="link link-info">
							About Landlord POS
						</LinkArrow>
					</div>
				</div>

				<figure className="pos-figure">
					<img className="pos-figure-img" src="/files/img/ipadpro.png" />
					<span></span>
				</figure>
			</div>
		</section>
	);
};
export default Pos;
