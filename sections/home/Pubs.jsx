import Parallax from '../../components/Parallax';
import SlideFade from '../../components/SlideFade';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
const Pubs = () => {
	const t = useTranslations('home.pubs');
	return (
		<section className="pubs section" id="pubs">
			<div className="container">
				<div className="row align-items-center">
					<SlideFade className="col-md-5 mb-3 mb-md-0">
						<h2 className="section-title">{t('title')}</h2>
						<p className="section-desc">{t('desc_1')}</p>
						<p className="section-desc">{t('desc_2')}</p>
						<p className="section-desc mb-0">{t('desc_3')}</p>
					</SlideFade>

					<SlideFade y={0} className="col-md-7 text-center text-md-end pubs-img-container">
						<Image quality={100} width={550} height={531} src="/img/home/pub.png" alt={t('title')} />
					</SlideFade>
				</div>

				<Parallax offset={30} className="floating floating-03" ariaHidden="true">
					<Image alt={t('title')} src="/img/home/floating-03.png" width={160} height={160} objectFit="contain" quality={100} className="floating-img" />
				</Parallax>
				<Parallax offset={30} className="floating floating-04" ariaHidden="true">
					<Image alt={t('title')} src="/img/home/floating-04.png" width={160} height={160} objectFit="contain" quality={100} className="floating-img" />
				</Parallax>
			</div>
		</section>
	);
};
export default Pubs;
