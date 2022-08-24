import { Swiper, SwiperSlide } from 'swiper/react';
import HeadTag from '../components/HeadTag';
import roadmap from '../data/roadmap.json';
import SlideFade from '../components/SlideFade';

const Roadmap = () => {
	return (
		<>
			<HeadTag title={`Roadmap`} desc="Take a look at The Landlord Token roadmap to see what we have been working on and what we have planned for the future." />
			<section as="section" className="page page-roadmap">
				<SlideFade className="container text-center">
					<h1 className="page-title">Roadmap</h1>
					<div className="page-desc page-desc-limit  mb-5">
						It is important that we outline a paved direction for the project and what we plan to do. This is so our token holders can use this as a yard stick to
						measure our performance to help reassure them that not only is the project alive, but it is delivering on committed work.
					</div>
				</SlideFade>
				<SlideFade delay={0.1}>
					<Swiper
						slidesPerView={1.15}
						breakpoints={{
							460: {
								slidesPerView: 1.5,
							},
							700: {
								slidesPerView: 2.15,
							},
							800: {
								slidesPerView: 3.5,
							},
							1100: {
								slidesPerView: 4,
							},
							1400: {
								slidesPerView: 5,
							},
							1600: {
								slidesPerView: 6,
							},
							1800: {
								slidesPerView: 8,
							},
						}}
						initialSlide={2}
						centeredSlides={true}
						centerInsufficientSlides={true}
						spaceBetween={32}
						className="roadmap-swiper px-2"
					>
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
				</SlideFade>
			</section>
		</>
	);
};
export default Roadmap;
