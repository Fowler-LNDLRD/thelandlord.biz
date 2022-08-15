import '../assets/scss/main.scss';
import Header from '../components/Header';
import Foot from '../components/Foot';

import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

		const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
		const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
	}, []);

	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Foot />
		</>
	);
}

export default MyApp;
