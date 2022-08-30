import Head from 'next/head';
import HeadTag from '../components/HeadTag';
import LandlordFAQ from '../sections/faq/LandlordFAQ';
import GeneralFAQ from '../sections/faq/GeneralFAQ';
import SlideFade from '../components/SlideFade';
import faqGoogle from '../data/faqGoogle.json';

const Faq = () => {
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
			<HeadTag
				title={`FAQ`}
				desc="Learn about Landlord Token, we have answered many frequently asked questions, and here you can find it. if not, join our telegram group."
			/>
			<Head>
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
			</Head>

			<SlideFade as="section" className="page page-faq container">
				<h1 className="page-title text-center">FAQ</h1>
				<div className="page-desc text-center page-desc-limit mb-5">You can find the answer to your question right here.</div>

				<div className="row align-items-center justify-content-center">
					<div className="col-md-8">
						<LandlordFAQ />
						<h4 className="mt-5 mb-2">General Crypto Questions</h4>
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
