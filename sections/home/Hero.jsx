import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ContractModal from '../../components/ContractModal';
import LogoLinks from '../../components/LogoLinks';
import { initEmbr, mount, unmount, getEmbr } from '../../components/EmberScript';

const Hero = () => {
	const documentHeight = () => {
		if (window.innerHeight > 460 && window.innerHeight < 799 && window.innerWidth > 768) {
			const doc = document.getElementById('hero');
			if (doc?.style) doc.style.setProperty('--hero-height', `${window.innerHeight}px`);
		}
	};

	useEffect(() => {
		initEmbr();

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
			setShowBuy(true);
			mount({
				type: 'CheckoutEmbed',
				options: {
					checkoutId: '01GAM5ASBK0EKDJ2P4KMFE60DY',
					selector: '#checkout',
				},
			});
		}
	};

	return (
		<>
			<section className="hero" id="hero">
				<article className="container">
					<h1 className="hero-title">
						crypto <span>pubs &amp; beers</span>
					</h1>
					<p className="hero-desc">
						The Landlord ($LNDLRD) is much more than a BEP-20 token. It has 3 fantastic protocols, passive income, fantastic real world utilities, and utility driven
						NFTs and much more.
					</p>

					<button className="hero-btn btn btn-brand" type="button" onClick={toggleBuy}>
						Buy
					</button>

					<button className="hero-btn btn btn-dark ms-1" type="button" onClick={toggleContract}>
						Contract
					</button>
				</article>
				<LogoLinks />
			</section>

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
