import { Telegram, Youtube, EnvelopeFill, Twitter } from 'react-bootstrap-icons';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<h4>General</h4>
						<nav className="footer-nav">
							<a className="footer-nav-link" href="/">
								Whitepaper
							</a>
							<a className="footer-nav-link" href="/">
								Audit
							</a>
							<a className="footer-nav-link" href="/">
								Liquidity Lock
							</a>
							<a className="footer-nav-link" href="/">
								Team
							</a>
							<a className="footer-nav-link" href="/">
								FAQ
							</a>
						</nav>
					</div>
					<div className="col-md-3">
						<h4>About</h4>
						<nav className="footer-nav">
							<a className="footer-nav-link" href="/">
								Pubs
							</a>
							<a className="footer-nav-link" href="/">
								Beers
							</a>
							<a className="footer-nav-link" href="/">
								POS System
							</a>
							<a className="footer-nav-link" href="/">
								NFT Collections
							</a>
							<a className="footer-nav-link" href="/">
								Earn Tokens
							</a>
						</nav>
					</div>
					<div className="col-md-3">
						<h4>Links</h4>
						<nav className="footer-nav">
							<a className="footer-nav-link" href="/">
								Contract
							</a>
							<a className="footer-nav-link" href="/">
								CoinMarketCap
							</a>
							<a className="footer-nav-link" href="/">
								CoinGecko
							</a>
							<a className="footer-nav-link" href="/">
								Chart
							</a>
							<a className="footer-nav-link" href="/">
								BscScan
							</a>
						</nav>
					</div>
					<div className="col-md-3">
						<h4>Community</h4>
						<nav className="footer-nav">
							<a className="footer-nav-link" href="/">
								<Telegram size="16" /> Telegram Group
							</a>
							<a className="footer-nav-link" href="/">
								<Telegram size="16" /> Telegram Channel
							</a>
							<a className="footer-nav-link" href="/">
								<Twitter size="16" /> Twitter
							</a>
							<a className="footer-nav-link" href="/">
								<Youtube size="16" />
								YouTube
							</a>
							<a className="footer-nav-link" href="/">
								<EnvelopeFill size="16" /> Contact
							</a>
						</nav>
					</div>
				</div>
			</div>
			<div className="footer-copyright">&copy; {new Date().getFullYear().toString()} - TheLandlord.biz</div>
		</footer>
	);
};
export default Footer;
