import Link from 'next/link';
import Image from 'next/image';
import HeadTag from '../components/HeadTag';
import SlideFade from '../components/SlideFade';
import { initEmbr, mount, unmount, getEmbr } from '../components/EmberScript';
import { useEffect } from 'react';

<script async type="module" id="embrCheckout" src="https://scripts.embr.org/checkout/checkout.js" data-chain="bsc" data-address="0xd6da6491a6663b1d413715f4fd8edd74a4b47694"></script>

const Buy = () => {
	useEffect(() => {
		const isEmbr = getEmbr();

		initEmbr();
		if (!isEmbr) {
			mount({
				type: 'CheckoutEmbed',
				options: {
					checkoutId: process.env.EMBR_API,
					selector: '#checkout',
					backgroundColor: '#000000',
					showLogo: false,
				},
			});
		}
		return () => {
			if (isEmbr) {
				unmount();
			}
		};
	}, []);

	return (
		<>
			<HeadTag title="How to buy" desc="There are many ways that you can buy Landlord Token." />
			<SlideFade as="section" className="page page-buy container">
				<h1 className="page-title text-center">Buy $LNDLRD</h1>
				<p className="page-desc text-center mb-5">There are many ways that you can buy Landlord Token.</p>

				<div className="px-md-5">
					<div className="row text-center g-2">
						<div className="col-md-7">
							<div className="row g-1 justify-content-center">
								<div className="col-6">
									<Link href={process.env.LINK_PANCAKESWAP}>
										<a target="_blank" rel="noreferrer" className="buy-link">
											<Image quality={100} width={40} height={40} src="/img/listed/pancakeswap.png" alt="PancakeSwap" className="buy-link-img" />
											<span className="buy-link-title">
												<span>From</span> PancakeSwap
											</span>
										</a>
									</Link>
								</div>
								<div className="col-6">
									<Link href={process.env.LINK_POOCOIN_SWAP}>
										<a target="_blank" rel="noreferrer" className="buy-link">
											<Image quality={100} width={40} height={40} src="/img/listed/poocoin.png" alt="PooCoin" className="buy-link-img" />
											<span className="buy-link-title">
												<span>From</span> PooCoin
											</span>
										</a>
									</Link>
								</div>
								<div className="col-6">
									<Link href={process.env.LINK_TOKPIE}>
										<a target="_blank" rel="noreferrer" className="buy-link">
											<Image quality={100} width={40} height={40} src="/img/listed/tokpie.png" alt="TokPie" className="buy-link-img" />
											<span className="buy-link-title">
												<span>From</span> TokPie
											</span>
										</a>
									</Link>
								</div>
								<div className="col-6">
									<Link href={process.env.LINK_BOGGED_SWAP}>
										<a target="_blank" rel="noreferrer" className="buy-link">
											<Image quality={100} width={40} height={40} src="/img/listed/bogged.png" alt="Bogged" className="buy-link-img" />
											<span className="buy-link-title">
												<span>From</span> Bogged
											</span>
										</a>
									</Link>
								</div>
							</div>
						</div>

						<div className="col-md-5">
							<div id="checkout" className="page-buy-checkout">
								<div className="spinner-border m-auto d-block text-brand" role="status">
									<span className="visually-hidden">Loading...</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</SlideFade>
		</>
	);
};
export default Buy;
