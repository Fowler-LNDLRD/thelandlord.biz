import Head from 'next/head';
import Beers from '../sections/Beers';
import Hero from '../sections/Hero';
import Protocols from '../sections/Protocols';
import Pubs from '../sections/Pubs';
import Shill from '../sections/Shill';
import Store from '../sections/Store';

export default function Home() {
	return (
		<>
			<Head>
				<title>The Landlord Token</title>
			</Head>

			<Hero />
			<Protocols />
			<Pubs />
			<Beers />
			{/* <Store />
			<Shill /> */}
		</>
	);
}
