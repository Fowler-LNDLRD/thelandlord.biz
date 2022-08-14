import Head from 'next/head';
import Beers from '../sections/home/Beers';
import Hero from '../sections/home/Hero';
import Tokenomics from '../sections/home/Tokenomics';
import Pubs from '../sections/home/Pubs';
import Pos from '../sections/home/Pos';
import Shill from '../sections/home/Shill';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
	return (
		<>
			<Head>
				<title>The Landlord Token</title>
			</Head>
			<Hero />
			<Tokenomics />
			<Beers />
			<Pubs />
			<Pos />
			<Shill />
		</>
	);
}
