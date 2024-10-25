import React, { useState } from "react";
import { motion } from "framer-motion";

export const Task3 = () => {
	const [position, setPosition] = useState(0);

	const states = [
		{ x: 0, y: 0, scale: 1, backgroundColor: "blue" },
		{ x: 100, y: 150, scale: 1.5, backgroundColor: "green" },
		{ x: -100, y: -100, scale: 2, backgroundColor: "red" },
	];

	const activateState1 = () => setPosition(0);
	const activateState2 = () => setPosition(1);
	const activateState3 = () => setPosition(2);

	return (
		<section>
			<h3 class="task-title">Завдання №3</h3>
			<div class="task-content">
				<div className="task3-wrap">
					<motion.div
						className="task3-box"
						animate={states[position]}
						transition={{
							duration: 0.5,
							ease: "easeInOut",
						}}
					/>
					<div className="task3-btns">
						<button className="task3-btn" onClick={activateState1}>
							Змінити стан Blue
						</button>
						<button className="task3-btn" onClick={activateState2}>
							Змінити стан Green
						</button>
						<button className="task3-btn" onClick={activateState3}>
							Змінити стан Red
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Task3;
