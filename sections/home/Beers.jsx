import Parallax from '../../components/Parallax';
import SlideFade from '../../components/SlideFade';
import Image from 'next/image';
const Beers = () => {
	return (
		<section className="beers section section-brand" id="beers">
			<div className="container">
				<SlideFade className="row align-items-center">
					<div className="col-md-6 text-center text-md-start mb-5 mb-md-0">
						<Parallax className="beers-img-container" offset={-20}>
							<Image quality={100} width={404} height={352} src="/img/home/beer.png" alt="Landlord Beers" />
						</Parallax>
					</div>
					<div className="col-md-6">
						<h2 className="section-title">Landlord Beers</h2>
						<p className="section-desc mb-1">
							We have formed a partnership with Crafty Brewery in the UK to release the Landlord Beers and Cider. 
							There are currently three drinks available from our store;REKT - A excellent Pilsner, FOMO - A refreshing Cider and	PUMP - A hoppy IPA
						</p>
						<p className="section-desc mb-1">
							Additional partnerships in other countries will be established and additional beers will be launched and sold via the online store as well as bars
							across the world.
						</p>
						<p className="section-desc">Profits will be used to buy back and burn $LNDLRD tokens and may be added to liquidity as well.</p>
					</div>
				</SlideFade>
			</div>
		</section>
	);
};
export default Beers;
