import { useRouter } from 'next/router';

const NavLang = () => {
	const router = useRouter();
	const { pathname, query, locale, locales, asPath } = router;

	const changeLanguage = (e) => {
		router.push(
			{
				route: pathname,
				query: query,
			},
			asPath,
			{ locale: e.target.value }
		);
	};
	return (
		<select className="lang-select form-select" value={locale} onChange={changeLanguage}>
			{locales.map((l, i) => {
				return (
					<option value={l} key={i}>
						{l === 'en' ? 'English' : l === 'de' ? 'German' : l}
					</option>
				);
			})}
		</select>
	);
};
export default NavLang;
