import Nav from './Nav';
import Social from './Social';
import Logo from './Logo';
import { useState } from 'react';

const Header = () => {
	const [toggle, setToggle] = useState(false);

	const toggleNav = () => {
		if (toggle) {
			document.querySelector('body').style.overflow = 'auto';
			setToggle(false);
		} else {
			document.querySelector('body').style.overflow = 'hidden';
			setToggle(true);
		}
	};

	return (
		<header className={'header' + (toggle ? ' nav-active' : '')}>
			<div className="container">
				<Logo />
				<Nav className={toggle ? ' active' : ''} />
				<Social />
				<button className={toggle ? 'nav-toggle active d-md-none' : 'nav-toggle d-md-none'} onClick={() => toggleNav()}>
					<span className="lines">
						<span className="line line-1"></span>
						<span className="line line-2"></span>
						<span className="line line-3"></span>
					</span>
				</button>
			</div>
		</header>
	);
};
export default Header;