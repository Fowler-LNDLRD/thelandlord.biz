import HeadTag from '../components/HeadTag';
import LandlordFAQ from '../sections/faq/LandlordFAQ';
import GeneralFAQ from '../sections/faq/GeneralFAQ';
import SlideFade from '../components/SlideFade';

const Faq = () => {
	return (
		<>
			<HeadTag
				title={`FAQ`}
				desc="Learn about Landlord Token, we have answered many frequently asked questions, and here you can find it. if not, join our telegram group."
			/>
			<SlideFade as="section" className="page page-faq container">
				<h1 className="page-title text-center">FAQ</h1>
				<div className="page-desc text-center page-desc-limit mb-5">You can find the answer to your question right here.</div>

				<div className="row align-items-center justify-content-center">
					<div className="col-md-8">
						<LandlordFAQ />
						<h4 className="mt-5 mb-2">General Crypto Questions</h4>
						<GeneralFAQ />
					</div>
				</div>
			</SlideFade>
		</>
	);
};
export default Faq;
