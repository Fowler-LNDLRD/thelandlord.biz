import LinkArrow from '../../components/LinkArrow';
import Book from '../../components/Book';
import SlideFade from '../../components/SlideFade';
import Image from 'next/image';

const Certs = () => {
	return (
		<section className="certs section section-dark" id="whitepaper">
			<div className="container">
				<div className="row">
					<SlideFade className="col-md-6 d-flex justify-content-center justify-content-md-start mb-5 mb-md-0">
						<div className="cert-item d-md-block d-lg-flex align-items-center">
							<Book className="book-whitepaper">
								<Image
									alt="Landlord Token"
									src="/img/home/whitepaper-cover.jpg"
									width={200}
									height={283}
									objectFit="cover"
									quality={100}
									className="floating-img"
								/>
							</Book>
							<div className="certs-info ms-md-0 ms-lg-2 mt-3 mt-lg-0">
								<h2 className="certs-title">Whitepaper</h2>
								<div className="certs-desc d-none d-md-block">The latest version.</div>
								<LinkArrow className="link-brand" href={process.env.WHITEPAPER} dir="right">
									Download
								</LinkArrow>
							</div>
						</div>
					</SlideFade>
					<SlideFade delay={0.25} className="col-md-6 d-flex justify-content-center justify-content-md-start">
						<div className="cert-item d-md-block d-lg-flex ps-md-1 align-items-center">
							<Book className="book-audit">
								<Image alt="Landlord Token" src="/img/home/audit-cover.jpg" width={200} height={264} objectFit="cover" quality={100} className="floating-img" />
							</Book>
							<div className="certs-info ms-md-0 ms-lg-2 mt-3 mt-lg-0">
								<h2 className="certs-title">Audit</h2>
								<div className="certs-desc d-none d-md-block">Performed by Desert Finance.</div>
								<LinkArrow className="link-brand" href={process.env.AUDIT} dir="right">
									Download
								</LinkArrow>
							</div>
						</div>
					</SlideFade>
				</div>
			</div>
		</section>
	);
};
export default Certs;
