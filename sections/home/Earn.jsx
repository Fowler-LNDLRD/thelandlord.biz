import LinkArrow from '../../components/LinkArrow';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import SlideFade from '../../components/SlideFade';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
const Shill = () => {
	const t = useTranslations('home.earn');
	const tc = useTranslations('common');
	const [earnData, setEarnData] = useState(null);
	useEffect(() => {
		if (process.env.NODE_ENV !== 'development') {
			const getShillers = async () => {
				try {
					const shillApi = process.env.SHILL_API;
					const resp = await axios.get(shillApi);
					const data = resp.data;
					setEarnData(data);
				} catch (err) {
					console.log(err?.response?.data?.message);
				}
			};
			getShillers();
		}
	}, []);

	return (
		<section className="shill section section-dark" id="earn" hidden={!earnData?.earned && process.env.NODE_ENV === 'production'}>
			<div className="container">
				<div className="row align-items-center px-1 px-md-0">
					<SlideFade className="col-md-6 col-lg-7 order-last ps-md-4">
						<h2 className="section-title">
							{}
							{earnData?.earned ? earnData?.earned?.toLocaleString() : '140,000,000+'}
							<br /> {t('title')}
						</h2>
						<p className="section-desc">{t('desc')}</p>
						<LinkArrow href={process.env.SHILL_URL} target="_blank" rel="noreferrer" dir="right" className="link link-brand">
							{tc('join_now')}
						</LinkArrow>
					</SlideFade>
					<SlideFade y={0} x={0} delay={0.1} className="col-md-6 col-lg-5 d-flex mb-3 mb-md-0 pe-0 pe-md-4">
						<div className="shill-wrap">
							<Swiper initialSlide={3} effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
								{earnData?.users &&
									earnData.users.slice(0, 10).map((item, index) => (
										<SwiperSlide key={index} className={`shill-card shill-card-${index}`}>
											<div className="shill-inner">
												<Image
													width={96}
													height={96}
													className="shill-avatar"
													onError={(event) => {
														event.target.src = '/img/avatars/default.jpg';
													}}
													src={`/img/avatars/${item.username}.jpg`}
													alt={item.username}
												/>

												<div className="shill-username">@{item.username}</div>
												<div className="shill-lndlrd">{item.earned.toLocaleString()} $LNDLRD</div>
												<div className="shill-points">
													{item.points.toLocaleString()} {tc('points')}
												</div>
											</div>
										</SwiperSlide>
									))}
							</Swiper>
						</div>
					</SlideFade>
				</div>
			</div>
		</section>
	);
};
export default Shill;
