import Link from 'next/link';
import HeadTag from '../components/HeadTag';

const Faq = () => {
	return (
		<>
			<HeadTag title={`FAQ`} />
			<section className="page page-faq container">
				<h1 className="page-title">FAQ</h1>
				<div className="page-desc"></div>
			</section>
		</>
	);
};
export default Faq;
