import Parallax from '../../components/Parallax';
import SlideFade from '../../components/SlideFade';
import Image from 'next/image';
const Pubs = () => {
	return (
		<section className="pubs section" id="pubs">
			<div className="container">
				<div className="row align-items-center">
					<SlideFade className="col-md-5 mb-3 mb-md-0">
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
					</SlideFade>

					<SlideFade y={0} className="col-md-7 text-center text-md-end pubs-img-container">
						<Image quality={100} width={550} height={531} src="/img/home/pub.png" alt="Landlord Pubs" />
					</SlideFade>
				</div>

				<Parallax offset={30} className="floating floating-03" ariaHidden="true">
					<Image alt="Landlord Pubs" src="/img/home/floating-03.png" width={160} height={160} objectFit="contain" quality={100} className="floating-img" />
				</Parallax>
				<Parallax offset={30} className="floating floating-04" ariaHidden="true">
					<Image alt="Landlord Pubs" src="/img/home/floating-04.png" width={160} height={160} objectFit="contain" quality={100} className="floating-img" />
				</Parallax>
			</div>
		</section>
	);
};
export default Pubs;
