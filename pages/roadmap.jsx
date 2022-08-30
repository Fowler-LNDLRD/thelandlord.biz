import { Swiper, SwiperSlide } from 'swiper/react';
import HeadTag from '../components/HeadTag';
import { en, de } from '../data/roadmap/';
import SlideFade from '../components/SlideFade';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

const Roadmap = () => {
	const t = useTranslations('roadmap');
	const router = useRouter();
	const { locale } = router;
	const roadmap = locale === 'en' ? en : locale === 'de' ? de : [];
	return (
		<>
			<HeadTag title={t('title')} desc={t('desc')} />
			<section as="section" className="page page-roadmap">
				<SlideFade className="container text-center">
					<h1 className="page-title">{t('title')}</h1>
					<div className="page-desc page-desc-limit  mb-5">{t('desc')}</div>
				</SlideFade>
				<SlideFade delay={0.1}>
					<Swiper
						slidesPerView={1.15}
						breakpoints={{
							460: {
								slidesPerView: 1.5,
							},
							700: {
								slidesPerView: 2.15,
							},
							800: {
								slidesPerView: 3.5,
							},
							1100: {
								slidesPerView: 4,
							},
							1400: {
								slidesPerView: 5,
							},
							1600: {
								slidesPerView: 6,
							},
							1800: {
								slidesPerView: 8,
							},
						}}
						initialSlide={2}
						centeredSlides={true}
						centerInsufficientSlides={true}
						spaceBetween={32}
						className="roadmap-swiper px-2"
					>
						{roadmap.map((item, index) => (
							<SwiperSlide key={index}>
								<div className={`roadmap-item ` + item.status}>
									<h3 className="roadmap-item-title">{item.phase}</h3>
									<ul className="roadmap-item-list">
										{item.items.map((step, stepIndex) => (
											<li key={stepIndex} className={step.status}>
												{step.title}
											</li>
										))}
									</ul>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</SlideFade>
			</section>
		</>
	);
};
export default Roadmap;

export function getStaticProps({ locale }) {
	return {
		props: {
			messages: require(`../locales/${locale}.json`),
		},
	};
}
