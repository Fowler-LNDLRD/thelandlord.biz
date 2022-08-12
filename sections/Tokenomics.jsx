import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

const Protocols = () => {
	return (
		<section className="tokenomics">
			<div className="container">
				<h2 className="tokenomics-title section-title text-start text-md-center">Tokenomics</h2>
				<p className="tokenomics-desc section-desc text-start text-md-center">
					Three key protocols which unlock the potential of The Landlord. All $LNDLRD transactions will be subject to an 8% tax so will require 9% slippage.
				</p>

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
									Automatically growing the liquidity by taking 3% of each transaction and putting it into the liquidity pool adding stability to the LNDLRD
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
									Rewarding all the Landlord Token holders with passive $BUSD income if they are holding at least $50 worth of $LNDLRD Tokens.
								</p>
							</article>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
};
export default Protocols;
