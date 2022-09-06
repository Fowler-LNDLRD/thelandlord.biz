import Link from 'next/link';
import HeadTag from '../components/HeadTag';
import SlideFade from '../components/SlideFade';
import { useTranslations } from 'next-intl';

import Certs from '../sections/home/Certs';

const Whitepaper = () => {
	const tc = useTranslations('common');

	return (
		<>
			<HeadTag title={tc('whitepaper')} />
			<SlideFade as="section" className="page container">
				<Certs />
			</SlideFade>
		</>
	);
};
export default Whitepaper;

export function getStaticProps({ locale }) {
	return {
		props: {
			messages: require(`../locales/${locale}.json`),
		},
	};
}
