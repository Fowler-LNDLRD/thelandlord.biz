import HeadTag from '../components/HeadTag';

const ServerError = () => {
	return (
		<>
			<HeadTag title={`Server Error`} />

			<div className="page">
				<div className="container text-center">
					<h1 className="page-title">500</h1>
					<p className="page-desc">Server error!</p>
				</div>
			</div>
		</>
	);
};
export default ServerError;
