import LinkArrow from '../components/LinkArrow';

const Pos = () => {
	return (
		<section className="pos section">
			<div className="container">
				<h2 className="section-title text-center">Point of Sale System</h2>
				<p className="section-desc text-center">
					The Landlord have started developing a unique and intuitive crypto <u>Point of Sale system</u>. This will allow bars, pubs, clubs and cafes to successfully take
					orders, manage inventory and accept payment in various types of crypto currency including $LNDLRD.
				</p>
				<div className="text-center">
					<LinkArrow href="/" dir="right" className="link link-brand">
						About Landlord POS
					</LinkArrow>
				</div>

				<div className="device-wrapper">
					<div className="device" data-device="iPhone5" data-orientation="portrait" data-color="black">
						<div className="screen"></div>
					</div>
				</div>

				<div className="pos-figure">
					<img className="pos-figure-img" src="/files/img/ipad.png" />
					<div className="pos-app">x</div>
				</div>
			</div>
		</section>
	);
};
export default Pos;
