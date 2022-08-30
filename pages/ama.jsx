import Link from 'next/link';
import HeadTag from '../components/HeadTag';
import ama from '../data/ama.json';
import SlideFade from '../components/SlideFade';
import { useTranslations } from 'next-intl';
const Ama = () => {
	const t = useTranslations('ama');
	return (
		<>
			<HeadTag title={`AMAs`} desc="Watch the latest Landlord Token AMAs on YouTube, we have AMA every week that you can ask any questions about the project." />
			<SlideFade as="section" className="page page-ama container">
				<h1 className="page-title text-center">{t('title')}</h1>
				<div className="page-desc text-center mb-5">{t('desc')}</div>

				<div className="row g-2">
					{ama.map((item, index) => (
						<SlideFade className="col-md-6" key={index} delay={index / 10}>
							<Link href={item.url}>
								<a className="ama-item" target="_blank" rel="noreferrer">
									<div className="ama-item-overlay" style={{ backgroundImage: `url(${item.img})` }}></div>
									<div className="ama-item-desc p-1 p-md-2">
										<div className="ama-item-title">{t('ask_me_anything')}</div>
										<div className="ama-item-date">{item.date}</div>
									</div>
									<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="ama-item-icon" viewBox="0 0 16 16">
										<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
										<path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
									</svg>
								</a>
							</Link>
						</SlideFade>
					))}
				</div>
			</SlideFade>
		</>
	);
};
export default Ama;

export function getStaticProps({ locale }) {
	return {
		props: {
			messages: require(`../locales/${locale}.json`),
		},
	};
}
