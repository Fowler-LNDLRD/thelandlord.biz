import Ipad from '../../components/Ipad';
import POS from '../../components/POS';

const Pos = () => {
	return (
		<section className="pos section section-dark">
			<div className="container">
				<h2 className="section-title text-center">Point of Sale System</h2>
				<p className="section-desc text-center mb-5">
					The Landlord have started developing a unique and intuitive crypto <u>Point of Sale system</u>. This will allow bars, pubs, clubs and cafes to successfully take
					orders, manage inventory and accept payment in various types of crypto currency including $LNDLRD.
				</p>
				<div className="pos-figure d-flex d-block d-md-none">
					<img className="pos-figure-img mt-auto" src="/files/img/pos.png" alt="Point of Sale System" />
				</div>
				<div className="d-none d-md-block">
					<Ipad>
						<POS />
					</Ipad>
				</div>
			</div>
		</section>
	);
};
export default Pos;
