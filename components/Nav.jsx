import { useState } from 'react';
import nav from '../data/nav';

const Nav = () => {
	return (
		<nav className="menu">
			<ul className="menu-list">
				{nav.map((item, index) => (
					<li className="menu-item" key={index}>
						<a className={item.submenu ? 'menu-link -sub' : 'menu-link'} href={item.url}>
							{item.title}
						</a>
						{item.submenu && (
							<>
								<ul className="submenu">
									{item.submenu.map((sub, subIndex) => (
										<li className="submenu-item" key={subIndex}>
											<a className="submenu-link" href={sub.url}>
												{sub.title}
											</a>
										</li>
									))}
								</ul>
							</>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};
export default Nav;
