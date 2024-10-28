import React, { useState } from "react";
import { motion } from "framer-motion";

export const HoverAngleAnimation = () => {
	const [hoverAnimation, setHoverAnimation] = useState({
		x: 0,
		y: 0,
		scale: 1,
		rotate: 0,
	});

	const handleMouseEnter = (event) => {
		const { width, height, top, left } =
			event.currentTarget.getBoundingClientRect();
		const x = event.clientX - left - width / 2;
		const y = event.clientY - top - height / 2;

		const angle = Math.atan2(y, x);
		const distance = Math.sqrt(x ** 2 + y ** 2);

		setHoverAnimation({
			x: Math.cos(angle) * distance * 0.3,
			y: Math.sin(angle) * distance * 0.3,
			scale: 1.1,
			rotate: (angle * 180) / Math.PI / 8,
		});
	};

	const handleMouseLeave = () => {
		setHoverAnimation({ x: 0, y: 0, scale: 1, rotate: 0 });
	};

	return (
		<section>
			<h3 className="task-title">Завдання №5</h3>
			<div className="task-content">
				<motion.div
					className="task5-box"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					animate={hoverAnimation}
					transition={{ duration: 0.3, ease: "easeOut" }}
				>
					<p>Hover me</p>
				</motion.div>
			</div>
		</section>
	);
};

export default HoverAngleAnimation;
