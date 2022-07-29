import '../assets/scss/main.scss';
import Nav from '../layouts/Nav';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<header className="header">
				<div className="container">
					<a href="/" className="logo">
						The Landlord
					</a>
					<Nav />
				</div>
			</header>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
