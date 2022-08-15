import Link from 'next/link';
import Image from 'next/image';

const whitepaper = () => {
	return (
		<>
			<section className="page page-whitepaper container">
				<div className="row align-items-center my-auto">
					<div className="col-md-6">
						<h1 className="page-whitepaper-title">Whitepaper</h1>
						<div className="page-whitepaper-desc">Download the latest version of our whitepaper.</div>
						<Link href="/">
							<a className="btn btn-brand">Download</a>
						</Link>
					</div>
					<div className="col-md-6">
						<Image width="415" height="415" src="/files/img/certs/whitepaper.png" alt="Landlord Whitepaper" />
					</div>
				</div>
			</section>
		</>
	);
};
export default whitepaper;
