import { useState } from 'react';
import menu from '../data/nav';
import { useRouter } from 'next/router';
import { ChevronDown } from 'react-bootstrap-icons';

const Nav = () => {
	const router = useRouter();
	const currentRoute = router.pathname;

	const [nav, setNav] = useState(menu);

	const changeNav = (index) => {
		const cNav = [...nav];
		cNav[index].subOpen = !cNav[index].subOpen;
		setNav(cNav);
	};

	return (
		<nav className="menu d-none d-md-flex">
			<ul className="menu-list">
				{nav.map((item, index) => (
					<li className={'menu-item' + (item.sub && item.subOpen ? ' -open' : '')} key={index}>
						<a
							onClick={() => item.sub && changeNav(index)}
							href={item.url}
							className={(item.submenu ? 'menu-link -sub' : 'menu-link') + (currentRoute === item.url ? ' active' : '')}
						>
							{item.title}

							{item.submenu && <ChevronDown />}
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
