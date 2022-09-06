import HeadTag from '../components/HeadTag';

const NotFound = () => {
	return (
		<>
			<HeadTag title={`Page Not Found`} desc="We can't find the page you are looking for, either we moved this page or didn't exist at all." />

			<div className="page">
				<div className="container text-center">
					<h1 className="page-title">Page Not Found!</h1>
					<p className="page-desc page-desc-limit">We can not find the page you are looking for, either we moved this page or did not exist at all.</p>
				</div>
			</div>
		</>
	);
};
export default NotFound;

export function getStaticProps({ locale }) {
	return {
		props: {
			messages: require(`../locales/${locale}.json`),
		},
	};
}
