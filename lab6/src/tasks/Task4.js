import React from "react";
import { motion } from "framer-motion";

export const Task4 = () => {
	const duration = 4;
	const transition = {
		duration: duration,
		ease: "easeInOut",
		repeat: 1,
	};
	return (
		<section>
			<h3 className="task-title">Завдання №4</h3>
			<div className="task-content">
				<div className="task4-wrap">
					<motion.div
						className="task4-box"
						animate={{
							x: [0, -50, -50, 0, 0],
							y: [0, 0, 50, 50, 0],
						}}
						transition={{ ...transition, repeatDelay: 3 }}
					/>
					<motion.div
						className="task4-box"
						animate={{
							x: [0, -50, -50, 0, 0],
							y: [0, 0, 50, 50, 0],
						}}
						transition={{
							...transition,
							delay: 1.5,
							repeatDelay: 1.5,
						}}
					/>
					<motion.div
						className="task4-box"
						animate={{
							x: [0, -50, -50, 0, 0],
							y: [0, 0, 50, 50, 0],
						}}
						transition={{ ...transition, delay: 3, repeatDelay: 0 }}
					/>
				</div>
			</div>
		</section>
	);
};

export default Task4;
