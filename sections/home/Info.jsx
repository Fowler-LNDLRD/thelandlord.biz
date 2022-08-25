import { Swiper, SwiperSlide } from 'swiper/react';
import SlideFade from '../../components/SlideFade';
import LinkArrow from '../../components/LinkArrow';
import LogoLinks from '../../components/LogoLinks';
import Link from 'next/link';
import { useState } from 'react';

const Info = () => {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(process.env.CONTRACT);
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	return (
		<section className="info bg-black" id="tokenomics">
			<div className="container">
				<SlideFade className="info-bg pb-0" delay={0.35}>
					<div className="row">
						<div className="col-md-6">
							<div className="row">
								<div className="col-6">
									<Link href="/">
										<a className="info-item info-link">
											<div className="info-key">Supply</div>
											<div className="info-value">100 Billion</div>
										</a>
									</Link>
									<Link href="/">
										<a className="info-item info-link">
											<div className="info-key">Burned</div>
											<div className="info-value">1.1 Billion</div>
										</a>
									</Link>
									<Link href="/">
										<a className="info-item info-link">
											<div className="info-key">Circulating</div>
											<div className="info-value">98.8 Billion</div>
										</a>
									</Link>
								</div>
								<div className="col-6">
									<Link href="/">
										<a className="info-item info-link">
											<div className="info-key">Liquidity Locked</div>
											<div className="info-value">19 Billion</div>
										</a>
									</Link>
									<Link href="/">
										<a className="info-item info-link">
											<div className="info-key">Token Locked</div>
											<div className="info-value">15 Billion</div>
										</a>
									</Link>
									<Link href="/">
										<a className="info-item info-link">
											<div className="info-key">Total Locked</div>
											<div className="info-value">34.2 Billion</div>
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-md-6 order-first order-md-last">
							<div className="row">
								<div className="col-12 pe-md-3">
									<LogoLinks />
								</div>
								<div className="col-12">
									<div className="info-item info-link" onClick={() => copyToClipboard()}>
										<div className="info-key">Contract</div>
										<div className="info-value text-break text-ellipsis">
											{copied ? (
												'Copied to clipboard.'
											) : (
												<>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														className="info-value-icon"
														viewBox="0 0 16 16"
													>
														<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
														<path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
													</svg>
													<span>{process.env.CONTRACT}</span>
												</>
											)}
										</div>
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
										<div className="info-value">wait...</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SlideFade>
			</div>
		</section>
	);
};
export default Info;
