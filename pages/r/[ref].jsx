import HeadTag from '../../components/HeadTag';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';

const Page = ({ data }) => {
	const router = useRouter();

	const img = data.img ? 'https://earn.thelandlord.biz/files/cards/' + data.img : false;
	const pageTitle = data.title || process.env.WEBSITE_TITLE;
	const pageDesc = data.desc || process.env.WEBSITE_DESCRIPTION;
	const pageImage = img || process.env.WEBSITE_IMAGE;
	const pageUrl = process.env.WEBSITE_URL + router.asPath;

	useEffect(() => {
		if (data.url) {
			router.push(data.url);
		} else {
			router.push('/');
		}
	}, [data, router]);

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
			</Head>
			<div as="section" className="page page-ama container" style={{ zIndex: -2 }}>
				<h1 className="page-title text-center">{data.title}</h1>
				<div className="page-desc text-center mb-5">{data.desc}</div>
			</div>

			<div className="bg-dark position-fixed w-100 h-100 start-0 top-0 d-flex" style={{ zIndex: -1 }}>
				<div className="m-auto pb-3">
					<div className="spinner-border text-brand" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			</div>
		</>
	);
};

// This gets called on every request
export async function getServerSideProps(context) {
	let data = {};

	if (context.params.ref) {
		try {
			const resp = await axios.get(`http://localhost:5000/api/general/card/${context?.params?.ref}`);
			data = await resp.data;
		} catch (e) {
			// console.log(e);
		}
	}

	return { props: { data } };
}

export default Page;
