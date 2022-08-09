import { ArrowRightShort } from 'react-bootstrap-icons';

const LinkArrow = ({ dir, href, className, children }) => {
	return (
		<a href={href} className={className}>
			{dir === 'left' && <ArrowRightShort size="32" />}
			{children}
			{dir === 'right' && <ArrowRightShort size="32" />}
		</a>
	);
};
export default LinkArrow;
