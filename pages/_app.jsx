import '../assets/scss/main.scss';
import Header from '../components/Header';
import Foot from '../components/Foot';

import { NextIntlProvider } from 'next-intl';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

		const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
		const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
	}, []);

	return (
		<NextIntlProvider messages={pageProps.messages}>
			<Header />
			<Component {...pageProps} />
			<Foot />
		</NextIntlProvider>
	);
}

export default MyApp;
