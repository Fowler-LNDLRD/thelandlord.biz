import { Swiper, SwiperSlide } from 'swiper/react';
import Parallax from '../../components/Parallax';
import SlideFade from '../../components/SlideFade';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Protocols = () => {
	const t = useTranslations('home.tokenomics');

	return (
		<section className="tokenomics section section-dark" id="tokenomics">
			<SlideFade className="container">
				<h2 className="tokenomics-title section-title text-md-center">{t('title')}</h2>
				<p className="tokenomics-desc section-desc text-md-center ">{t('desc')}</p>
				<Parallax offset={30} className="floating floating-01" ariaHidden="true">
					<Image alt="Landlord Token" src="/img/home/floating-01.png" width={112} height={112} objectFit="contain" quality={100} className="floating-img" />
				</Parallax>
				<Parallax offset={30} className="floating floating-02" ariaHidden="true">
					<Image alt="Landlord Token" src="/img/home/floating-02.png" width={80} height={80} objectFit="contain" quality={100} className="floating-img" />
				</Parallax>
			</SlideFade>

			<SlideFade className="container swiper-container">
				<div className="tokenomics-protocols">
					<Swiper
						loop={false}
						slidesPerView={1.25}
						centeredSlides={true}
						spaceBetween={16}
						breakpoints={{
							800: {
								slidesPerView: 3,
								centeredSlides: false,
								spaceBetween: 32,
							},
						}}
					>
						<SwiperSlide>
							<article className="tokenomics-item">
								<span className="tokenomics-item-percent">{t('pub_percent')}</span>
								<h3 className="tokenomics-item-title">{t('pub_title')}</h3>
								<p className="tokenomics-item-desc">{t('pub_desc')}</p>
							</article>
						</SwiperSlide>
						<SwiperSlide>
							<article className="tokenomics-item">
								<span className="tokenomics-item-percent">{t('pints_percent')}</span>
								<h3 className="tokenomics-item-title">{t('pints_title')}</h3>
								<p className="tokenomics-item-desc">{t('pints_desc')}</p>
							</article>
						</SwiperSlide>
						<SwiperSlide>
							<article className="tokenomics-item">
								<span className="tokenomics-item-percent">{t('shots_percent')}</span>
								<h3 className="tokenomics-item-title">{t('shots_title')}</h3>
								<p className="tokenomics-item-desc">{t('shots_desc')}</p>
							</article>
						</SwiperSlide>
					</Swiper>
				</div>
			</SlideFade>
		</section>
	);
};
export default Protocols;
