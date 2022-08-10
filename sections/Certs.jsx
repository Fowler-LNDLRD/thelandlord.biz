const Certs = () => {
	return (
		<section className="certs section section-dark">
			<div className="container">
				<div className="row">
					<div className="col-6">
						<div className="certs-item">
							<img src="/files/img/certs/whitepaper.png" alt="Landlord Whitepaper" />
							<h2>Whitepaper</h2>
							<a href="/" className="btn btn-warning">
								Open Whitepaper
							</a>
						</div>
					</div>
					<div className="col-6">
						<div className="certs-item">
							<img src="/files/img/certs/audit.png" alt="Landlord Audit" />
							<h2>Audit</h2>
							<a href="/" className="btn btn-warning">
								Open Audit
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Certs;
