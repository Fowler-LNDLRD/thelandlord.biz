import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import ContractModal from '../../components/ContractModal';
import LogoLinks from '../../components/LogoLinks';
import { initEmbr, mount, unmount } from '../../components/EmberScript';
import SlideFade from '../../components/SlideFade';
import Image from 'next/image';

const Hero = () => {
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

	useEffect(() => {
		documentHeight();
		window.addEventListener('resize', documentHeight);
	}, []);

	const [showContract, setShowContract] = useState(false);
	const toggleContract = () => setShowContract(!showContract);

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
					<SlideFade as="h1" className="hero-title">
						crypto <span>pubs &amp; beers</span>
					</SlideFade>
					<SlideFade as="p" className="hero-desc" delay={0.15}>
						The Landlord ($LNDLRD) is much more than a BEP-20 token. It has 3 fantastic protocols, passive income, fantastic real world utilities, and utility driven
						NFTs and much more.
					</SlideFade>
					<SlideFade as="button" delay={0.25} className="hero-btn btn btn-brand" type="button" onClick={() => toggleBuy()}>
						Buy
					</SlideFade>
					<SlideFade as="button" delay={0.35} className="hero-btn btn btn-dark ms-1" type="button" onClick={() => toggleContract()}>
						Contract
					</SlideFade>
				</section>
				<LogoLinks />
				<Image className="hero-cover" priority quality={100} layout="fill" alt="The Landlord Token" src="/img/home/hero.jpg" objectFit="cover" objectPosition="center" />
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
				</Modal.Body>
			</Modal>

			<Modal show={showContract} onHide={toggleContract} centered>
				<Modal.Header closeButton>
					<Modal.Title as="h4">Contract</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ContractModal />
				</Modal.Body>
			</Modal>
		</>
	);
};
export default Hero;
