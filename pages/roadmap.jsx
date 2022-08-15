import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Link from 'next/link';
import HeadTag from '../components/HeadTag';

import roadmap from '../data/roadmap';

const Roadmap = () => {
	return (
		<>
			<HeadTag title={`Roadmap`} />
			<section className="page page-roadmap">
				<div className="container text-center">
					<h1 className="page-title">Roadmap</h1>
					<div className="page-desc page-desc-limit  mb-5">
						It is important that we outline a paved direction for the project and what we plan to do. This is so our token holders can use this as a yard stick to
						measure our performance to help reassure them that not only is the project alive, but it is delivering on committed work.
					</div>
				</div>
				<Swiper slidesPerView={3} spaceBetween={32} className="roadmap-swiper px-2">
					{roadmap.map((item, index) => (
						<SwiperSlide key={index}>
							<div className={`roadmap-item ` + item.status}>
								<h3 className="roadmap-item-title">{item.phase}</h3>
								<ul className="roadmap-item-list">
									{item.items.map((step, stepIndex) => (
										<li key={stepIndex} className={step.status}>
											{step.title}
										</li>
									))}
								</ul>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</>
	);
};
export default Roadmap;
