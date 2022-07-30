import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';

const Beers = () => {
	return (
		<section className="beers">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-6">
						<Swiper slidesPerView={1} spaceBetween={30} loop={true} className="mySwiper">
							<SwiperSlide>
								<img className="beers-slide-img" src="/files/img/beers/beer1.png" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="beers-slide-img" src="/files/img/beers/beer2.png" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="beers-slide-img" src="/files/img/beers/beer3.png" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="beers-slide-img" src="/files/img/beers/beer1.png" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="beers-slide-img" src="/files/img/beers/beer2.png" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="beers-slide-img" src="/files/img/beers/beer3.png" />
							</SwiperSlide>
						</Swiper>
					</div>
					<div className="col-6">
						<h2 className="beers-title">Landlord Beers</h2>
						<p className="beers-desc">
							We will create and sell some of the finest craft beers and ales. These will be available to purchase from the Online store with fiat or the crypto of
							your choice. Profits will be used to buy back and burn LNDLRD.
						</p>
						<div className="beers-btns">
							<a href="/">
								About Landlord Beers
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
									<path
										fillRule="evenodd"
										d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Beers;
