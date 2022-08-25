import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { initEmbr, mount, unmount } from '../../components/EmberScript';
import Image from 'next/image';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import SlideFade from '../../components/SlideFade';
import LinkArrow from '../../components/LinkArrow';

const Hero = () => {
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
						crypto <span>pubs &amp; beers</span>
					</SlideFade>
					<SlideFade animate as="p" className="hero-desc" delay={0.1}>
						The Landlord ($LNDLRD) is much more than a BEP-20 token. It has 3 fantastic protocols, passive income, fantastic real world utilities, and utility driven
						NFTs and much more.
					</SlideFade>
					<SlideFade animate as="button" delay={0.2} className="hero-btn btn btn-brand" type="button" onClick={() => toggleBuy()}>
						Buy
					</SlideFade>
					<Link href="/#whitepaper">
						<SlideFade animate as="a" delay={0.3} className="hero-btn btn btn-light ms-1">
							Whitepaper
						</SlideFade>
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
					<Modal.Title as="h4">Buy</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div id="checkout">
						<div className="spinner-border m-auto d-block text-brand" role="status">
							<span className="visually-hidden">Loading...</span>
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
							Buy from PancakeSwap
						</LinkArrow>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};
export default Hero;
