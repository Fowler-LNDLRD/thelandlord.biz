import { Swiper, SwiperSlide } from 'swiper/react';
import Parallax from '../../components/Parallax';

import SlideFade from '../../components/SlideFade';

const Protocols = () => {
	return (
		<section className="tokenomics section section-dark" id="tokenomics">
			<SlideFade className="container">
				<h2 className="tokenomics-title section-title text-md-center">Tokenomics</h2>
				<p className="tokenomics-desc section-desc text-md-center ">
					Three key protocols which unlock the potential of The Landlord. All $LNDLRD transactions will be subject to an 8% tax so will require 9% slippage.
				</p>

				<Parallax offset={30} className="floating floating-01"></Parallax>
				<Parallax offset={30} className="floating floating-02"></Parallax>
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
								<span className="tokenomics-item-percent">3%</span>
								<h3 className="tokenomics-item-title">
									Pub <span>Protocol</span>
								</h3>
								<p className="tokenomics-item-desc">
									This will be used to drive all aspects of The Landlord ecosystem. These tokens will be automatically liquidated into BNB by the contract.
								</p>
							</article>
						</SwiperSlide>
						<SwiperSlide>
							<article className="tokenomics-item">
								<span className="tokenomics-item-percent">3%</span>
								<h3 className="tokenomics-item-title">
									Pints <span>Protocol</span>
								</h3>
								<p className="tokenomics-item-desc">
									Automatically growing the liquidity by taking 3% of each transaction and putting it into the liquidity pool adding stability to the $LNDLRD
									value.
								</p>
							</article>
						</SwiperSlide>
						<SwiperSlide>
							<article className="tokenomics-item">
								<span className="tokenomics-item-percent">2%</span>
								<h3 className="tokenomics-item-title">
									Shots <span>Protocol</span>
								</h3>
								<p className="tokenomics-item-desc">
									Rewarding all holders with passive $BUSD income if they are holding at least 100,000 $LNDLRD or $50 worth of Landlord Tokens.
								</p>
							</article>
						</SwiperSlide>
					</Swiper>
				</div>
			</SlideFade>
		</section>
	);
};
export default Protocols;
