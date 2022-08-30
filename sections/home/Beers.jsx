import Parallax from '../../components/Parallax';
import SlideFade from '../../components/SlideFade';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
const Beers = () => {
	const t = useTranslations('home.beers');
	return (
		<section className="beers section section-brand" id="beers">
			<div className="container">
				<SlideFade className="row align-items-center">
					<div className="col-md-6 text-center text-md-start mb-5 mb-md-0">
						<Parallax className="beers-img-container" offset={-20}>
							<Image quality={100} width={404} height={352} src="/img/home/beer.png" alt={t('title')} />
						</Parallax>
					</div>
					<div className="col-md-6">
						<h2 className="section-title">{t('title')}</h2>
						<p className="section-desc mb-1">{t('desc_1')}</p>
						<p className="section-desc mb-1">{t('desc_2')}</p>
						<p className="section-desc">{t('desc_3')}</p>
					</div>
				</SlideFade>
			</div>
		</section>
	);
};
export default Beers;
