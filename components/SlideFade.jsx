import { motion } from 'framer-motion';

const SlideFade = ({ children, y = 50, x = 0, delay = 0, className, type = 'tween' }) => {
	return (
		<motion.div
			className={className}
			transition={{ type: type, duration: 0.5, delay: delay }}
			initial={{ opacity: 0.01, y: y, x: x }}
			whileInView={{ opacity: 1, y: 0, x: 0 }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	);
};
export default SlideFade;
