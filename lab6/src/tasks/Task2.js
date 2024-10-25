import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Task2 = () => {
	const { scrollYProgress } = useScroll();

	const lightblue = useTransform(scrollYProgress, [0, 1], [0, 1000]);
	const lightgreen = useTransform(scrollYProgress, [0, 1], [0, 1250]);
	const lightcoral = useTransform(scrollYProgress, [0, 1], [0, 1500]);

	return (
		<section>
			<h3 class="task-title">Завдання №2</h3>
			<div class="task-content">
				<div className="task2-wrap">
					<motion.div
						className="lightblue"
						style={{
							translateY: lightblue,
						}}
					/>
					<motion.div
						className="lightgreen"
						style={{
							translateY: lightgreen,
						}}
					/>
					<motion.div
						className="lightcoral"
						style={{
							translateY: lightcoral,
						}}
					/>
				</div>
			</div>
		</section>
	);
};

export default Task2;
