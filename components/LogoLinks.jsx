import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const LogoLinks = () => {
	return (
		<div className="hero-links">
			<div className="container  d-flex">
				<Swiper
					autoplay={true}
					slidesPerView={2}
					breakpoints={{
						400: {
							slidesPerView: 3,
						},
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
						<Link href="/">
							<a className="hero-links-link">
								<img src="/img/home/bscscan.png" alt="BscScan" className="hero-links-img" />
							</a>
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/">
							<a className="hero-links-link">
								<img src="/img/home/coingecko.png" alt="coingecko" className="hero-links-img" />
							</a>
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/">
							<a className="hero-links-link">
								<img src="/img/home/nomics.png" alt="nomics" className="hero-links-img" />
							</a>
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/">
							<a className="hero-links-link">
								<img src="/img/home/tokpie.png" alt="watcher" className="hero-links-img" />
							</a>
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/">
							<a className="hero-links-link">
								<img src="/img/home/coinmarket.png" alt="coingecko" className="hero-links-img" />
							</a>
						</Link>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};
export default LogoLinks;
