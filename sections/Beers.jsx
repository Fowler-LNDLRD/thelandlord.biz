import LinkArrow from '../components/LinkArrow';
import { useTranslations } from 'next-intl';
const Beers = () => {
	const t = useTranslations('beers');
	return (
		<section className="beers section section-brand">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6 text-center text-md-start mb-5 mb-md-0">
						<img className="beers-img" src="/files/img/beers/beer.png" />
					</div>
					<div className="col-md-6 ps-0 ps-md-2 text-center text-md-start">
						<h2 className="section-title">{t('title')}</h2>

						<p className="section-desc mb-1">{t('desc-1')}</p>
						<p className="section-desc mb-1">{t('desc-2')}</p>
						<p className="section-desc mb-1">{t('desc-3')}</p>

						<LinkArrow href="/" dir="right" className="link link-dark">
							{t('link')}
						</LinkArrow>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Beers;
