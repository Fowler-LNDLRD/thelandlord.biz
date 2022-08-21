import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, className, type = 'tween' }) => {
	return (
		<motion.div
			className={className}
			transition={{ type: type, duration: 0.5, delay: delay }}
			initial={{ opacity: 0.01, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	);
};
export default FadeIn;
