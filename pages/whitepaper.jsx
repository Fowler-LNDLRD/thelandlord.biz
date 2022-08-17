import Link from 'next/link';
import HeadTag from '../components/HeadTag';

const Whitepaper = () => {
	return (
		<>
			<HeadTag title={`Whitepaper`} />
			<section className="page page-whitepaper container">
				<div className="row align-items-center my-auto text-center text-md-start">
					<div className="col-md-6 mb-5 mb-md-0">
						<h1 className="page-title">Whitepaper</h1>
						<div className="page-desc">Download the latest version of our whitepaper.</div>
						<Link href="/">
							<a className="btn btn-brand">Download</a>
						</Link>
					</div>
					<div className="col-md-6 text-center">
						<img className="page-whitepaper-img" width="320" height="320" src="/img/certs/whitepaper.png" alt="Landlord Whitepaper" />
					</div>
				</div>
			</section>
		</>
	);
};
export default Whitepaper;
