import Head from 'next/head';
import HeadTag from '../components/HeadTag';
import SlideFade from '../components/SlideFade';
import faqGoogle from '../data/faqGoogle.json';
import { useTranslations } from 'next-intl';
import Accordion from 'react-bootstrap/Accordion';
import { useRouter } from 'next/router';
import { en, de } from '../data/faq/';
import parse from 'html-react-parser';

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

	const router = useRouter();
	const { locale } = router;
	const faq = locale === 'en' ? en : locale === 'de' ? de : [];

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
						<Accordion defaultActiveKey="0" className="accordion-faq" flush>
							{faq.landlord.map((item, index) => (
								<Accordion.Item key={index} eventKey={index}>
									<Accordion.Header>{item.q}</Accordion.Header>
									<Accordion.Body>
										<div>{parse(item.a)}</div>
									</Accordion.Body>
								</Accordion.Item>
							))}
						</Accordion>
						<h4 className="mt-5 mb-2">{t('general_questions')}</h4>
						<Accordion defaultActiveKey="0" className="accordion-faq" flush>
							{faq.general.map((item, index) => (
								<Accordion.Item key={index} eventKey={index}>
									<Accordion.Header>{item.q}</Accordion.Header>
									<Accordion.Body>
										<div>{parse(item.a)}</div>
									</Accordion.Body>
								</Accordion.Item>
							))}
						</Accordion>
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
