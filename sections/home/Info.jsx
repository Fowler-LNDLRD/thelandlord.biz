import SlideFade from '../../components/SlideFade';
import LogoLinks from '../../components/LogoLinks';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import axios from 'axios';

const Info = () => {
	const tc = useTranslations('common');
	const info = process.env.INFO;
	const [price, setPrice] = useState(null);
	const [mc, setMc] = useState(null);

	// copy
	const [copied, setCopied] = useState(false);
	const copyToClipboard = () => {
		navigator.clipboard.writeText(process.env.CONTRACT);
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	useEffect(() => {
		const getPrice = async () => {
			try {
				const response = await axios.get(
					'https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses=0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694&vs_currencies=usd'
				);
				const data = response?.data && response?.data['0xd6da6491a6663b1d413715f4fd8edd74a4b47694']?.usd;
				if (data) {
					setPrice(data);
					const market = new Intl.NumberFormat('en', {
						maximumFractionDigits: 0,
					}).format(data * 98872756299);
					setMc(market);
				}
			} catch (err) {
				setPrice('Error!');
			}
		};
		getPrice();
	}, []);

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
											<span className="info-key">{tc('supply')}</span>
											<span className="info-value">{info?.supply}</span>
										</a>
									</Link>
									<Link href={info.burnedWallet}>
										<a className="info-item info-link" target="_blank" rel="noreferrer">
											<span className="info-key">{tc('burned')}</span>
											<span className="info-value">{info?.burned}</span>
										</a>
									</Link>
									<div className="info-item">
										<span className="info-key">{tc('circulating')}</span>
										<span className="info-value">{info?.circulating}</span>
									</div>
								</div>
								<div className="col-6">
									<Link href={info.liquidityWallet}>
										<a className="info-item info-link" target="_blank" rel="noreferrer">
											<span className="info-key">{tc('liquidity_locked')}</span>
											<span className="info-value">{info?.liquidity}</span>
										</a>
									</Link>
									<Link href={info.pinklockWallet}>
										<a className="info-item info-link" target="_blank" rel="noreferrer">
											<span className="info-key">{tc('tokens_locked')}</span>
											<span className="info-value">{info?.pinklock}</span>
										</a>
									</Link>
									<div className="info-item">
										<span className="info-key">{tc('total_locked')}</span>
										<span className="info-value">{info?.locked}</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 order-first order-md-last ps-md-2">
							<div className="row">
								<div className="col-12 pe-md-4">
									<LogoLinks />
								</div>
								<div className="col-12">
									<div className="info-item info-link" onClick={() => copyToClipboard()}>
										<span className="info-key">{tc('contract')}</span>
										<span className="info-value d-md-flex">
											{copied ? (
												tc('contract_copied')
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
										<span className="info-key">{tc('market_cap')}</span>
										<span className="info-value">{mc ? `$${mc}` : `${tc('loading')}...`}</span>
									</div>
								</div>
								<div className="col-6">
									<div className="info-item">
										<span className="info-key">{tc('price')}</span>
										<span className="info-value">{price ? `$${price}` : `${tc('loading')}...`}</span>
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
