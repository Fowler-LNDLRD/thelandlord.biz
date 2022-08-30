import Image from 'next/image';
import Link from 'next/link';
import SlideFade from '../components/SlideFade';
import listings from '../data/listings.json';
import HeadTag from '../components/HeadTag';

const Listings = () => {
	return (
		<div className="page page-chart">
			<HeadTag title={`Listings`} desc="Landlord Token on exchanges and other platforms." />

			<section className="container">
				<SlideFade>
					<h1 className="page-title text-center">Listings</h1>
					<div className="page-desc text-center page-desc-limit mb-5">
						The Landlord is currently listed on the following exchanges and listing websites. The Landlord team are always actively looking to form listing partnerships
						and this this will continue to grow as The Landlord continues to grow in additional markets and countries.
					</div>
				</SlideFade>
				<div className="row mb-5 justify-content-center">
					<SlideFade className="col-6 col-md-3 mb-1" delay={0.05}>
						<Link href={process.env.LINK_PANCAKESWAP}>
							<a className="chart-link" target="_blank" rel="noreferrer">
								<Image
									quality={100}
									width={48}
									height={48}
									src={`/img/listed/pancakeswap.png`}
									alt={'The Landlord Token - PancakeSwap'}
									className="info-listed-img"
								/>
								<span className="chart-link-name">PancakeSwap</span>
							</a>
						</Link>
					</SlideFade>
					<SlideFade className="col-6 col-md-3 mb-1" delay={0.05}>
						<Link href={process.env.LINK_TOKPIE}>
							<a className="chart-link" target="_blank" rel="noreferrer">
								<Image quality={100} width={48} height={48} src={`/img/listed/tokpie.png`} alt={'The Landlord Token - PancakeSwap'} className="info-listed-img" />
								<span className="chart-link-name">TokPie</span>
							</a>
						</Link>
					</SlideFade>
				</div>
				<SlideFade as="section" delay={0.1}>
					<div className="row">
						{listings.map((item, index) => (
							<div key={index} className="col-6 col-md-3 col-lg-2 mb-1">
								<Link href={item.url}>
									<a className="chart-link chart-link-website" target="_blank" rel="noreferrer">
										<Image
											quality={100}
											width={48}
											height={48}
											src={`/img/listed/${item.image}.png`}
											alt={'The Landlord Token - ' + item.title}
											className="info-listed-img"
										/>
										<span className="chart-link-name">{item.title}</span>
									</a>
								</Link>
							</div>
						))}
					</div>
				</SlideFade>
			</section>
		</div>
	);
};
export default Listings;

export function getStaticProps({ locale }) {
	return {
		props: {
			messages: require(`../locales/${locale}.json`),
		},
	};
}
