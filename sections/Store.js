import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

const Store = () => {
	return (
		<section className="store">
			<div className="container">
				<div className="row">
					<div className="col-6">
						<h2 className="beers-title">Landlord Store</h2>
						<p className="beers-desc">
							We will create and sell some of the finest craft beers and ales. These will be available to purchase from the Online store with fiat or the crypto of
							your choice. Profits will be used to buy back and burn LNDLRD.
						</p>
						<div className="beers-btns">
							<a href="/">
								All Products
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
									<path
										fillRule="evenodd"
										d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
									/>
								</svg>
							</a>
						</div>
					</div>
					<div className="col-6">
						<Swiper slidesPerView={1} spaceBetween={30} loop={true} className="mySwiper">
							<SwiperSlide>
								<img className="beers-slide-img" src="/files/img/store/01.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="beers-slide-img" src="/files/img/store/02.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="beers-slide-img" src="/files/img/store/03.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="beers-slide-img" src="/files/img/store/04.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="beers-slide-img" src="/files/img/store/05.jpg" />
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Store;
