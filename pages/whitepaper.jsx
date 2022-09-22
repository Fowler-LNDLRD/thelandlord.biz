import HeadTag from '../components/HeadTag';
import SlideFade from '../components/SlideFade';
import Certs from '../sections/home/Certs';

const Whitepaper = () => {
	return (
		<>
			<HeadTag title="Whitepaper" />
			<SlideFade as="section" className="page container">
				<Certs />
			</SlideFade>
		</>
	);
};
export default Whitepaper;
