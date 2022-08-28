import Image from 'next/image';
import LinkArrow from '../../components/LinkArrow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import SlideFade from '../../components/SlideFade';

const Nft = () => {
	return (
		<section className="section nft position-relative" id="NFTs">
			<div className="container">
				<div className="row align-items-center">
					<SlideFade className="col-6 pe-4">
						<h2 className="section-title">NFT Collections</h2>
						<p className="section-desc">
							The Landlord will be releasing its first utility driven NFT collection, these will be available to blind mint from The Landlord website.
						</p>
						<p className="section-desc">
							These will be split into 4 variety&apos;s with an increasing rarity. Starting with standard(common), Bronze(fairly common) silver(rare) and gold (very
							rare).
						</p>
						<p className="section-desc">
							Each variety will have a different random built in discount or ability % split across 4 areas. The discounts are scaled based on the variety.
						</p>
						{/* <LinkArrow href="/nft" className="link-brand" dir="right">
							Learn About NFTs
						</LinkArrow> */}
					</SlideFade>

					<SlideFade className="col-6 position-relative" delay={0.1}>
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
									alt="The Landlord Token NFT"
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
									alt="The Landlord Token NFT"
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
									alt="The Landlord Token NFT"
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
									alt="The Landlord Token NFT"
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
									alt="The Landlord Token NFT"
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
