import LinkArrow from '../components/LinkArrow';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import shills from '../data/shills';

import 'swiper/css/effect-cards';

const Shill = () => {
	const [shillers, setShillers] = useState([]);
	const getShillers = async () => {
		const users = await axios.get('http://localhost:5000/api/board');
		setShillers(users.data.shills);
	};

	useEffect(() => {}, []);

	return (
		<section className="shill section">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6 col-lg-5">
						<h2 className="section-title">Earn Landlord</h2>
						<p className="section-desc">
							There are many ways that you can earn LNDLRD, one way is to Tweet about Landlord Token earn LNDLRD. We have made an app that makes it easy to tweet and
							keep track of your points and rewards.
						</p>
						<LinkArrow href="/" dir="right" className="link link-brand">
							Join Now
						</LinkArrow>
					</div>
					<div className="col-md-6 col-lg-7 d-flex">
						<div className="shill-wrap">
							<Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
								<SwiperSlide className={`shill-card shill-main-card`}>
									<div className="shill-inner">
										<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="shill-main-svg" viewBox="0 0 16 16">
											<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
										</svg>
										<div className="shill-main-desc">
											43,300,000 $LNDLRD <br /> earned today.
										</div>
										<div className="shill-main-swipe">
											Swipe Left
											<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
												<path
													fillRule="evenodd"
													d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
												/>
											</svg>
										</div>
									</div>
								</SwiperSlide>
								{shills.map((item, index) => (
									<SwiperSlide key={index} className={`shill-card shill-card-${index}`}>
										<div className="shill-inner">
											<img className="shill-avatar" src={`/files/img/avatars/${item.username}.jpg`} alt={item.username} />
											<div className="shill-username">@{item.username}</div>
											<div className="shill-points">{item.count} Points</div>
											<div className="shill-lndlrd">{(item.count * 5000).toLocaleString()} $LNDLRD</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Shill;
