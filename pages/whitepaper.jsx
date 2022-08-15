import Link from 'next/link';
import HeadTag from '../components/HeadTag';

const whitepaper = () => {
	return (
		<>
			<HeadTag title={`Whitepaper`} />
			<section className="page page-whitepaper container">
				<div className="row align-items-center my-auto text-center text-md-start">
					<div className="col-md-6 mb-5 mb-md-0">
						<h1 className="page-whitepaper-title">Whitepaper</h1>
						<div className="page-whitepaper-desc">Download the latest version of our whitepaper.</div>
						<Link href="/">
							<a className="btn btn-brand">Download</a>
						</Link>
					</div>
					<div className="col-md-6 text-center">
						<img className="page-whitepaper-img" width="320" height="320" src="/files/img/certs/whitepaper.png" alt="Landlord Whitepaper" />
					</div>
				</div>
			</section>
		</>
	);
};
export default whitepaper;
