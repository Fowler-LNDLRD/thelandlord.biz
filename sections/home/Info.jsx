import SlideFade from '../../components/SlideFade';
import LogoLinks from '../../components/LogoLinks';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import axios from 'axios';

const Info = () => {
	const [copied, setCopied] = useState(false);
	const copyToClipboard = () => {
		navigator.clipboard.writeText(process.env.CONTRACT);
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	// info
	const info = process.env.INFO;

	return (
		<section className="info bg-black" id="tokenomics">
			<div className="container">
				<SlideFade className="info-bg pb-0" delay={0.35}>
					<div className="row">
						<div className="col-md-6">
							<div className="row">
								<div className="col-6">
									<Link href={process.env.LINK_BSCSCAN}>
										<a className="info-item info-link" target="_blank" rel="noreferrer">
											<span className="info-key">Supply</span>
											<span className="info-value">{info?.supply}</span>
										</a>
									</Link>
									<Link href={info.burnedWallet}>
										<a className="info-item info-link" target="_blank" rel="noreferrer">
											<span className="info-key">Burned</span>
											<span className="info-value">{info?.burned}</span>
										</a>
									</Link>
									<div className="info-item">
										<span className="info-key">Circulating</span>
										<span className="info-value">{info?.circulating}</span>
									</div>
								</div>
								<div className="col-6">
									<Link href={info.liquidityWallet}>
										<a className="info-item info-link" target="_blank" rel="noreferrer">
											<span className="info-key">Liquidity Locked</span>
											<span className="info-value">{info?.liquidity}</span>
										</a>
									</Link>
									<Link href={info.pinklockWallet}>
										<a className="info-item info-link" target="_blank" rel="noreferrer">
											<span className="info-key">Token Locked</span>
											<span className="info-value">{info?.pinklock}</span>
										</a>
									</Link>
									<div className="info-item">
										<span className="info-key">Total Locked</span>
										<span className="info-value">{info?.locked}</span>
									</div>
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
										<span className="info-key">Contract</span>
										<span className="info-value d-md-flex">
											{copied ? (
												'Copied to clipboard.'
											) : (
												<>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="14"
														height="14"
														fill="currentColor"
														className="info-value-icon d-none d-md-inline"
														viewBox="0 0 16 16"
													>
														<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
														<path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
													</svg>
													<span className=" text-break text-ellipsis">{process.env.CONTRACT}</span>
												</>
											)}
										</span>
									</div>
								</div>
								<div className="col-6">
									<div className="info-item">
										<span className="info-key">Tax & Slippage</span>
										<span className="info-value">8% and 9%</span>
									</div>
								</div>
								<div className="col-6">
									<div className="info-item">
										<span className="info-key">Price</span>
										<span className="info-value">wait...</span>
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
