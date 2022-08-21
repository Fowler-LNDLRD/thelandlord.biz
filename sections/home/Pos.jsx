import { motion } from 'framer-motion';

import Ipad from '../../components/Ipad';
import POS from '../../components/POS';

const Pos = () => {
	return (
		<section className="pos section section-dark" id="pos">
			<div className="container px-3 px-md-2">
				<h2 className="section-title text-start text-md-center">Point of Sale System</h2>
				<p className="section-desc text-start text-md-center mb-3 mb-md-4">
					The Landlord have started developing a unique and intuitive crypto Point of Sale system. This will allow bars, pubs, clubs and cafes to successfully take
					orders, manage inventory and accept payment in various types of crypto currency including $LNDLRD.{' '}
					<span className="d-none d-md-inline-block">Take a look at the demo, part of POS system.</span>
				</p>
				<motion.div initial={{ y: 100 }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
					<div className="pos-figure d-flex d-block d-md-none">
						<img className="pos-figure-img mt-auto" src="/img/home/pos.png" alt="Point of Sale System" />
					</div>
					<div className="d-none d-md-block">
						<Ipad>
							<POS />
						</Ipad>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
export default Pos;
