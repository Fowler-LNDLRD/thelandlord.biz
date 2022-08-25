import { Swiper, SwiperSlide } from 'swiper/react';
import Parallax from '../../components/Parallax';
import SlideFade from '../../components/SlideFade';
import Image from 'next/image';
import LinkArrow from '../../components/LinkArrow';
import LogoLinks from '../../components/LogoLinks';
import Link from 'next/link';

const Protocols = () => {
	return (
		<section className="info bg-black" id="tokenomics">
			<div className="container">
				<SlideFade className="info-bg">
					<div className="row">
						<div className="col-6">
							<div className="row">
								<div className="col-6">
									<Link href="/">
										<a className="info-item">
											<div className="info-key">Supply</div>
											<div className="info-value">100 Billion</div>
										</a>
									</Link>
									<Link href="/">
										<a className="info-item">
											<div className="info-key">Burned</div>
											<div className="info-value">1.1 Billion</div>
										</a>
									</Link>
									<Link href="/">
										<a className="info-item">
											<div className="info-key">Circulating</div>
											<div className="info-value">98.8 Billion</div>
										</a>
									</Link>
								</div>
								<div className="col-6">
									<Link href="/">
										<a className="info-item">
											<div className="info-key">Liquidity Locked</div>
											<div className="info-value">19 Billion</div>
										</a>
									</Link>
									<Link href="/">
										<a className="info-item">
											<div className="info-key">Token Locked</div>
											<div className="info-value">15 Billion</div>
										</a>
									</Link>
									<Link href="/">
										<a className="info-item">
											<div className="info-key">Total Locked</div>
											<div className="info-value">34.2 Billion</div>
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-6">
							<div className="row">
								<div className="col-12">
									<div className="info-item">
										<div className="info-key">Contract</div>
										<div className="info-value">{process.env.CONTRACT}</div>
									</div>
								</div>
								<div className="col-6">
									<div className="info-item">
										<div className="info-key">Tax & Slippage</div>
										<div className="info-value">8% and 9%</div>
									</div>
								</div>
								<div className="col-6">
									<div className="info-item">
										<div className="info-key">Price</div>
										<div className="info-value">$0.00000124523</div>
									</div>
								</div>
								<div className="col-12 pe-5">
									<LogoLinks />
								</div>
							</div>
						</div>
					</div>
				</SlideFade>
			</div>
		</section>
	);
};
export default Protocols;
