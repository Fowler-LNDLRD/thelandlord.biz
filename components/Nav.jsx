import nav from '../data/nav';
import { useRouter } from 'next/router';

const Nav = ({ isActive }) => {
	const router = useRouter();
	const currentRoute = router.pathname;
	return (
		<nav className={`header-nav me-auto d-md-flex ${isActive ? 'active' : ''}`}>
			<ul className="header-nav-list">
				{nav.map((item, index) => (
					<li className="header-nav-item" key={index}>
						<a href={item.url} className={currentRoute === item.url ? 'header-nav-link active' : 'header-nav-link'}>
							{item.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
export default Nav;
