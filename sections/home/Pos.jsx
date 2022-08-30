import Ipad from '../../components/Ipad';
import POS from '../../components/POS';
import SlideFade from '../../components/SlideFade';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
const Pos = () => {
	const t = useTranslations('home.pos');
	return (
		<section className="pos section section-dark" id="pos">
			<SlideFade className="container px-3 px-md-2">
				<h2 className="section-title text-start text-md-center">{t('title')}</h2>
				<p className="section-desc text-start text-md-center mb-3 mb-md-4">
					{t('desc')} <span className="d-none d-md-inline-block">{t('demo')}</span>
				</p>
				<SlideFade delay={0.25}>
					<div className="pos-figure d-flex d-block d-md-none">
						<Image quality={100} width={768} height={477} className="pos-figure-img mt-auto" src="/img/home/pos.png" alt={t('title')} />
					</div>
					<div className="d-none d-md-block">
						<Ipad>
							<POS />
						</Ipad>
					</div>
				</SlideFade>
			</SlideFade>
		</section>
	);
};
export default Pos;
