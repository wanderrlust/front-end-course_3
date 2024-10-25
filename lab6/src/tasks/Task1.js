import { motion } from "framer-motion";
import "../reset.css";
import "../index.css";

export const Task1 = () => {
	return (
		<section>
			<h3 class="task-title">Завдання №1</h3>
			<div class="task-content">
				<motion.div
					className="box"
					initial={{
						x: 0,
						y: 0,
						opacity: 1,
						backgroundColor: "#13ebaa",
						scale: 1,
					}}
					animate={{
						x: [0, 50, -70, -100, -60, 30, 0],
						y: [0, 50, 70, -50, 20, 100, 0],
						opacity: [1, 0.5, 0.8, 1, 0.3, 0.6, 1],
						backgroundColor: [
							"#13ebaa",
							"#008000",
							"#0000ff",
							"#800080",
							"#13e3eb",
							"#eb13ad",
							"#13ebaa",
						],
						scale: [1, 1.2, 0.5, 1, 1.3, 0.2, 1],
					}}
					transition={{
						duration: 7,
						ease: "easeInOut",
						repeat: Infinity,
						repeatType: "loop",
					}}
				/>
			</div>
		</section>
	);
};

export default Task1;
