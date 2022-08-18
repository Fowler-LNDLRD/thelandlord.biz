import Link from 'next/link';
import HeadTag from '../components/HeadTag';
import faq from '../data/faq.json';
import Accordion from 'react-bootstrap/Accordion';
import convertHtmlToReact from '@hedgedoc/html-to-react';

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
						<Accordion defaultActiveKey="0" className="accordion-faq" flush>
							{faq.map((item, index) => (
								<Accordion.Item eventKey={index} key={index}>
									<Accordion.Header>{item.q}</Accordion.Header>
									<Accordion.Body>{convertHtmlToReact(item.a)}</Accordion.Body>
								</Accordion.Item>
							))}
						</Accordion>
					</div>
				</div>
			</section>
		</>
	);
};
export default Faq;
