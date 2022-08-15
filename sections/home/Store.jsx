import LinkArrow from '../../components/LinkArrow';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';

import 'swiper/css/navigation';
import Link from 'next/link';

const Store = () => {
	return (
		<section className="store section section-dark">
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
						<Link href="/">
							<a className="store-item">
								<figure>
									<img src="/files/img/store/01.png" alt="store" />
								</figure>
								<div className="store-details">
									<span className="store-details-label">Soon</span>
									<h3 className="store-details-title">Sweater</h3>
									<div className="store-details-price">£20.00</div>
								</div>
							</a>
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/">
							<a className="store-item">
								<figure>
									<img src="/files/img/store/02.png" alt="store" />
								</figure>
								<div className="store-details">
									<span className="store-details-label">new</span>
									<h3 className="store-details-title">White Cap</h3>
									<div className="store-details-price">£23.00</div>
								</div>
							</a>
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/">
							<a className="store-item">
								<figure>
									<img src="/files/img/store/03.png" alt="store" />
								</figure>
								<div className="store-details">
									<span className="store-details-label">new</span>
									<h3 className="store-details-title">Pint Glass</h3>
									<div className="store-details-price">£18.50</div>
								</div>
							</a>
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/">
							<a className="store-item">
								<figure>
									<img src="/files/img/store/04.png" alt="store" />
								</figure>
								<div className="store-details">
									<span className="store-details-label">new</span>
									<h3 className="store-details-title">Sweater</h3>
									<div className="store-details-price">£20.00</div>
								</div>
							</a>
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/">
							<a className="store-item">
								<figure>
									<img src="/files/img/store/05.png" alt="store" />
								</figure>
								<div className="store-details">
									<span className="store-details-label">new</span>
									<h3 className="store-details-title">Coasters</h3>
									<div className="store-details-price">£20.00</div>
								</div>
							</a>
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/">
							<a className="store-item">
								<figure>
									<img src="/files/img/store/06.png" alt="store" />
								</figure>
								<div className="store-details">
									<span className="store-details-label">new</span>
									<h3 className="store-details-title">White Mug</h3>
									<div className="store-details-price">£20.00</div>
								</div>
							</a>
						</Link>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};
export default Store;
