import Ipad from '../../components/Ipad';
import POS from '../../components/POS';
import SlideFade from '../../components/SlideFade';
import Image from 'next/image';

const Pos = () => {
	return (
		<section className="pos section section-dark" id="pos">
			<SlideFade className="container px-3 px-md-2">
				<h2 className="section-title text-start text-md-center">Point of Sale System</h2>
				<p className="section-desc text-start text-md-center mb-3 mb-md-4">
					The Landlord have started developing a unique and intuitive crypto Point of Sale system. This will allow bars, pubs, clubs and cafes to successfully take
					orders, manage inventory and accept payment in various types of crypto currency including $LNDLRD.{' '}
					<span className="d-none d-md-inline-block">Take a look at the demo, part of POS system.</span>
				</p>
				<SlideFade delay={0.25}>
					<div className="pos-figure d-flex d-block d-md-none">
						<Image quality={100} width={768} height={477} className="pos-figure-img mt-auto" src="/img/home/pos.png" alt="Landlord Point of Sale System" />
					</div>
					<div className="d-none d-md-block">
						<Ipad>
							<POS />
						</Ipad>
					</div>
				</SlideFade>
			</SlideFade>
		</section>
	);
};
export default Pos;
