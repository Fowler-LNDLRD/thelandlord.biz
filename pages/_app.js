import '../assets/scss/main.scss';
import Header from '../components/Header';
import Foot from '../components/Foot';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Foot />
		</>
	);
}

export default MyApp;
