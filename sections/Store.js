import LinkArrow from '../components/LinkArrow';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';

import 'swiper/css/navigation';

const Store = () => {
	return (
		<section className="store section">
			<div className="container">
				<div className="d-flex align-items-center mb-5">
					<h2 className="section-title m-0  me-auto">Landlord Store</h2>
					<LinkArrow href="/" dir="right" className="link link-info">
						All Products
					</LinkArrow>
				</div>
			</div>

			<div className="swiper-overflow-container">
				<div className="container">
					<Swiper navigation={true} slidesPerView={3} centeredSlides={false} modules={[Navigation]} spaceBetween={32} loop={false} className="mySwiper">
						<SwiperSlide>
							<div className="store-slider" style={{ backgroundImage: 'url(/files/img/store/01.jpg)' }}>
								{/* <h4>Landlord Short-sleeve unisex</h4> */}
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="store-slider" style={{ backgroundImage: 'url(/files/img/store/02.jpg)' }}>
								{/* <h4>Landlord Short-sleeve unisex</h4> */}
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="store-slider" style={{ backgroundImage: 'url(/files/img/store/03.jpg)' }}>
								{/* <h4>Landlord Short-sleeve unisex</h4> */}
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="store-slider" style={{ backgroundImage: 'url(/files/img/store/04.jpg)' }}>
								{/* <h4>Landlord Short-sleeve unisex</h4> */}
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="store-slider" style={{ backgroundImage: 'url(/files/img/store/02.jpg)' }}>
								{/* <h4>Landlord Short-sleeve unisex</h4> */}
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="store-slider" style={{ backgroundImage: 'url(/files/img/store/03.jpg)' }}>
								{/* <h4>Landlord Short-sleeve unisex</h4> */}
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="store-slider" style={{ backgroundImage: 'url(/files/img/store/04.jpg)' }}>
								{/* <h4>Landlord Short-sleeve unisex</h4> */}
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
};
export default Store;
