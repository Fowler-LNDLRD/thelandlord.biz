import Link from 'next/link';
import Image from 'next/image';
import HeadTag from '../components/HeadTag';
import SlideFade from '../components/SlideFade';
import { initEmbr, mount, unmount, getEmbr } from '../components/EmberScript';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

const Buy = () => {
	const t = useTranslations('buy');
	const tc = useTranslations('common');
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
			<HeadTag title={`How To Buy`} desc={t('desc')} />
			<SlideFade as="section" className="page page-buy container">
				<h1 className="page-title text-center">{t('title')}</h1>
				<p className="page-desc text-center mb-5">{t('desc')}</p>

				<div className="px-md-5">
					<div className="row text-center g-2">
						<div className="col-md-7">
							<div className="row g-1 justify-content-center">
								<div className="col-6">
									<Link href={process.env.LINK_PANCAKESWAP}>
										<a target="_blank" rel="noreferrer" className="buy-link">
											<Image quality={100} width={40} height={40} src="/img/listed/pancakeswap.png" alt="PancakeSwap" className="buy-link-img" />
											<span className="buy-link-title">
												<span>{tc('from')}</span> PancakeSwap
											</span>
										</a>
									</Link>
								</div>
								<div className="col-6">
									<Link href={process.env.LINK_POOCOIN_SWAP}>
										<a target="_blank" rel="noreferrer" className="buy-link">
											<Image quality={100} width={40} height={40} src="/img/listed/poocoin.png" alt="PooCoin" className="buy-link-img" />
											<span className="buy-link-title">
												<span>{tc('from')}</span> PooCoin
											</span>
										</a>
									</Link>
								</div>
								<div className="col-6">
									<Link href={process.env.LINK_TOKPIE}>
										<a target="_blank" rel="noreferrer" className="buy-link">
											<Image quality={100} width={40} height={40} src="/img/listed/tokpie.png" alt="TokPie" className="buy-link-img" />
											<span className="buy-link-title">
												<span>{tc('from')}</span> TokPie
											</span>
										</a>
									</Link>
								</div>
								<div className="col-6">
									<Link href={process.env.LINK_BOGGED_SWAP}>
										<a target="_blank" rel="noreferrer" className="buy-link">
											<Image quality={100} width={40} height={40} src="/img/listed/bogged.png" alt="Bogged" className="buy-link-img" />
											<span className="buy-link-title">
												<span>{tc('from')}</span> Bogged
											</span>
										</a>
									</Link>
								</div>
							</div>
						</div>

						<div className="col-md-5">
							<div id="checkout" className="page-buy-checkout">
								<div className="spinner-border m-auto d-block text-brand" role="status">
									<span className="visually-hidden">{tc('loading')}...</span>
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

export function getStaticProps({ locale }) {
	return {
		props: {
			messages: require(`../locales/${locale}.json`),
		},
	};
}
