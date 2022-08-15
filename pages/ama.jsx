import Link from 'next/link';
import HeadTag from '../components/HeadTag';
import dynamic from 'next/dynamic';

import ama from '../data/ama';

const Ama = () => {
	const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false });

	return (
		<>
			<HeadTag title={`AMAs`} />
			<section className="page page-ama container">
				<h1 className="page-title text-center">AMAs</h1>
				<div className="page-desc text-center mb-5">Watch our latest AMAs on our YouTube</div>

				<div className="row g-2">
					{ama.map((item, index) => (
						<div className="col-md-6" key={index}>
							<Link href={item.url}>
								<a className="ama-item">
									<span>{item.title}</span>
								</a>
							</Link>
						</div>
					))}
				</div>
			</section>
		</>
	);
};
export default Ama;
