import LinkArrow from '../components/LinkArrow';
import { useTranslations } from 'next-intl';
const Pubs = () => {
	const t = useTranslations('pubs');
	return (
		<section className="pubs section section-dark">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6 text-center text-md-start pe-0 pe-md-3 mb-3 mb-md-0">
						<h2 className="section-title">{t('title')}</h2>

						<p className="section-desc">{t('desc-1')}</p>
						<p className="section-desc">{t('desc-2')}</p>
						<p className="section-desc mb-0">{t('desc-3')}</p>

						{/* <LinkArrow href="/" dir="right" className="link link-brand">
							About Landlord Pubs
						</LinkArrow> */}
					</div>

					<div className="col-md-6 text-center text-md-end">
						<img className="pubs-img" src="/files/img/coaster.png" />
					</div>
				</div>
			</div>
		</section>
	);
};
export default Pubs;
