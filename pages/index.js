import Head from 'next/head';
import Hero from '../sections/Hero';
import Protocols from '../sections/Protocols';
import Pubs from '../sections/Pubs';

export default function Home() {
	return (
		<>
			<Head>
				<title>The Landlord Token</title>
			</Head>

			<Hero />
			<Protocols />
			<Pubs />
		</>
	);
}
