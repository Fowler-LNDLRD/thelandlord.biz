import Link from 'next/link';

const LinkArrow = ({ dir, href, rel, className, children, target }) => {
	const ArrowRightShort = () => {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
				<path
					fillRule="evenodd"
					d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
				/>
			</svg>
		);
	};
	return (
		<Link href={href}>
			<a className={className} target={target} rel={rel}>
				{dir === 'left' && <ArrowRightShort />}
				{children}
				{dir === 'right' && <ArrowRightShort />}
			</a>
		</Link>
	);
};
export default LinkArrow;
