import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import nav from '../data/nav';

const Nav = ({ className }) => {
	const router = useRouter();
	const currentRoute = router.pathname;

	const [isActive, setIsActive] = useState({
		status: false,
		key: '',
	});

	const handleToggle = (key) => {
		if (isActive.key === key) {
			setIsActive({
				status: false,
				key: '',
			});
		} else {
			setIsActive({
				status: true,
				key,
			});
		}
	};

	return (
		<nav className={'header-nav d-md-flex' + className}>
			<ul className="header-nav-list">
				{nav.map((item, index) => (
					<li className={'header-nav-item'} key={index}>
						{!item.sub ? (
							<Link href={item.url}>
								<a className={'header-nav-link' + (currentRoute === item.url ? ' active' : '')}>{item.title}</a>
							</Link>
						) : (
							<>
								<a className={'header-nav-link has-sub' + (isActive.key === index ? ' active' : '')} onClick={() => handleToggle(index)}>
									{item.title}
									<svg className="header-nav-chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
										<path
											fillRule="evenodd"
											d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
										/>
									</svg>
								</a>

								<ul className={'header-nav-sub' + (isActive.key === index ? ' active' : '')} id={`sub_` + index}>
									{item.submenu.map((sub, index) => (
										<li key={index} className="header-nav-sub-item">
											<Link href={sub.url}>
												<a className="header-nav-sub-link">{sub.title}</a>
											</Link>
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
