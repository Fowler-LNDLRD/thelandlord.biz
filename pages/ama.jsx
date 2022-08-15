import Link from 'next/link';
import HeadTag from '../components/HeadTag';

const Ama = () => {
	return (
		<>
			<HeadTag title={`AMAs`} />
			<section className="page page-ama container">
				<h1 className="page-title">AMAs</h1>
				<div className="page-desc"></div>
			</section>
		</>
	);
};
export default Ama;
