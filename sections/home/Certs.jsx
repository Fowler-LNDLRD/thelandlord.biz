import Link from 'next/link';
import LinkArrow from '../../components/LinkArrow';
import Book from '../../components/Book';

const Certs = () => {
	return (
		<section className="certs section section-dark">
			<div className="container">
				<div className="row">
					<div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
						<Book className="book-whitepaper" />
						<div className="certs-item mb-4 mb-md-0 mt-5">
							<h2 className="certs-title">Whitepaper</h2>
							<div className="certs-desc">The latest version of our whitepaper.</div>
							<LinkArrow className="link-brand" href="/" dir="right">
								Download
							</LinkArrow>
						</div>
					</div>
					<div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
						<Book className="book-audit" />
						<div className="certs-item mb-4 mb-md-0 mt-5">
							<h2 className="certs-title">Audit</h2>
							<div className="certs-desc">Performed by Desert Finance</div>
							<LinkArrow className="link-brand" href="/" dir="right">
								Download
							</LinkArrow>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Certs;
