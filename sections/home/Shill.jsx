import LinkArrow from '../../components/LinkArrow';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import shills from '../../data/shills';

import 'swiper/css/effect-cards';

const Shill = () => {
	const [shillers, setShillers] = useState(shills);
	const [isLocal, setIsLocal] = useState(true);
	const getShillers = async () => {
		try {
			const users = await axios.get('https://landlord.army/api/board');
			setShillers(users.data.shills);
			setIsLocal(false);
		} catch (err) {
			console.log(err.response.data.message);
			setIsLocal(true);
		}
	};

	useEffect(() => {
		getShillers();
	}, []);

	return (
		<section className="shill section">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6 col-lg-5">
						<h2 className="section-title text-center text-md-start">Earn Landlord</h2>
						<p className="section-desc text-center text-md-start">
							Landlord Army is an app that we developed to enrich community engagement, and encourage its users to inviting more investors into The Landlord. You can
							join the Landlord Army and earn $LNDLRD by just Tweeting about it.
						</p>
						<div className="text-center text-md-start">
							<LinkArrow href="/" dir="right" className="link link-brand">
								Join Now
							</LinkArrow>
						</div>
					</div>
					<div className="col-md-6 col-lg-7 d-flex mt-3 mt-md-0">
						<div className="shill-wrap">
							<Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
								<SwiperSlide className={`shill-card shill-main-card`}>
									<div className="shill-inner">
										<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="shill-main-svg" viewBox="0 0 16 16">
											<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
										</svg>
										<div className="shill-main-desc">
											43,300,000 $LNDLRD <br /> earned today.
										</div>
										<div className="shill-main-swipe">
											<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
												<path
													fillRule="evenodd"
													d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
												/>
											</svg>{' '}
											Swipe Left
										</div>
									</div>
								</SwiperSlide>
								{shillers.map((item, index) => (
									<SwiperSlide key={index} className={`shill-card shill-card-${index}`}>
										<div className="shill-inner">
											<img
												className="shill-avatar"
												onError={(event) => {
													event.target.src = '/img/avatars/default.jpg';
												}}
												src={`/img/avatars/${item.username}.jpg`}
												alt={item.username}
											/>
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
