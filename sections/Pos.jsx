import LinkArrow from '../components/LinkArrow';
import Ipad from '../components/Ipad';
import POS from '../components/POS';

const Pos = () => {
	return (
		<section className="pos section">
			<div className="container">
				<h2 className="section-title text-center">Point of Sale System</h2>
				<p className="section-desc text-center mb-5">
					The Landlord have started developing a unique and intuitive crypto <u>Point of Sale system</u>. This will allow bars, pubs, clubs and cafes to successfully take
					orders, manage inventory and accept payment in various types of crypto currency including $LNDLRD.
				</p>
				<div className="device-wrapper">
					<div className="device" data-device="iPhone5" data-orientation="portrait" data-color="black">
						<div className="screen"></div>
					</div>
				</div>
				<Ipad>
					<POS />
				</Ipad>
			</div>
		</section>
	);
};
export default Pos;
