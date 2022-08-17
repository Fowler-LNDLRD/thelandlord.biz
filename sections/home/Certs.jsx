import Link from 'next/link';
import LinkArrow from '../../components/LinkArrow';

const Certs = () => {
	return (
		<section className="certs section">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="certs-item">
							<img className="certs-img" src="/files/img/certs/whitepaper.png" alt="Landlord Whitepaper" />
							<h2 className="certs-title">Whitepaper</h2>
							<div className="certs-desc">The latest version of our whitepaper.</div>
							<LinkArrow className="link-brand" href="/" dir="right">
								Download
							</LinkArrow>
						</div>
					</div>
					<div className="col-md-6">
						<div className="certs-item">
							<img className="certs-img" src="/files/img/certs/audit.png" alt="Landlord Audit" />
							<h2 className="certs-title">Audit</h2>
							<div className="certs-desc">Performed by Dessert Finance.</div>
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
