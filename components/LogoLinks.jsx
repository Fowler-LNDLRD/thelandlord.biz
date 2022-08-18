import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const LogoLinks = () => {
	return (
		<div className="hero-links">
			<div className="container  d-flex">
				<Swiper
					autoplay={true}
					slidesPerView={3}
					breakpoints={{
						800: {
							slidesPerView: 5,
						},
					}}
					modules={[Autoplay]}
					spaceBetween={32}
					loop={false}
					className="mySwiper"
				>
					<SwiperSlide>
						<Link href="https://bscscan.com/token/0xd6dA6491A6663B1d413715f4fD8eDD74a4b47694">
							<a target="_blank" rel="noreferrer" className="hero-links-link">
								<img src="/img/home/bscscan.png" alt="BscScan" className="hero-links-img" />
							</a>
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="https://www.coingecko.com/en/coins/the-landlord">
							<a target="_blank" rel="noreferrer" className="hero-links-link">
								<img src="/img/home/coingecko.png" alt="coingecko" className="hero-links-img" />
							</a>
						</Link>
					</SwiperSlide>

					<SwiperSlide>
						<Link href="https://tokpie.com/view_exchange/lndlrd-usdt/">
							<a target="_blank" rel="noreferrer" className="hero-links-link">
								<img src="/img/home/tokpie.png" alt="Tokpie" className="hero-links-img" />
							</a>
						</Link>
					</SwiperSlide>

					<SwiperSlide>
						<Link href="https://watcher.guru/coin/the-landlord">
							<a target="_blank" rel="noreferrer" className="hero-links-link">
								<img src="/img/home/watcher.png" alt="Watcher Guru" className="hero-links-img" />
							</a>
						</Link>
					</SwiperSlide>

					<SwiperSlide>
						<Link href="https://nomics.com/assets/lndlrd-the-landlord">
							<a target="_blank" rel="noreferrer" className="hero-links-link">
								<img src="/img/home/nomics.png" alt="nomics" className="hero-links-img" />
							</a>
						</Link>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};
export default LogoLinks;
