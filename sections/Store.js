import LinkArrow from '../components/LinkArrow';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';

import 'swiper/css/navigation';

const Store = () => {
	return (
		<section className="store section">
			<div className="container">
				<div className="d-flex align-items-center section-header">
					<h2 className="section-title m-0  me-auto">Landlord Store</h2>
					<LinkArrow href="/" dir="right" className="link link-brand">
						All Products
					</LinkArrow>
				</div>
			</div>

			<div className="swiper-overflow-container">
				<Swiper
					navigation={false}
					breakpoints={{
						640: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
						1024: {
							slidesPerView: 4,
						},
						1400: {
							slidesPerView: 6,
						},
					}}
					centeredSlidesBounds={true}
					centeredSlides={true}
					modules={[Navigation]}
					spaceBetween={32}
					centerInsufficientSlides={true}
					loop={false}
					className="mySwiper"
				>
					<SwiperSlide>
						<a href="/" className="store-item">
							<figure>
								<img src="/files/img/store/01.png" />
							</figure>
							<div className="store-details">
								<span className="store-details-new">new</span>
								<h3 className="store-details-title">Sweater</h3>
								<div className="store-details-price">£20.00</div>
							</div>
						</a>
					</SwiperSlide>
					<SwiperSlide>
						<a href="/" className="store-item">
							<figure>
								<img src="/files/img/store/02.png" />
							</figure>
							<div className="store-details">
								<span className="store-details-new">new</span>
								<h3 className="store-details-title">White Cap</h3>
								<div className="store-details-price">£23.00</div>
							</div>
						</a>
					</SwiperSlide>
					<SwiperSlide>
						<a href="/" className="store-item">
							<figure>
								<img src="/files/img/store/03.png" />
							</figure>
							<div className="store-details">
								<span className="store-details-new">new</span>
								<h3 className="store-details-title">Pint Glass</h3>
								<div className="store-details-price">£18.50</div>
							</div>
						</a>
					</SwiperSlide>
					<SwiperSlide>
						<a href="/" className="store-item">
							<figure>
								<img src="/files/img/store/04.png" />
							</figure>
							<div className="store-details">
								<span className="store-details-new">new</span>
								<h3 className="store-details-title">Sweater</h3>
								<div className="store-details-price">£20.00</div>
							</div>
						</a>
					</SwiperSlide>
					<SwiperSlide>
						<a href="/" className="store-item">
							<figure>
								<img src="/files/img/store/05.png" />
							</figure>
							<div className="store-details">
								<span className="store-details-new">new</span>
								<h3 className="store-details-title">Coasters</h3>
								<div className="store-details-price">£20.00</div>
							</div>
						</a>
					</SwiperSlide>
					<SwiperSlide>
						<a href="/" className="store-item">
							<figure>
								<img src="/files/img/store/06.png" />
							</figure>
							<div className="store-details">
								<span className="store-details-new">new</span>
								<h3 className="store-details-title">White Mug</h3>
								<div className="store-details-price">£20.00</div>
							</div>
						</a>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};
export default Store;
