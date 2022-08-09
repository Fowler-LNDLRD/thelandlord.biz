import LinkArrow from '../components/LinkArrow';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import shills from '../data/shills';

import 'swiper/css/effect-cards';
import { ArrowRightShort, ChevronRight, Twitter } from 'react-bootstrap-icons';

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
					<div className="col-md-6">
						<h2 className="section-title">Earn Landlord</h2>
						<p className="section-desc">
							There are many ways that you can earn LNDLRD, one way is to Tweet about Landlord Token earn LNDLRD. We have made an app that makes it easy to tweet and
							keep track of your points and rewards.
						</p>
						<LinkArrow href="/" dir="right" className="link link-brand">
							Join Now
						</LinkArrow>
					</div>
					<div className="col-md-6 d-flex">
						<div className="shill-wrap">
							<Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
								<SwiperSlide className={`shill-card shill-main-card`}>
									<div className="shill-inner">
										<Twitter className="shill-main-svg" size="48" />
										<div className="shill-main-desc">
											43,300,000 $LNDLRD <br /> earned today.
										</div>
										<div className="shill-main-swipe">
											Swipe Right <ChevronRight size="18" />
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
