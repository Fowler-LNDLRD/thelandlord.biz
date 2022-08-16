import Link from 'next/link';
import HeadTag from '../components/HeadTag';
import faq from '../data/faq.json';
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
						<div className="accordion accordion-flush accordion-faq" id="accordionFAQ">
							{faq.map((item, index) => (
								<div className="accordion-item" key={index}>
									<h2 className="accordion-header" id={`accordion_heading_${index}`}>
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target={`#accordionFAQ-collapse_${index}`}
											aria-expanded="false"
											aria-controls={`accordionFAQ-collapse_${index}`}
										>
											{item.q}
										</button>
									</h2>
									<div
										id={`accordionFAQ-collapse_${index}`}
										className="accordion-collapse collapse"
										aria-labelledby={`accordion_heading_${index}`}
										data-bs-parent="#accordionFAQ"
									>
										<div className="accordion-body ps-2 pb-2 pt-0">{item.a}</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Faq;
