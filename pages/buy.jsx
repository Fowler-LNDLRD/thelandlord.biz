import Link from 'next/link';
import HeadTag from '../components/HeadTag';

const Buy = () => {
	return (
		<>
			<HeadTag title={`Buy`} />
			<section className="page page-buy container">
				<h1 className="page-title">Buy</h1>
				<div className="page-desc"></div>
			</section>
		</>
	);
};
export default Buy;
