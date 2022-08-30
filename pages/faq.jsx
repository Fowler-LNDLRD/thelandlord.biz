import Head from 'next/head';
import HeadTag from '../components/HeadTag';
import LandlordFAQ from '../sections/faq/LandlordFAQ';
import GeneralFAQ from '../sections/faq/GeneralFAQ';
import SlideFade from '../components/SlideFade';
import faqGoogle from '../data/faqGoogle.json';
import { useTranslations } from 'next-intl';

const Faq = () => {
	const t = useTranslations('faq');
	const faqEntity = faqGoogle.map((item) => {
		return {
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.a,
			},
		};
	});
	const faqData = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqEntity,
	};

	return (
		<>
			<HeadTag title={t('title')} desc={t('desc')} />
			<Head>
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
			</Head>

			<SlideFade as="section" className="page page-faq container">
				<h1 className="page-title text-center">{t('title')}</h1>
				<div className="page-desc text-center page-desc-limit mb-5">{t('desc')}</div>

				<div className="row align-items-center justify-content-center">
					<div className="col-md-8">
						<LandlordFAQ />
						<h4 className="mt-5 mb-2">{t('general_questions')}</h4>
						<GeneralFAQ />
					</div>
				</div>
			</SlideFade>
		</>
	);
};
export default Faq;

export function getStaticProps({ locale }) {
	return {
		props: {
			messages: require(`../locales/${locale}.json`),
		},
	};
}
