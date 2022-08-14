import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useTranslations } from 'next-intl';

const Protocols = () => {
	const t = useTranslations('tokenomics');

	return (
		<section className="tokenomics">
			<div className="container">
				<h2 className="tokenomics-title section-title text-start text-md-center">{t('title')}</h2>
				<p className="tokenomics-desc section-desc text-start text-md-center">{t('desc')}</p>

				<div className="tokenomics-protocols">
					<Swiper
						navigation={true}
						breakpoints={{
							700: {
								slidesPerView: 2,
							},
							800: {
								slidesPerView: 3,
							},
						}}
						modules={[Navigation, Pagination]}
						pagination={false}
						spaceBetween={32}
						loop={false}
						className="mySwiper"
					>
						<SwiperSlide>
							<article className="tokenomics-item">
								<span className="tokenomics-item-percent">3%</span>
								<h3 className="tokenomics-item-title">{t('pub.title')}</h3>
								<p className="tokenomics-item-desc">{t('pub.desc')}</p>
							</article>
						</SwiperSlide>
						<SwiperSlide>
							<article className="tokenomics-item">
								<span className="tokenomics-item-percent">3%</span>
								<h3 className="tokenomics-item-title">{t('pints.title')}</h3>
								<p className="tokenomics-item-desc">{t('pints.desc')}</p>
							</article>
						</SwiperSlide>
						<SwiperSlide>
							<article className="tokenomics-item">
								<span className="tokenomics-item-percent">2%</span>
								<h3 className="tokenomics-item-title">{t('shots.title')}</h3>
								<p className="tokenomics-item-desc">{t('shots.desc')}</p>
							</article>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
};
export default Protocols;
