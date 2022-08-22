import { useRouter } from 'next/router';
import Head from 'next/head';

const HeadTag = ({ title, desc, img }) => {
	const router = useRouter();

	const pageTitle = title + ' - ' + process.env.WEBSITE_TITLE;
	const pageDesc = desc || process.env.WEBSITE_DESCRIPTION;
	const pageImage = img || process.env.WEBSITE_IMAGE;
	const pageUrl = process.env.WEBSITE_URL + router.pathname;

	return (
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
		</Head>
	);
};
export default HeadTag;
