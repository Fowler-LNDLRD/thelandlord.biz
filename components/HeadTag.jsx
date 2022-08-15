import Head from 'next/head';

const HeadTag = ({ title }) => {
	return (
		<Head>
			<title>{title + ' - The Landlord Token'}</title>
		</Head>
	);
};
export default HeadTag;
