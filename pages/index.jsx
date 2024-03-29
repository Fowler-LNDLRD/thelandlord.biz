import Head from 'next/head';
import Beers from '../sections/home/Beers';
import Hero from '../sections/home/Hero';
import Tokenomics from '../sections/home/Tokenomics';
import Pubs from '../sections/home/Pubs';
import Pos from '../sections/home/Pos';
import Earn from '../sections/home/Earn';
import Certs from '../sections/home/Certs';
import Info from '../sections/home/Info';
import Nft from '../sections/home/Nft';



export default function Home() {
	const pageTitle = process.env.WEBSITE_TITLE + ' - ' + process.env.WEBSITE_SLOGAN;
	const pageDesc = process.env.WEBSITE_DESCRIPTION;
	const pageImage = process.env.WEBSITE_IMAGE;
	const pageUrl = process.env.WEBSITE_URL;

	const jsonLD = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		url: process.env.WEBSITE_URL,
		logo: process.env.WEBSITE_URL + '/img/meta/google-logo.png',
	};

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={pageDesc} />
				<link rel="canonical" href={pageUrl} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@Landlord_Token" />
				<meta property="og:title" content={pageTitle} />
				<meta property="og:description" content={pageDesc} />
				<meta property="og:image" content={pageImage} />
				<meta property="og:url" content={pageUrl} />
				<meta property="og:type" content="website" />

				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }} />
			</Head>
			<Hero />
			<Info />
			<Tokenomics />
			<Beers />
			<Pubs />
			<Pos />
			<Nft />
			<Earn />
			<Certs />
			</>
	);
}
