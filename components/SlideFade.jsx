import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const SlideFade = ({ as = 'div', animate, children, y = 50, x = 0, delay = 0, className, type = 'tween', onClick }) => {
	const motionProps = {
		className: className,
		transition: { type: type, duration: 0.5, delay: delay },
		initial: { opacity: 0.01, y: y, x: x },
		whileInView: !animate && { opacity: 1, y: 0, x: 0 },
		animate: animate && { opacity: 1, y: 0, x: 0 },
		viewport: { once: true },
		onClick: onClick,
	};

	return (
		<>
			{as === 'h1' ? (
				<motion.h1 {...motionProps}>{children}</motion.h1>
			) : as === 'h2' ? (
				<motion.h2 {...motionProps}>{children}</motion.h2>
			) : as === 'p' ? (
				<motion.p {...motionProps}>{children}</motion.p>
			) : as === 'button' ? (
				<motion.button {...motionProps}>{children}</motion.button>
			) : as === 'section' ? (
				<motion.section {...motionProps}>{children}</motion.section>
			) : (
				<motion.div {...motionProps}>{children}</motion.div>
			)}
		</>
	);
};
export default SlideFade;
