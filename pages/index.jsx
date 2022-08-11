import Head from 'next/head';
import Beers from '../sections/Beers';
import Hero from '../sections/Hero';
import Tokenomics from '../sections/Tokenomics';
import Pubs from '../sections/Pubs';
import Pos from '../sections/Pos';
import Shill from '../sections/Shill';
import Store from '../sections/Store';
import Certs from '../sections/Certs';

export default function Home() {
	return (
		<>
			<Head>
				<title>The Landlord Token</title>
			</Head>
			<Hero />
			<Tokenomics />
			<Beers />
			{/* <Pubs />
			<Pos />
			<Store />
			<Shill /> */}
			{/* <Certs /> */}
		</>
	);
}
