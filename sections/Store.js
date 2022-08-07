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
					<LinkArrow href="/" dir="right" className="link link-brand">
						All Products
					</LinkArrow>
				</div>
			</div>

			<div className="swiper-overflow-container">
				<div className="container">
					<Swiper navigation={false} slidesPerView={3} centeredSlides={false} modules={[Navigation]} spaceBetween={32} loop={false} className="mySwiper">
						<SwiperSlide className="store-item">
							<figure>
								<img src="/files/img/store/01.png" />
							</figure>
							<div className="store-details">
								<span className="store-details-new">new</span>
								<h3 className="store-details-title">Unisex Hoodie</h3>
								<div className="store-details-price">£20.00</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="store-item">
							<figure>
								<img src="/files/img/store/02.png" />
							</figure>
							<div className="store-details">
								<span className="store-details-new">new</span>
								<h3 className="store-details-title">Pint Glass</h3>
								<div className="store-details-price">£20.00</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="store-item">
							<figure>
								<img src="/files/img/store/03.png" />
							</figure>
							<div className="store-details">
								<span className="store-details-new">new</span>
								<h3 className="store-details-title">HODL Baseball Cap</h3>
								<div className="store-details-price">£20.00</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="store-item">
							<figure>
								<img src="/files/img/store/04.png" />
							</figure>
							<div className="store-details">
								<span className="store-details-new">new</span>
								<h3 className="store-details-title">Unisex Hoodie</h3>
								<div className="store-details-price">£20.00</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="store-item">
							<figure>
								<img src="/files/img/store/05.png" />
							</figure>
							<div className="store-details">
								<span className="store-details-new">new</span>
								<h3 className="store-details-title">Pint Glass</h3>
								<div className="store-details-price">£20.00</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
};
export default Store;
