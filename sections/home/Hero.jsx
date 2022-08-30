import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { initEmbr, mount, unmount } from '../../components/EmberScript';
import Image from 'next/image';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import SlideFade from '../../components/SlideFade';
import LinkArrow from '../../components/LinkArrow';
import { useTranslations } from 'next-intl';

const Hero = () => {
	const t = useTranslations('home.hero');
	const tc = useTranslations('common');

	useEffect(() => {
		const documentHeight = () => {
			const heroSection = document.getElementById('hero');
			if (heroSection?.style) {
				if (window.innerWidth > 767 && window.innerHeight > 650 && window.innerHeight < 900) {
					heroSection.classList.add('hero-fit');
					heroSection.style.setProperty('--hero-height', `${window.innerHeight}px`);
				} else {
					heroSection.classList.remove('hero-fit');
					heroSection.style.removeProperty('--hero-height');
				}
			}
		};
		documentHeight();
		window.addEventListener('resize', documentHeight);
	}, []);

	const [showBuy, setShowBuy] = useState(false);
	const toggleBuy = () => {
		if (showBuy) {
			setShowBuy(false);
		} else {
			initEmbr();
			setShowBuy(true);
			mount({
				type: 'CheckoutEmbed',
				options: {
					checkoutId: process.env.EMBR_API,
					selector: '#checkout',
				},
			});
		}
	};

	return (
		<>
			<div className="hero" id="hero">
				<section className="container">
					<SlideFade animate as="h1" className="hero-title">
						{t.rich('title', {
							span: (children) => <span>{children}</span>,
						})}
					</SlideFade>
					<SlideFade animate as="p" className="hero-desc" delay={0.1}>
						{t('desc')}
					</SlideFade>
					<SlideFade animate as="button" delay={0.2} className="hero-btn btn btn-brand" type="button" onClick={() => toggleBuy()}>
						{tc('buy')}
					</SlideFade>
					<Link href="/#whitepaper">
						<motion.a
							initial={{ opacity: 0.01, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="hero-btn btn btn-light ms-1"
						>
							{tc('whitepaper')}
						</motion.a>
					</Link>
				</section>
				{/* <LogoLinks /> */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
					<Image
						className="hero-cover"
						priority
						quality={100}
						layout="fill"
						alt="The Landlord Token"
						src="/img/home/hero.jpg"
						objectFit="cover"
						objectPosition="center"
					/>
				</motion.div>
			</div>

			<Modal className="hero-buy" show={showBuy} onHide={toggleBuy} onExited={unmount} centered>
				<Modal.Header closeButton>
					<Modal.Title as="h4">{tc('buy')}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div id="checkout">
						<div className="spinner-border m-auto d-block text-brand" role="status">
							<span className="visually-hidden">{tc('loading')}...</span>
						</div>
					</div>

					<div className="mt-1 text-center">
						<LinkArrow
							target="_blank"
							rel="noreferrer"
							className="link link-brand py-1"
							dir="right"
							href={'https://pancakeswap.finance/swap?outputCurrency=' + process.env.CONTRACT}
						>
							{tc('buy_pancakeswap')}
						</LinkArrow>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};
export default Hero;
