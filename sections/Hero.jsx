import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import ContractModal from '../components/ContractModal';

const Hero = () => {
	const t = useTranslations('hero');
	const tc = useTranslations('common');
	const documentHeight = () => {
		if (window.innerHeight > 460 && window.innerHeight < 799 && window.innerWidth > 768) {
			const doc = document.getElementById('hero');
			doc.style.setProperty('--hero-height', `${window.innerHeight}px`);
		}
	};

	useEffect(() => {
		documentHeight();
		window.addEventListener('resize', documentHeight);
	}, []);

	return (
		<>
			<section className="hero" id="hero">
				<article className="container">
					<h1 className="hero-title">
						{t.rich('title', {
							span: (children) => <span>{children}</span>,
						})}
					</h1>

					<p className="hero-desc">{t('desc')}</p>
					<a className="hero-btn btn btn-brand" href="/">
						{tc('howToBuy')}
					</a>

					<button className="hero-btn btn btn-dark ms-1" type="button" data-bs-toggle="modal" data-bs-target="#contractModal">
						{tc('contract')}
					</button>
				</article>
				<div className="container hero-coin">
					<img className="hero-coin-img" src="/files/img/coin.png" alt="Landlord Token - $LNDLRD" />
				</div>
			</section>
			<ContractModal />
		</>
	);
};
export default Hero;
