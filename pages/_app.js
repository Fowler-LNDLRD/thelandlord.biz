import '../assets/scss/main.scss';
import Header from '../components/Header';
import Foot from '../components/Foot';
import { NextIntlProvider } from 'next-intl';

function MyApp({ Component, pageProps }) {
	return (
		<NextIntlProvider messages={pageProps.messages}>
			<Header />
			<Component {...pageProps} />
			<Foot />
		</NextIntlProvider>
	);
}

export default MyApp;
