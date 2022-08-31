import parse from 'html-react-parser';

import en from '../locales/en.json';
import roadmap from '../data/roadmap/en.json';
import faq from '../data/faq/en.json';

const Translate = () => {
	const Temp = ({ name, label, className, length }) => {
		return (
			<div className={className}>
				<div className="translate-item form-item d-flex flex-column">
					<textarea rows={length > 200 ? 7 : label.length > 150 ? 4 : label.length > 50 ? 3 : 1} data-name={name} className="form-control translate-control" />
					<label className="translate-label order-first">{label}</label>
				</div>
			</div>
		);
	};

	const LL = ({ name, className }) => {
		return Object.keys(name).map((key, i) => <Temp className={className} label={name[key]} name={key} key={i} />);
	};

	return (
		<div className="page container">
			<h1 className="page-title text-center">Translate</h1>
			<div className="page-desc page-desc-limit text-center mb-5">Help us to translate the website</div>

			<div className="row justify-content-center">
				<div className="col-md-6 ">
					<h4>common</h4>
					<div className="row g-1 mb-5">
						<LL name={en.common} className="col-6" />
					</div>

					<h4 className="mt-5">home</h4>
					<LL name={en.home.hero} className="col-12" />

					<h4 className="mt-5">tokenomics</h4>
					<LL name={en.home.tokenomics} className="col-12" />

					<h4 className="mt-5">Beers</h4>
					<LL name={en.home.beers} className="col-12" />

					<h4 className="mt-5">Pubs</h4>
					<LL name={en.home.pubs} className="col-12" />

					<h4 className="mt-5">POS</h4>
					<LL name={en.home.pos} className="col-12" />

					<h4 className="mt-5">NFT</h4>
					<LL name={en.home.nft} className="col-12" />

					<h4 className="mt-5">Earn</h4>
					<LL name={en.home.earn} className="col-12" />

					<h4 className="mt-5">Whitepaper & Audit</h4>
					<LL name={en.home.certs} className="col-12" />

					<h4 className="mt-5">Buy</h4>
					<LL name={en.buy} className="col-12" />

					<h4 className="mt-5">Listings</h4>
					<LL name={en.listings} className="col-12" />

					<h4 className="mt-5">Team</h4>
					<LL name={en.team} className="col-12" />

					<h4 className="mt-5">AMA</h4>
					<LL name={en.ama} className="col-12" />

					<h4 className="mt-5">Roadmap</h4>
					<LL name={en.roadmap} className="col-12" />

					<div>
						{roadmap.map((item, index) => (
							<div className=" mb-1" key={index}>
								<Temp label={item.phase} name={item.phase} className="mb-1" />

								{item.items.map((step, stepIndex) => (
									<Temp label={step.title} className="mb-1" key={stepIndex} />
								))}
							</div>
						))}
					</div>

					<h4 className="mt-5">FAQ</h4>
					<LL name={en.faq} className="col-12" />

					<div className="div">
						{faq.landlord.map((item, index) => (
							<Temp label={parse(item.a)} length={item.a.length} key={index} className="mb-1" />
						))}
					</div>
					<div className="div">
						{faq.general.map((item, index) => (
							<Temp label={parse(item.a)} length={item.a.length} key={index} className="mb-1" />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Translate;

export function getStaticProps({ locale }) {
	return {
		props: {
			messages: require(`../locales/${locale}.json`),
		},
	};
}
