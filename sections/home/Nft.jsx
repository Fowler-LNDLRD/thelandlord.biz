import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import SlideFade from '../../components/SlideFade';
import { useTranslations } from 'next-intl';
const Nft = () => {
	const t = useTranslations('home.nft');
	return (
		<section className="section nft position-relative" id="NFTs">
			<div className="container">
				<div className="row align-items-center">
					<SlideFade className="col-md-6 mb-3 mb-md-0 pe-md-4">
						<h2 className="section-title">{t('title')}</h2>
						<p className="section-desc">{t('desc_1')}</p>
						<p className="section-desc">{t('desc_2')}</p>
						<p className="section-desc mb-0">{t('desc_3')}</p>
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
									alt={t('title')}
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
									alt={t('title')}
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
									alt={t('title')}
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
									alt={t('title')}
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
									alt={t('title')}
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
