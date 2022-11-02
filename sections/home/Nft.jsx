import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import SlideFade from '../../components/SlideFade';
import Script from 'next/script';

const Nft = () => {
	return (
		<section className="section nft position-relative" id="NFT">
			<div className="container">
				<div className="row align-items-center">
					<SlideFade className="col-md-6 mb-3 mb-md-0 pe-md-4">
						<h2 className="section-title">NFT Collections</h2>
						<p className="section-desc">
							The Landlord will be releasing its first utility driven NFT collection, these will be available to blind mint from The Landlord website.
						</p>
						<p className="section-desc">
							These will be split into 4 variety&apos;s with an increasing rarity. Starting with standard(common), Bronze(fairly common) silver(rare) and gold (very
							rare).
						</p>
						<p className="section-desc mb-0">
							Each variety will have a different random built in discount or ability % split across 4 areas. The discounts are scaled based on the variety.
						</p>

						<div className="text-left mt-2">
							<div
								id="koalamint_div"
								data-button-text=""
								data-button-background=""
								data-button-color=""
								data-button-border-radius=""
								data-button-border-style=""
								data-button-border-color=""
								data-button-border-width=""
							></div>
						</div>
						<Script
							src="https://cdn.koalamint.com/koalamint.js"
							onLoad={() => {
								KoalaMint.setup(
									'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxZmU0YThiOTljZjczZDM0NjM3ZDc0NDEyYTkzNzUzNDYwZmQ1NWJhMDNmMzlhMzI2MDNhMjAxYjQzZDM4MzQiLCJpYXQiOjE2NjY5NjE5MzksImV4cCI6MTk4MjMyMTkzOX0.MSoTJe3EibR4ik-qqqKJD6ZzRCosFIigh_92iU1kOnE'
								);
							}}
						></Script>
					</SlideFade>

					<SlideFade className="col-md-6 position-relative" delay={0.1}>
						<Swiper
							pagination={true}
							autoplay={true}
							modules={[Pagination]}
							className="nft-swiper rounded-4"
							loop={false}
							slidesPerView={1}
							centeredSlides={true}
							spaceBetween={16}
						>
							<SwiperSlide>
								<Image
									className="nft-item-cover rounded-4"
									quality={75}
									width={600}
									height={560}
									alt="NFT Collections"
									src="/img/nfts/01.jpg"
									objectFit="cover"
									objectPosition="center"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									className="nft-item-cover rounded-4"
									quality={75}
									width={600}
									height={560}
									alt="NFT Collections"
									src="/img/nfts/02.jpg"
									objectFit="cover"
									objectPosition="center"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									className="nft-item-cover rounded-4"
									quality={75}
									width={600}
									height={560}
									alt="NFT Collections"
									src="/img/nfts/03.jpg"
									objectFit="cover"
									objectPosition="center"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									className="nft-item-cover rounded-4"
									quality={75}
									width={600}
									height={560}
									alt="NFT Collections"
									src="/img/nfts/04.jpg"
									objectFit="cover"
									objectPosition="center"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									className="nft-item-cover rounded-4"
									quality={75}
									width={600}
									height={560}
									alt="NFT Collections"
									src="/img/nfts/06.jpg"
									objectFit="cover"
									objectPosition="center"
								/>
							</SwiperSlide>
						</Swiper>
					</SlideFade>
				</div>
			</div>
		</section>
	);
};
export default Nft;
