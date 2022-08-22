import { motion } from 'framer-motion';

const SlideFade = ({ as: Tag = 'div', children, y = 50, x = 0, delay = 0, className, type = 'tween' }) => {
	const Motion = motion(Tag);

	return (
		<Motion
			className={className}
			transition={{ type: type, duration: 0.5, delay: delay }}
			initial={{ opacity: 0.01, y: y, x: x }}
			whileInView={{ opacity: 1, y: 0, x: 0 }}
			viewport={{ once: true }}
		>
			{children}
		</Motion>
	);
};
export default SlideFade;
