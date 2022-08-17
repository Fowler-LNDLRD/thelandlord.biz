import Link from 'next/link';
import HeadTag from '../components/HeadTag';

const Audit = () => {
	return (
		<>
			<HeadTag title={`Audit`} />
			<section className="page page-whitepaper container">
				<div className="row align-items-center my-auto text-center text-md-start">
					<div className="col-md-6 mb-5 mb-md-0">
						<h1 className="page-title">Audit</h1>
						<div className="page-desc">The Landlord Token audit performed by Dessert Finance.</div>
						<Link href="/">
							<a className="btn btn-brand">Download</a>
						</Link>
					</div>
					<div className="col-md-6 text-center">
						<img className="page-whitepaper-img" width="320" height="320" src="/img/certs/audit.png" alt="Landlord Whitepaper" />
					</div>
				</div>
			</section>
		</>
	);
};
export default Audit;
