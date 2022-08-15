import Link from 'next/link';
import HeadTag from '../components/HeadTag';

const Roadmap = () => {
	return (
		<>
			<HeadTag title={`Roadmap`} />
			<section className="page page-roadmap container">
				<h1 className="page-title">Roadmap</h1>
				<div className="page-desc"></div>
			</section>
		</>
	);
};
export default Roadmap;
