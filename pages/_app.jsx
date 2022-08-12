import '../assets/scss/main.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		require('bootstrap/dist/js/bootstrap.bundle.min.js');
	}, []);

	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
