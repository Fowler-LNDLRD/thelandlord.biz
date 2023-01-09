import SlideFade from '../../components/SlideFade';
import Script from 'next/script';

const Nft = () => {
	return (
		<section className="section nft position-relative" id="NFT">
			<div className="container">
				<div className="row align-items-center">
					<SlideFade className="col-md-6 mb-3 mb-md-0 pe-md-4">
						<h2 className="section-title">NFT Collections</h2>
						<p className="section-desc">
							The Landlord have released its first utility driven NFT collection, these can blind minted from The Landlord website for just 0.04 ETH.
						</p>
						<p className="section-desc">
							These will be split into 4 variety&apos;s with an increasing rarity. Starting with standard(common), Bronze(fairly common) silver(rare) and gold (very
							rare).
						</p>
						<p className="section-desc mb-0">
							Each variety will have a different random built in discount or ability % split across 4 areas, Store,Beer, Pubs and Special Feature. The discounts are scaled based on the variety.
						</p>

						<div className="text-left mt-2">
							<div
								id="koalamint_div"
								data-button-text=""
								data-button-background=""
								data-button-color=""
								data-button-border-radius=""
								data-button-border-style=""
								data-button-border-color=""
								data-button-border-width=""
							></div>
						</div>
						<Script
							src="https://cdn.koalamint.com/koalamint.js"
							onLoad={() => {
								KoalaMint.setup(
									'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxZmU0YThiOTljZjczZDM0NjM3ZDc0NDEyYTkzNzUzNDYwZmQ1NWJhMDNmMzlhMzI2MDNhMjAxYjQzZDM4MzQiLCJpYXQiOjE2NjY5NjE5MzksImV4cCI6MTk4MjMyMTkzOX0.MSoTJe3EibR4ik-qqqKJD6ZzRCosFIigh_92iU1kOnE'
								);
							}}
						></Script>
					</SlideFade>

					<div className="col-md-6 position-relative">
						<video className="mw-100" width="100%" autoPlay muted loop>
							<source src="/img/home/nft.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Nft;
