import SlideFade from './SlideFade';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const LogoLinks = () => {
	return (
		<SlideFade delay={0.3} className="hero-links">
			<div className="container  d-flex">
				<Swiper
					autoplay={true}
					slidesPerView={2}
					loop={false}
					breakpoints={{
						800: {
							slidesPerView: 5,
						},
					}}
					modules={[Autoplay]}
					spaceBetween={32}
					className="mySwiper"
				>
					<SwiperSlide>
						<Link href={process.env.LINK_BSCSCAN}>
							<a target="_blank" rel="noreferrer" className="hero-links-link">
								<img src="/img/home/bscscan.png" alt="BscScan" className="hero-links-img" />
							</a>
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href={process.env.LINK_COINGEKO}>
							<a target="_blank" rel="noreferrer" className="hero-links-link">
								<img src="/img/home/coingecko.png" alt="coingecko" className="hero-links-img" />
							</a>
						</Link>
					</SwiperSlide>

					<SwiperSlide>
						<Link href={process.env.LINK_TOKPIE}>
							<a target="_blank" rel="noreferrer" className="hero-links-link">
								<img src="/img/home/tokpie.png" alt="Tokpie" className="hero-links-img" />
							</a>
						</Link>
					</SwiperSlide>

					<SwiperSlide>
						<Link href={process.env.LINK_WATCHER}>
							<a target="_blank" rel="noreferrer" className="hero-links-link">
								<img src="/img/home/watcher.png" alt="Watcher Guru" className="hero-links-img" />
							</a>
						</Link>
					</SwiperSlide>

					<SwiperSlide>
						<Link href={process.env.LINK_NOMICS}>
							<a target="_blank" rel="noreferrer" className="hero-links-link">
								<img src="/img/home/nomics.png" alt="nomics" className="hero-links-img" />
							</a>
						</Link>
					</SwiperSlide>
				</Swiper>
			</div>
		</SlideFade>
	);
};
export default LogoLinks;
