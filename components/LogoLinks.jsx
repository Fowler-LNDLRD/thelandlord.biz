import SlideFade from './SlideFade';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Image from 'next/image';

const LogoLinks = () => {
	return (
		<Swiper
			autoplay={true}
			slidesPerView={6}
			loop={false}
			// observer={true}
			breakpoints={{
				480: {
					slidesPerView: 6,
				},
			}}
			modules={[Autoplay]}
			spaceBetween={24}
			className="info-listed-swiper"
		>
			<SwiperSlide>
				<Link href={process.env.LINK_BSCSCAN}>
					<a target="_blank" rel="noreferrer" className="info-listed-link">
						<Image quality={100} width={40} height={40} src="/img/listed/bscscan.png" alt="BscScan" className="info-listed-img" />
					</a>
				</Link>
			</SwiperSlide>
			<SwiperSlide>
				<Link href={process.env.LINK_COINGEKO}>
					<a target="_blank" rel="noreferrer" className="info-listed-link">
						<Image quality={100} width={40} height={40} src="/img/listed/coingecko.png" alt="CoinGecko" className="info-listed-img" />
					</a>
				</Link>
			</SwiperSlide>

			<SwiperSlide>
				<Link href={process.env.LINK_PANCAKESWAP}>
					<a target="_blank" rel="noreferrer" className="info-listed-link">
						<Image quality={100} width={40} height={40} src="/img/listed/pancakeswap.png" alt="PancakeSwap" className="info-listed-img" />
					</a>
				</Link>
			</SwiperSlide>

			<SwiperSlide>
				<Link href={process.env.LINK_TOKPIE}>
					<a target="_blank" rel="noreferrer" className="info-listed-link">
						<Image quality={100} width={40} height={40} src="/img/listed/tokpie.png" alt="Tokpie" className="info-listed-img" />
					</a>
				</Link>
			</SwiperSlide>

			<SwiperSlide>
				<Link href={process.env.LINK_BOGGED}>
					<a target="_blank" rel="noreferrer" className="info-listed-link">
						<Image quality={100} width={40} height={40} src="/img/listed/bogged.png" alt="Bogged" className="info-listed-img" />
					</a>
				</Link>
			</SwiperSlide>

			<SwiperSlide>
				<Link href="https://coinbrain.com/coins/bnb-0xd6da6491a6663b1d413715f4fd8edd74a4b47694">
					<a target="_blank" rel="noreferrer" className="info-listed-link">
						<Image quality={100} width={40} height={40} src="/img/listed/coinbrain.png" alt="nomics" className="info-listed-img" />
					</a>
				</Link>
			</SwiperSlide>
		</Swiper>
	);
};
export default LogoLinks;
