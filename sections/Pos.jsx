import LinkArrow from '../components/LinkArrow';
import Ipad from '../components/Ipad';
import POS from '../components/POS';
import { useTranslations } from 'next-intl';
const Pos = () => {
	const t = useTranslations('pos');
	return (
		<section className="pos section">
			<div className="container">
				<h2 className="section-title text-center">{t('title')}</h2>
				<p className="section-desc text-center mb-5">{t('desc')}</p>
				<div className="pos-figure d-flex d-block d-md-none">
					<img className="pos-figure-img mt-auto" src="/files/img/pos.png" />
				</div>
				<div className="d-none d-md-block">
					<Ipad>
						<POS />
					</Ipad>
				</div>
			</div>
		</section>
	);
};
export default Pos;
