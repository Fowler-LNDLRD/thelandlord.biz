import Link from 'next/link';
import LinkArrow from '../../components/LinkArrow';
import Book from '../../components/Book';

const Certs = () => {
	return (
		<section className="certs section section-dark" id="whitepaper">
			<div className="container">
				<div className="row g-5">
					<div className="col-md-6 d-flex justify-content-center  justify-content-md-start">
						<div className="cert-item d-md-block d-lg-flex g-0 align-items-center">
							<Book className="book-whitepaper" />
							<div className="certs-info ms-md-0 ms-lg-2 mt-3 mt-lg-0">
								<h2 className="certs-title">Whitepaper</h2>
								<div className="certs-desc d-none d-md-block">The latest version.</div>
								<LinkArrow className="link-brand" href="/" dir="right">
									Download
								</LinkArrow>
							</div>
						</div>
					</div>
					<div className="col-md-6 d-flex justify-content-center  justify-content-md-start">
						<div className="cert-item d-md-block d-lg-flex g-0 align-items-center">
							<Book className="book-audit" />
							<div className="certs-info ms-md-0 ms-lg-2 mt-3 mt-lg-0">
								<h2 className="certs-title">Audit</h2>
								<div className="certs-desc d-none d-md-block">Performed by Desert Finance.</div>
								<LinkArrow className="link-brand" href="/" dir="right">
									Download
								</LinkArrow>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Certs;
