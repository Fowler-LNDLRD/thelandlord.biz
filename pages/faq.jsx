import HeadTag from '../components/HeadTag';
import LandlordFAQ from '../sections/faq/LandlordFAQ';
import GeneralFAQ from '../sections/faq/GeneralFAQ';

const Faq = () => {
	return (
		<>
			<HeadTag title={`FAQ`} />
			<section className="page page-faq container">
				<h1 className="page-title text-center">FAQ</h1>
				<div className="page-desc text-center page-desc-limit mb-5">
					You can find the answer to your question right here, <br /> if not, join our telegram group.
				</div>

				<div className="row align-items-center justify-content-center">
					<div className="col-md-8">
						<LandlordFAQ />
						<h4 className="mt-5 mb-2">General Crypto Questions</h4>
						<GeneralFAQ />
					</div>
				</div>
			</section>
		</>
	);
};
export default Faq;
